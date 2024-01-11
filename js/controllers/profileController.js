import { logout } from "../components/logout.js";
import { StorageService } from "../services/StorageService.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { AnimalView } from "../views/AnimalView.js";
import { addEventsToCards } from "../helpers/addEventsToCards.js";

function modalCloseMenu() {
    dialogMenu.close();
}

function handleUser(userStorage) {
    document
        .getElementById("foto")
        .setAttribute(
            "src",
            `${userStorage.photo || "../../image/Perfil.png"}`
        );
    document.getElementById("nome").innerHTML = userStorage.name || "";
    document.getElementById("telefone").innerHTML = userStorage.telephone || "";
    document.getElementById("cidade").innerHTML = userStorage.city || "";
    document.getElementById("uf").innerHTML = userStorage.state || "";
    document.getElementById("cep").innerHTML = userStorage.cep || "";
    document.getElementById("sobre").innerHTML = userStorage.about || "";
}

function fillInAllFields() {
    handleUser(StorageService.get("user"));
}

const list = document.getElementById("catalogo");
const view = new AnimalView(list);
function handlesRegisteredAnimals(animals) {
    view.loadTemplate(animals);
    addEventsToCards(document.querySelectorAll(".card"), "animal.html");

    const fragment = new DocumentFragment();
    const h3 = document.createElement("span");
    h3.classList.add("titulo-animais-cadastrado");

    if (animals.length > 0) h3.innerHTML = "Animais cadastrados";
    else h3.innerHTML = "Você ainda não cadastrou animais para adoção";

    fragment.append(h3);
    const togglesTitleElement = document.getElementById("paragraph--grupo");
    const firstChild = togglesTitleElement.firstChild;
    togglesTitleElement.insertBefore(fragment, firstChild);
}

const userId = StorageService.get("user")._id;
AnimalEntities.get(`query?userId=${userId}`)
    .then((animals) => {
        handlesRegisteredAnimals(animals);
    })
    .catch((err) => {
        alert(
            "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
        );
        console.error(err);
    });

const buttonEditar = document.getElementById("btn-editar");
buttonEditar.onclick = () => (window.location = "edit_profile.html");

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());

fillInAllFields();
logout(document.querySelector(".menu_sair"));
