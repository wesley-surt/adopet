import { UserEntities } from "../entities/UserEntities.js";
import { StorageService } from "../services/StorageService.js";

function modalCloseMenu() {
    dialogMenu.close();
}

function searchUser(userId) {
    UserEntities.get(`${userId}`).then((user) => {
        UserEntities.handleUserDisplay(user);
    });
}

searchUser(StorageService.get("tutorId"));

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());
