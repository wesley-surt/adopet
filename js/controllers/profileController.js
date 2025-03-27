import { StorageService } from "../services/StorageService.js";
import { AnimalEntities } from "../entities/AnimalEntities.js";
import { AnimalView } from "../views/AnimalView.js";
import { addEventsToCards } from "../helpers/addEventsToCards.js";
import { ImageService } from "../services/external_apis/imageService.js";

function handleUser(userStorage) {

    userStorage.photo
    ? ImageService.handleDisplay(
        userStorage.photo.replace('uploads\\', ''),
        document.getElementById("foto")
    )
    : document.getElementById("foto").setAttribute(
        "src",
        "../../image/Perfil.png"
    );
    
    document.getElementById("nome").innerHTML = userStorage.name || "";
    document.getElementById("telefone").innerHTML = userStorage.telephone || "";
    document.getElementById("cidade").innerHTML = userStorage.city || "";
    document.getElementById("uf").innerHTML = userStorage.state || "";
    document.getElementById("cep").innerHTML = userStorage.cep || "";
    document.getElementById("sobre").innerHTML = userStorage.about || "";
}

const list = document.getElementById("catalogo");
const view = new AnimalView(list);

function handlesRegisteredAnimals(animals) {

    if (animals.length > 0) {
        view.loadTemplate(animals);
        addEventsToCards(document.querySelectorAll(".card"), "animal.html");
    }

    const fragment = new DocumentFragment();
    const h3 = document.createElement("span");
    h3.classList.add("titulo-animais-cadastrado");

    if (animals.length > 0) h3.innerHTML = "Animais cadastrados";
    else h3.innerHTML = "Você ainda não cadastrou animais para adoção";

    fragment.append(h3);
    const togglesTitleElement = document.getElementById("paragraph--grupo");
    const firstChild = togglesTitleElement.firstChild;
    togglesTitleElement.insertBefore(fragment, firstChild);
}

const userId = StorageService.get("userId");
AnimalEntities.get(`query?userId=${userId}`)
    .then((animals) => {
        handlesRegisteredAnimals(animals);
    })
    .catch((err) => {
        alert(
            "Ocorreu algum erro ao carregar esta pagina. Tente novamente mais tarde ou contate nossa equipe técnica."
        );
        console.error(err);
    });

const buttonEditar = document.getElementById("btn-editar");
buttonEditar.onclick = () => (window.location = "edit_profile.html");

const btnAdd = document.querySelector(".btn-adicionar");
btnAdd.addEventListener("click", () => {
    window.location = "../../html/register_animal_adoption.html";
});

handleUser(StorageService.get("user"));