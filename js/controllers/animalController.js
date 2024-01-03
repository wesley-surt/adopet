import { AnimalEntities } from "../entities/AnimalEntities.js";
import { IbgeAPIService } from "../service/IbgeAPIService.js";
import { StorageService } from "../service/StorageService.js";
import { CitiesView } from "../view/CitiesView.js";
// Caso os campos não estejam todos preenchidos ao clicar em salvar, deve aparecer um popup alertando o usuario de que deve completar os campos. Deve checar tambem se a foto está no localstorage.
const buttonSave = document.getElementById("btn-salvar");
buttonSave.onclick = (e) => {
    e.preventDefault();
    const body = AnimalEntities.create();
    if (!!StorageService.get("animalId")) {
        body.id = StorageService.get("animalId");
        AnimalEntities.uptade(body);
        StorageService.set("animalId", "");
    } else {
        body.userId = StorageService.get("userId");
        AnimalEntities.register(body);
    }
};

const backButton = document.getElementById("btn-voltar");
backButton.onclick = () => {
    StorageService.set("animalId", "");
    window.location = "perfil.html";
};

function fillInAllFields() {
    // A tela deve ter botões para salvar, que ficará desabilitados até que todos os campos estejam preenchidos; deletar, que só irá aparecer se houver uma chave no localstorage chamada animal com um objeto com id; cancelar, que vai redirecionar para a tela de perfil
    if (StorageService.get("animalId")) {
        handleAnimal(StorageService.get("animalId"));
        createButtonDelete();
    } else
        document
            .getElementById("foto")
            .setAttribute("src", "../../image/Usuario.png");
}

function handleAnimal(animalId) {
    AnimalEntities.get(`/${animalId}`).then((animal) => {
        AnimalEntities.fillForm(animal);
    });
}

function createButtonDelete() {
    const fragment = new DocumentFragment();
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.name = "botao";
    button.classList.add("botao");
    button.id = "btn-deletar";
    button.innerHTML = "Deletar";
    button.onclick = () => {
        const animalId = StorageService.get("animalId");
        AnimalEntities.delete(animalId);
        StorageService.set("animalId", "");
    };
    li.append(button);
    fragment.append(li);
    document.getElementById("lista-botoes").append(fragment);
}

AnimalEntities.savePhoto();

fillInAllFields();

const ufSelect = document.querySelector("[data-uf]");
ufSelect.addEventListener("change", callCities);
function callCities() {
    const ufId = ufSelect.value;
    IbgeAPIService.cities(ufId).then((cities) => {
        const parentElementRef = document.querySelector("[data-cidade]");
        const template = new CitiesView(parentElementRef);
        template.loadTemplate(cities);

        if (cities.length === 0)
            alert(
                "O estado escolhido não possui cidades cadastradas na API do IBGE. Por favor, escolha um outro estado."
            );
    });
}
