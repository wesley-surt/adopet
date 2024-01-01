import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../service/StorageService.js";
// Caso os campos não estejam todos preenchidos ao clicar em salvar, deve aparecer um popup alertando o usuario de que deve completar os campos. Deve checar tambem se a foto está no localstorage.
const buttonSave = document.getElementById("btn-salvar");
buttonSave.onclick = (e) => {
    e.preventDefault();

    const body = AnimalEntities.create();
    if (StorageService.get("animal")) {
        body.id = StorageService.get("animal")._id;
        AnimalEntities.uptade(body);
    } else {
        body.userId = StorageService.get("userId");
        AnimalEntities.register(body);
    }
};

const buttonDelete = document.getElementById("btn-deletar");
buttonDelete.onclick = (e) => {
    e.preventDefault();

    const id = StorageService.get("animal")._id;
    AnimalEntities.delete(id);
};

function fillnAllFields() {
    // Se não houver um animal carregado previamente no localstrorage a pagina vai ser exibida vazia, sem nenhuma informação, carregando apenas uma imagem para substituir até outra ser escolhida. Se o usuario acessar esta pagina clicando em um dos cards de seus animais cadastrados que vão estar na sua tela de perfil, o mesmo animal será buscado no database e salvo no localstorage durante esse processo. Assim, quando esta tela abrir irá puxar as informações do animal, o que significa que não será um cadastro propriamente dito, e sim uma alteração.
    // A tela deve ter botões para salvar, que ficará desabilitados até que todos os campos estejam preenchidos; deletar, que só irá aparecer se houver uma chave no localstorage chamada animal com um objeto com id; cancelar, que vai redirecionar para a tela de perfil
    if (StorageService.exists("animal")) {
        handleAnimal(StorageService.get("animal"));
    } else
        document
            .getElementById("foto")
            .setAttribute("src", "../../image/Usuario.png");
}

function handleAnimal(animalStorage) {
    AnimalEntities.fillForm(animalStorage);
}

AnimalEntities.savePhoto();

fillnAllFields();
