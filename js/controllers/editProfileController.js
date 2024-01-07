import { UserEntities } from "../entities/UserEntities.js";
import { CepAPIService } from "../services/external_apis/CepAPIService.js";
import { ImgurAPIService } from "../services/external_apis/ImgurAPIService.js";
import { StorageService } from "../services/StorageService.js";

function save(e) {
    e.preventDefault();

    const photo = !!StorageService.get("user").photo
        ? StorageService.get("user").photo
        : StorageService.get("photoUser") || "";

    const body = {
        user: {
            photo: photo,
            name: document.getElementById("nome").value || "",
            city: document.getElementById("cidade").value || "",
            state: document.getElementById("uf").value || "",
            telephone: document.getElementById("telefone").value || "",
            about: document.getElementById("sobre").value || "",
            cep: document.getElementById("cep").value || "",
        },
        id: StorageService.get("userId"),
    };

    UserEntities.update(body)
        .then((user) => {
            StorageService.set("user", user);
            StorageService.set("photoUser", "");
            window.location = "profile.html";
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
            console.error(err.message);
        });
}

function exclusion() {
    UserEntities.delete(userId)
        .then(() => {
            StorageService.clear();
            window.location = "login.html";
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde."
            );
        });
}

function handleUser(userStorage) {
    console.log(userStorage);
    document
        .getElementById("foto")
        .setAttribute(
            "src",
            `${userStorage.photo || "../../image/Usuario.png"}`
        );
    document.getElementById("nome").value = userStorage.name || "";
    document.getElementById("telefone").value = userStorage.telephone || "";
    document.getElementById("cidade").value = userStorage.city || "";
    document.getElementById("uf").value = userStorage.state || "";
    document.getElementById("cep").value = userStorage.cep || "";
    document.getElementById("sobre").value = userStorage.about || "";
}

function savePhoto() {
    const data = new FormData();
    data.append("image", file.files[0]);

    ImgurAPIService.save(data)
        .then((res) => {
            const photoRef = document.querySelector("[data-fotoPerfil]");
            photoRef.setAttribute("src", `${res.data.link}`);
            StorageService.set("photoUser", res.data.link);
        })
        .catch(console.error);
}

function searchCep() {
    // Implementar depois uma validação que vai verificar se o formato do cep está correto antes de fazer a requisição.
    CepAPIService.request(cep.value)
        .then((data) => {
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
        })
        .catch(console.log);
}

function fillnAllFields() {
    handleUser(StorageService.get("user"));
}

fillnAllFields();

const button = document.getElementById("botao");
button.onclick = save;

const buttonDelete = document.getElementById("btn-deletar");
buttonDelete.onclick = exclusion;

const file = document.getElementById("file");
file.onchange = savePhoto;

const cep = document.getElementById("cep");
cep.onblur = searchCep;