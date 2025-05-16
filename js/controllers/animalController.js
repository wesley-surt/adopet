import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../services/StorageService.js";
import { CepAPIService } from "../services/external_apis/CepAPIService.js";
import { ImageService } from "../services/external_apis/imageService.js";

const inputFileImg = document.getElementById("file");
const img = document.getElementById("foto");
img.setAttribute("src", "../../image/Perfil.png");

inputFileImg.addEventListener("change", function(e) {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            img.src = event.target.result;
        };

        reader.readAsDataURL(file);

    }
});

function modalCloseAlerta() {
    dialogAlert.close();
}

function modalCloseMenu() {
    dialogMenu.close();
}

function save(e) {
    e.preventDefault();

    const inputsAreValid = ValidacaoHelper.validando(
        document.querySelectorAll("[data-input]") || ''
    );
    const selectsAreValid = ValidationForSelect.valid(
        document.querySelectorAll("[data-select]") || ''
    );
    const file =
        document.getElementById("file") || '';

    if (selectsAreValid && inputsAreValid && file) {
        
        const body = AnimalEntities.create();

        ImageService.save(file)
            .then(res => res.json())
            .then(res => {

                body.animal.photo = res._id;
                body.userId = StorageService.get('user')._id

                AnimalEntities.register(body)
                    .then(() => window.location = "profile.html")
                    .catch(err => console.log(err));

            })
            .catch(err => console.log(err));

    } else {
        dialogAlert.open();
    }
}

function comeBack() {
    StorageService.set("animalId", "");
    StorageService.set("photoAnimal", "");
    window.location = "profile.html";
}

function searchCep() {
    CepAPIService.request(cep.value)
        .then((data) => {

            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;

        })
        .catch(console.log);
}

function handleAnimal(animalId) {
    AnimalEntities.get(`${animalId}`).then((animal) => {
        AnimalEntities.fillForm(animal);
    });
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

function handleValidationSelects() {
    const parent =
        document.querySelector("[data-select]").parentNode.parentNode;

    if (ValidationForSelect.valid(document.querySelectorAll("[data-select]")))
        ValidationForSelect.removeAlert(parent);
    else ValidationForSelect.addAlert(parent);
}

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
