import { logout } from "../components/logout.js";
import { UserEntities } from "../entities/UserEntities.js";
import { StorageService } from "../services/StorageService.js";

function modalCloseMenu() {
    dialogMenu.close();
}

function handleUser(userStorage) {
    document
        .getElementById("foto")
        .setAttribute(
            "src",
            `${userStorage.photo || "../../../adopet/image/Perfil.png"}`
        );
    document.getElementById("nome").append(userStorage.name || "");
    document.getElementById("telefone").append(userStorage.telephone || "");
    document.getElementById("cidade").append(userStorage.city || "");
    document.getElementById("uf").append(userStorage.state || "");
    document.getElementById("cep").append(userStorage.cep || "");
    document.getElementById("sobre").append(userStorage.about || "");
}

function searchUser(userId) {
    UserEntities.get(`${userId}`).then((user) => {
        handleUser(user);
    });
}

function fillInAllFields() {
    searchUser(StorageService.get("advertiserId"));
}

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());

fillInAllFields();
