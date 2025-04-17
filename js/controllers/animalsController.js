import { AnimalEntities } from "../entities/AnimalEntities.js";
import { addEventsToCards } from "../helpers/addEventsToCards.js";
import { ImageService } from "../services/external_apis/imageService.js";
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

function addImages (animalsArray) {
    animalsArray.forEach(a => {       

        if(

            a.photo
            && a.photo != ''
            && a.photo != undefined
            && a.photo != null
        ) {

            let img = document.getElementById(a.photo);
            ImageService.handleDisplay(a.photo, img);
        };
    });
}

function showCards(state) {

    const listRef = document.getElementById("catalogo");
    const view = new AnimalView(listRef);

    if (state) {

        AnimalEntities.get(`search?state=${state}`)
            .then((animals) => {
                if(animals.length > 0) {

                    view.loadTemplate(animals);
                    addEventsToCards(

                        document.querySelectorAll(".card"),
                        "animal_profile.html"
                    );

                    addImages(animals);

                } else alert('Nâo há animais cadastrados nesse Estado. Escolha outro estado de sua preferência!')
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

                addImages(animals);
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
