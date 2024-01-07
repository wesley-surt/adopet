import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../services/StorageService.js";
import { AnimalView } from "../views/AnimalView.js";

/**
 const cards = document.querySelectorAll("[data-card]");
 * Futuramente devo usar esse trecho de código para filtrar por cidade
 * 
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
 */

function callError(err) {
    console.error(err.message);
    alert(
        "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
    );
}

const filtro = document.querySelector("[data-campoFiltro]");

function showCards(state) {
    const listRef = document.getElementById("catalogo");
    const view = new AnimalView(listRef);

    if (state) {
        AnimalEntities.get(`search?state=${state}`)
            .then((animals) => view.loadTemplate(animals))
            .catch((err) => callError(err));
    } else {
        AnimalEntities.get("")
            .then((animals) => view.loadTemplate(animals))
            .catch((err) => callError(err));
    }
}

function filtrar() {
    let estadoSelecionado = filtro.options[filtro.selectedIndex].text;
    if (estadoSelecionado == "Mostrar Todos") showCards("");
    else showCards(estadoSelecionado);
}

filtro.addEventListener("change", filtrar);
showCards(StorageService.get("user").state);
