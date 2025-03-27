import { UserEntities } from "../entities/UserEntities.js";
import { CepAPIService } from "../services/external_apis/CepAPIService.js";
import { StorageService } from "../services/StorageService.js";
import { ImageService } from "../services/external_apis/imageService.js";

const inputFileImg = document.getElementById("file");
const photo = document.getElementById("foto");

// Quando um novo arquivo for selecionado
inputFileImg.addEventListener("change", function(e) {
    const file = e.target.files[0]; // Pega o primeiro arquivo selecionado

    if (file) {
        const reader = new FileReader(); // Cria um FileReader para ler o arquivo

        // Quando o FileReader terminar de ler o arquivo
        reader.onload = function(event) {
            photo.src = event.target.result; // Atualiza a imagem exibida
        };

        reader.readAsDataURL(file); // Lê o arquivo como URL (base64)
    } else {
        StorageService.get('user').photo
        ? ImageService.handleDisplay(
            StorageService.get('user').photo.replace('uploads\\', ''),
            document.getElementById("foto")
        )
        : document.getElementById("foto").setAttribute(
            "src",
            "../../image/Perfil.png"
        ); // Volta para a imagem padrão se nenhum arquivo for selecionado
    }
});

function modalCloseMenu() {
    dialogMenu.close();
}

function modalCloseAlert() {
    dialogAlert.close();
}

function updateUser(body) {
        
    UserEntities.update(body)
        .then((user) => {
            StorageService.set("user", user);
            window.location = "profile.html";
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
            console.error(err.message);
        });
}

function save(e) {
    e.preventDefault();
    const inputs = document.querySelectorAll("[data-input]");

    if (ValidacaoHelper.validando(inputs)) {

        const body = {
            user: {
                photo: '',
                name: document.getElementById("nome").value || "",
                city: document.getElementById("cidade").value || "",
                state: document.getElementById("uf").value || "",
                telephone: document.getElementById("telefone").value || "",
                about: document.getElementById("sobre").value || "",
                cep: document.getElementById("cep").value || "",
            },
            id: StorageService.get("userId"),
        };
        
        const file = document.getElementById('file');
        
        file
        ? ImageService.save(file)
            .then(res => res.json())
            .then(res => {
                body.user.photo = res.src;
                updateUser(body);
            })
        : updateUser(body);

    } else {
        dialogAlert.open();
    }
}

function comeBack() {
    window.location = "profile.html";
}

function exclusion() {
    UserEntities.delete(StorageService.get("userId"))
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

    userStorage.photo
    ? ImageService.handleDisplay(
        userStorage.photo.replace('uploads\\', ''),
        document.getElementById("foto")
    )
    : document.getElementById("foto").setAttribute(
        "src",
        "../../image/Perfil.png"
    );

    document.getElementById("nome").value = userStorage.name || "";
    document.getElementById("telefone").value = userStorage.telephone || "";
    document.getElementById("cidade").value = userStorage.city || "";
    document.getElementById("uf").value = userStorage.state || "";
    document.getElementById("cep").value = userStorage.cep || "";
    document.getElementById("sobre").value = userStorage.about || "";
}

function searchCep() {
    CepAPIService.request(cep.value)
        .then((data) => {
            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
        })
        .catch(console.log);
}

handleUser(StorageService.get("user"));

const saveButton = document.getElementById("btn-salvar");
saveButton.onclick = save;

const backButton = document.getElementById("btn-voltar");
backButton.onclick = comeBack;

const buttonDelete = document.getElementById("btn-deletar");
buttonDelete.onclick = exclusion;

const cep = document.getElementById("cep");
cep.onblur = searchCep;

const dialogAlert = new Dialog(document.querySelector(".dialogo--alerta"));
document.getElementById("modal_close").onclick = modalCloseAlert;

const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialogMenu.open());
