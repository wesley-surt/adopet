import { UserEntities } from "../entities/UserEntities.js";
import { ImageService } from "../services/external_apis/imageService.js";
import { StorageService } from "../services/StorageService.js";

function modalCloseMenu() {
    dialogMenu.close();
}

function handleUser(user) {
    user.photo
        ? ImageService.handleDisplay(
            user.photo.replace('uploads\\', ''),
            document.getElementById("foto")
    
        )
        : document.getElementById("foto").setAttribute(
            "src",
            "../../image/Perfil.png"
        );

    document.getElementById("nome").append(user.name || "");
    document.getElementById("telefone").append(user.telephone || "");
    document.getElementById("cidade").append(user.city || "");
    document.getElementById("uf").append(user.state || "");
    document.getElementById("cep").append(user.cep || "");
    document.getElementById("sobre").append(user.about || "");
}

function searchUser(userId) {
    UserEntities.get(`${userId}`).then((user) => {
        handleUser(user);
    });
}

searchUser(StorageService.get("userId"));

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());
