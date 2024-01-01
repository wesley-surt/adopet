import { StorageService } from "../service/StorageService.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { AnimalView } from "../view/AnimalView.js";

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

const button = document.getElementById("botao");
button.onclick = () => (window.location = "editar-perfil.html");

const list = document.getElementById("catalogo");
const view = new AnimalView(list);
const userId = StorageService.get("user")._id;
console.log(userId);
AnimalEntities.get(`/query?userId=${userId}`)
    .then((animals) => view.loadCard(animals))
    .catch((err) => {
        alert(
            "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
        );
        console.error(err);
    });
