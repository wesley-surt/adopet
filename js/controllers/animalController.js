import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../services/StorageService.js";
import { CepAPIService } from "../services/external_apis/CepAPIService.js";

function modalClose() {
    dialog.close();
}

function save(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("[data-input]");
    const selectsAreValid = ValidationForSelect.valid(
        document.querySelectorAll("[data-select]")
    );

    if (
        selectsAreValid &&
        ValidacaoHelper.validando(inputs) &&
        document.getElementById("file").value
    ) {
        const body = AnimalEntities.create();
        StorageService.set("photoAnimal", "");

        if (!!StorageService.get("animalId")) {
            body.id = StorageService.get("animalId");
            AnimalEntities.uptade(body)
                .then(() => {
                    window.location = "profile.html";
                })
                .catch((err) => {
                    alert(
                        "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                    );
                    console.error(err.message);
                });

            StorageService.set("animalId", "");
        } else {
            body.userId = StorageService.get("userId");
            AnimalEntities.register(body)
                .then(() => (window.location = "profile.html"))
                .catch((err) => {
                    alert(
                        "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                    );
                    console.error(err.message);
                });
        }
    } else {
        dialog.open();
    }
}

function comeBack() {
    StorageService.set("animalId", "");
    window.location = "profile.html";
}

function createButtonDelete() {
    const fragment = new DocumentFragment();
    const button = document.createElement("button");
    button.name = "botao";
    button.classList.add("botao");
    button.id = "btn-deletar";
    button.innerHTML = "Excluir";
    button.onclick = () => {
        const animalId = StorageService.get("animalId");
        AnimalEntities.delete(animalId)
            .then(() => (window.location = "profile.html"))
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
                console.error(err);
            });

        StorageService.set("animalId", "");
    };
    fragment.append(button);
    document.querySelector(".secao2").append(fragment);
}

function searchCep() {
    CepAPIService.request(cep.value)
        .then((data) => {
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
        })
        .catch(console.log);
}

function fillInAllFields() {
    if (StorageService.get("animalId")) {
        handleAnimal(StorageService.get("animalId"));
        createButtonDelete();
    } else
        document
            .getElementById("foto")
            .setAttribute("src", "../../image/Usuario.png");
}

function handleAnimal(animalId) {
    AnimalEntities.get(`${animalId}`).then((animal) => {
        AnimalEntities.fillForm(animal);
    });
}

function handleValidationSelects() {
    const parent =
        document.querySelector("[data-select]").parentNode.parentNode;

    console.log();

    if (ValidationForSelect.valid(document.querySelectorAll("[data-select]")))
        ValidationForSelect.removeAlert(parent);
    else ValidationForSelect.addAlert(parent);
}

fillInAllFields();

const buttonSave = document.getElementById("btn-salvar");
buttonSave.onclick = save;

const backButton = document.getElementById("btn-voltar");
backButton.onclick = comeBack;

const cep = document.getElementById("cep");
cep.onblur = searchCep;

const dialog = new Dialog(document.querySelector("dialog"));
document.getElementById("modal_close").onclick = modalClose;

const selects = document.querySelectorAll("[data-select]");
selects.forEach((s) => s.addEventListener("blur", handleValidationSelects));

AnimalEntities.savePhoto();
