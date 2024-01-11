import { logout } from "../components/logout.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { addEventsToCards } from "../helpers/addEventsToCards.js";
import { StorageService } from "../services/StorageService.js";
import { AnimalView } from "../views/AnimalView.js";

function modalCloseMenu() {
    dialogMenu.close();
}

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
            .then((animals) => {
                view.loadTemplate(animals);
                addEventsToCards(
                    document.querySelectorAll(".card"),
                    "animal_profile.html"
                );
            })
            .catch((err) => callError(err));
    } else {
        AnimalEntities.get("")
            .then((animals) => {
                view.loadTemplate(animals);
                addEventsToCards(
                    document.querySelectorAll(".card"),
                    "animal_profile.html"
                );
            })
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

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());

const state = StorageService.get("user").state;
showCards(state || "");
state
    ? (document.querySelector("[data-campoFiltro]").value = state)
    : "Mostrar Todos";

logout(document.querySelector(".menu_sair"));
