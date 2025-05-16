import { StorageService } from "../services/StorageService.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { UserEntities } from "../entities/UserEntities.js";
import { ImageService } from "../services/external_apis/imageService.js";

function modalCloseMenu() {
    dialogMenu.close();
}

function handleAnimal(animal) {

    ImageService.handleDisplay(
        animal.photo,
        document.getElementById("foto")
    )

    document
        .getElementById("foto")
        .setAttribute("src", `${animal.photo}`);
    document.getElementById("nome").append(animal.name || "");
    document.getElementById("idade").append(animal.age || "");
    document.getElementById("cep").append(animal.cep || "");
    document.getElementById("cidade").append(animal.city || "");
    document.getElementById("uf").append(animal.state || "");
    document.getElementById("sobre").append(animal.about || "");
    document.getElementById("medida").append(animal.measure || "");
    document.getElementById("porte").append(animal.size || "");
    document
        .getElementById("comportamento1")
        .append(animal.characteristics1 || "");
    document
        .getElementById("comportamento2")
        .append(animal.characteristics2 || "");
};

function handleUser(user) {
    const img = document.getElementById("ellipse--tutor")

    user.photo
        ?
            ImageService.handleDisplay(user.photo, img)
        :
            img.setAttribute('src', '../../image/Perfil.png')

    document.getElementById("nome_tutor").append(`${user.name}`);
};

function searchUser(userId) {
    UserEntities.get(`${userId}`)
        .then((user) => {
            handleUser(user);
        });
};

AnimalEntities.get(`${StorageService.get("animalId")}`)
    .then((animal) => {
        
        handleAnimal(animal);
        searchUser(animal.userId);
        StorageService.set('tutorId', animal.userId);
    });

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());
