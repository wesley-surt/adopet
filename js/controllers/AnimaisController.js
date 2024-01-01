import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../service/StorageService.js";
import { AnimalView } from "../view/AnimalView.js";

const filtro = document.querySelector("[data-campoFiltro]");
const cards = document.querySelectorAll("[data-card]");

filtro.addEventListener("change", filtrar);
function filtrar() {
    let estadoSelecionado = filtro.options[filtro.selectedIndex].text;

    if (estadoSelecionado == "Mostrar Todos")
        cards.forEach((card) => card.classList.remove("ocultar_card"));
    else {
        cards.forEach((card) => {
            let estado = card.querySelector("[data-estado]").textContent;

            if (estadoSelecionado == estado)
                card.classList.remove("ocultar_card");
            else card.classList.add("ocultar_card");
        });
    }
}

function callError(err) {
    alert(
        "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
    );
    console.error(err);
}

const list = document.getElementById("catalogo");
const view = new AnimalView(list);
if (StorageService.get("user")) {
    const state = StorageService.get("user").state;
    AnimalEntities.get(`/search?state=${state}`)
        .then((animals) => view.loadCard(animals))
        .catch((err) => callError(err));
} else {
    AnimalEntities.get(`/`)
        .then((animals) => view.loadCard(animals))
        .catch((err) => callError(err));
}
