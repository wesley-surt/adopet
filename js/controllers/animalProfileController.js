import { logout } from "../components/logout.js";
import { StorageService } from "../services/StorageService.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { UserEntities } from "../entities/UserEntities.js";

function modalCloseMenu() {
    dialogMenu.close();
}

function handleAnimal(animalStorage) {
    document
        .getElementById("foto")
        .setAttribute("src", `${animalStorage.photo}`);
    document.getElementById("nome").append(animalStorage.name || "");
    document.getElementById("idade").append(animalStorage.age || "");
    document.getElementById("cep").append(animalStorage.cep || "");
    document.getElementById("cidade").append(animalStorage.city || "");
    document.getElementById("uf").append(animalStorage.state || "");
    document.getElementById("sobre").append(animalStorage.about || "");
    document.getElementById("medida").append(animalStorage.measure || "");
    document.getElementById("porte").append(animalStorage.size || "");
    document
        .getElementById("comportamento1")
        .append(animalStorage.characteristics1 || "");
    document
        .getElementById("comportamento2")
        .append(animalStorage.characteristics2 || "");
}

function handleUser(user) {
    console.log(user);
    document
        .getElementById("ellipse--anunciante")
        .setAttribute("src", `${user.photo || "../../../image/Perfil.png"}`);
    document.getElementById("nome_anunciante").append(`${user.name}`);
}

function searchUser(userId) {
    UserEntities.get(`${userId}`).then((user) => handleUser(user));
}

function animalQuest(animalId) {
    AnimalEntities.get(`${animalId}`).then((animal) => {
        console.log(animal.userId);
        handleAnimal(animal);
        searchUser(animal.userId);
    });
}

function fillInAllFields() {
    animalQuest(StorageService.get("animalId"));
}

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());

fillInAllFields();
logout(document.querySelector(".menu_sair"));
