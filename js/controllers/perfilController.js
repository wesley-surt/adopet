import { StorageService } from "../service/StorageService.js";

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
    document.getElementById("nome").innerHTML = userStorage.name;
    document.getElementById("telefone").innerHTML = userStorage.telephone;
    document.getElementById("cidade").innerHTML = userStorage.city;
    document.getElementById("uf").innerHTML = userStorage.state;
    document.getElementById("sobre").innerHTML = userStorage.about;
}

const button = document.getElementById("botao");
button.onclick = () => (window.location = "editar-perfil.html");

fillnAllFields();
