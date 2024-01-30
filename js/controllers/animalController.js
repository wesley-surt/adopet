import { logout } from "../components/logout.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../services/StorageService.js";
import { CepAPIService } from "../services/external_apis/CepAPIService.js";

function modalCloseAlerta() {
    dialogAlert.close();
}

function modalCloseMenu() {
    dialogMenu.close();
}

function save(e) {
    e.preventDefault();

    const inputsAreValid = ValidacaoHelper.validando(
        document.querySelectorAll("[data-input]")
    );
    const selectsAreValid = ValidationForSelect.valid(
        document.querySelectorAll("[data-select]")
    );
    const file =
        document.getElementById("file").value ||
        localStorage.getItem("photoAnimal")
            ? StorageService.get("photoAnimal")
            : "";

    if (selectsAreValid && inputsAreValid && file) {
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
        dialogAlert.open();
    }
}

function comeBack() {
    StorageService.set("animalId", "");
    StorageService.set("photoAnimal", "");
    window.location = "profile.html";
}

function createButtonDelete() {
    const button = document.createElement("button");
    const fragment = new DocumentFragment();
    const p = document.createElement("p");

    button.classList.add("texto_deletar");
    button.innerHTML = "Excluir";

    p.classList.add("deletar");
    p.id = "btn-deletar";
    p.name = "botao";
    p.append(button);
    p.onclick = () => {
        const animalId = StorageService.get("animalId");
        AnimalEntities.delete(animalId)
            .then(() => {
                StorageService.set("photoAnimal");
                window.location = "profile.html";
            })
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
                console.error(err);
            });

        StorageService.set("animalId", "");
    };
    fragment.append(p);
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
            .setAttribute("src", "../../../adopet/image/Perfil.png");
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

const dialogAlert = new Dialog(document.querySelector(".dialogo--alerta"));
document.getElementById("modal_close").onclick = modalCloseAlerta;

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());

const selects = document.querySelectorAll("[data-select]");
selects.forEach((s) => s.addEventListener("blur", handleValidationSelects));

AnimalEntities.savePhoto();
