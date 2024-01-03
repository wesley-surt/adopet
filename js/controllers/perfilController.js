import { StorageService } from "../service/StorageService.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { AnimalView } from "../view/AnimalView.js";
import { RequestionBackendService } from "../service/RequestionBackendService.js";

function fillnAllFields() {
    handleUser(StorageService.get("user"));
}

function handleUser(userStorage) {
    document
        .getElementById("foto")
        .setAttribute(
            "src",
            `${userStorage.photo || "../../image/Usuario.png"}`
        );
    document.getElementById("nome").innerHTML = userStorage.name || "";
    document.getElementById("telefone").innerHTML = userStorage.telephone || "";
    document.getElementById("cidade").innerHTML = userStorage.city || "";
    document.getElementById("uf").innerHTML = userStorage.state || "";
    document.getElementById("sobre").innerHTML = userStorage.about || "";
}

fillnAllFields();

const buttonEditar = document.getElementById("btn-editar");
buttonEditar.onclick = () => (window.location = "editar-perfil.html");

const list = document.getElementById("catalogo");
const view = new AnimalView(list);
const userId = StorageService.get("user")._id;

AnimalEntities.get(`/query?userId=${userId}`)
    .then((animals) => {
        handlesRegisteredAnimals.call(this, animals);
    })
    .catch((err) => {
        alert(
            "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
        );
        console.error(err);
    });

const buttonDelete = document.getElementById("btn-deletar");
buttonDelete.onclick = () => {
    RequestionBackendService.delete(`users/${userId}`)
        .then(() => {
            StorageService.clear();
            window.location = "login.html";
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde."
            );
        });
};

function addEventsToCards() {
    const cards = document.querySelectorAll(".card");
    cards.forEach((c) => {
        c.addEventListener("click", () => {
            const animalId = c.querySelector(".animal-id").textContent;
            StorageService.set("animalId", animalId);
            window.location = "animal.html";
        });
    });
}

function handlesRegisteredAnimals(animals) {
    view.loadTemplate(animals);
    addEventsToCards();

    const fragment = new DocumentFragment();
    const h3 = document.createElement("h3");
    h3.classList.add("titulo-animais-cadastrado");

    if (animals.length > 0) h3.innerHTML = "Animais cadastrados";
    else h3.innerHTML = "Você ainda não cadastrou animais para adoção";

    fragment.append(h3);
    const togglesTitleElement = document.getElementById("alterna-titulo");
    const firstChild = togglesTitleElement.firstChild;
    togglesTitleElement.insertBefore(fragment, firstChild);
}
