import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../service/StorageService.js";
// Caso os campos não estejam todos preenchidos ao clicar em salvar, deve aparecer um popup alertando o usuario de que deve completar os campos. Deve checar tambem se a foto está no localstorage.
const button = document.getElementById("btn-salvar");
button.onclick = (e) => {
    e.preventDefault();

    const body = AnimalEntities.create();
    AnimalEntities.register(body);
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
