import { ImgurAPIService } from "../service/ImgurAPIService.js";
import { RequestionBackendService } from "../service/RequestionBackendService.js";
import { StorageService } from "../service/StorageService.js";
// Caso os campos não estejam todos preenchidos ao clicar em salvar, deve aparecer um popup alertando o usuario de que deve completar os campos. Deve checar tambem se a foto está no localstorage.
const button = document.getElementById("btn-salvar");
button.onclick = (e) => {
    e.preventDefault();

    const body = {
        animal: {
            photo: StorageService.get("photoAnimal") || "",
            name: document.getElementById("nome").value || "",
            city: document.getElementById("cidade").value || "",
            state: document.getElementById("uf").value || "",
            age: document.getElementById("idade").value || "",
            measure: document.getElementById("medida").value || "",
            size: document.getElementById("porte").value || "",
            about: document.getElementById("sobre").value || "",
            characteristics1:
                document.getElementById("comportamento1").value || "",
            characteristics2:
                document.getElementById("comportamento2").value || "",
        },
        userId: "65909c4e6371fe4af617e855",
    };

    console.log(body);

    RequestionBackendService.register("animals/register", body)
        .then((animal) => {
            window.location = "perfil.html";
            console.log(animal);
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
            console.error(err.message);
        });
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
    document
        .getElementById("foto")
        .setAttribute("src", `${animalStorage.photo}`);
    document.getElementById("nome").value = animalStorage.name;
    document.getElementById("telefone").value = animalStorage.telephone;
    document.getElementById("cidade").value = animalStorage.city;
    document.getElementById("uf").value = animalStorage.state;
    document.getElementById("sobre").value = animalStorage.about;
}

const file = document.getElementById("file");
file.onchange = () => {
    const data = new FormData();
    data.append("image", file.files[0]);

    ImgurAPIService.save(data)
        .then((res) => {
            document
                .getElementById("foto")
                .setAttribute("src", `${res.data.link}`);

            StorageService.set("photoAnimal", res.data.link);
        })
        .catch(console.error);
};

fillnAllFields();
