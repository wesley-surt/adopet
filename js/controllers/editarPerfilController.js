import { listOfStates } from "../helper/listOfStates.js";
import { cropperImagem } from "../helper/testando.js";
import { IbgeAPIService } from "../service/IbgeAPIService.js";
import { ImgurAPIService } from "../service/ImgurAPIService.js";
import { RequestionBackendService } from "../service/RequestionBackendService.js";
import { StorageService } from "../service/StorageService.js";
import { CitiesView } from "../view/CitiesView.js";

const button = document.getElementById("botao");
button.onclick = (e) => {
    e.preventDefault();

    const photo = !!StorageService.get("user").photo
        ? StorageService.get("user").photo
        : StorageService.get("photoUser") || "";

    const ufSelect = document.getElementById("uf");
    const valueSelected = ufSelect.options[ufSelect.selectedIndex].textContent;
    const body = {
        user: {
            photo: photo,
            name: document.getElementById("nome").value || "",
            city: document.getElementById("cidade").value || "",
            state: valueSelected || "",
            telephone: document.getElementById("telefone").value || "",
            about: document.getElementById("sobre").value || "",
        },
        id: StorageService.get("userId"),
    };

    RequestionBackendService.update("users/update", body)
        .then((user) => {
            StorageService.set("user", user);
            StorageService.set("photoUser", "");
            window.location = "perfil.html";
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
            console.error(err.message);
        });
};

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
    document.getElementById("nome").value = userStorage.name || "";
    document.getElementById("telefone").value = userStorage.telephone || "";
    document.getElementById("cidade").value = userStorage.city || "";
    document.getElementById("uf").value =
        traversesListOfStates(userStorage, listOfStates) || "";
    document.getElementById("sobre").value = userStorage.about || "";
}

function traversesListOfStates(userStorage, list) {
    for (let i = 0; i < list.length; i++) {
        const obj = list[i];
        if (obj.state === userStorage.state) return obj.code;
    }
}

const file = document.getElementById("file");
file.onchange = () => {
    const data = new FormData();
    data.append("image", file.files[0]);

    ImgurAPIService.save(data)
        .then((res) => {
            document.getElementById("foto").setAttribute("src", `${image}`);
            StorageService.set("photoUser", res.data.link);
        })
        .catch(console.error);
};

fillnAllFields();

const ufSelect = document.querySelector("[data-uf]");
ufSelect.addEventListener("change", callCities);
function callCities() {
    const ufId = ufSelect.value;
    IbgeAPIService.cities(ufId).then((cities) => {
        const parentElementRef = document.querySelector("[data-cidade]");
        console.log(parentElementRef);
        const template = new CitiesView(parentElementRef);
        template.loadTemplate(cities);

        if (cities.length === 0)
            alert(
                "O estado escolhido não possui cidades cadastradas na API do IBGE. Por favor, escolha um outro estado."
            );
    });
}
