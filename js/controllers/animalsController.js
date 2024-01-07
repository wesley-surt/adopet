import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../services/StorageService.js";
import { AnimalView } from "../views/AnimalView.js";

function callError(err) {
    console.error(err.message);
    alert(
        "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
    );
}

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
    let estadoSelecionado = filtro.value;
    if (estadoSelecionado == "Mostrar Todos") showCards("");
    else showCards(estadoSelecionado);
}

const filtro = document.querySelector("[data-campoFiltro]");
filtro.addEventListener("change", filtrar);

showCards(StorageService.get("user").state);
