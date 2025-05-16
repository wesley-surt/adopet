import { UserEntities } from "../entities/UserEntities.js";
import { CepAPIService } from "../services/external_apis/CepAPIService.js";
import { StorageService } from "../services/StorageService.js";
import { ImageService } from "../services/external_apis/imageService.js";

const inputFileImg = document.getElementById("file");
const img = document.getElementById("foto");

inputFileImg.addEventListener("change", function(e) {
    const file = e.target.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(event) {
            img.src = event.target.result;
        };

        reader.readAsDataURL(file);
    } else {
        StorageService.get('user').photo
        ? ImageService.handleDisplay(
            StorageService.get('user').photo,
            document.getElementById("foto")
        )
        : document.getElementById("foto").setAttribute(
            "src",
            "../../image/Perfil.png"
        );
    }
});

function modalCloseMenu() {
    dialog.close();
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

        if(file.files[0]) {

            ImageService.save(file)
                .then(res => res.json())
                .then(res => {

                    StorageService.get("user").photo
                    ? ImageService.delete(StorageService.get("user").photo).then(res => console.log(res))
                    : false

                    body.user.photo = res._id;
                    updateUser(body);
                });
        }
        else updateUser(body);

    } else {
        dialogAlert.open();
    }
}

function comeBack() {
    window.location = "profile.html";
}

function exclusion() {
    const user = StorageService.get("user");

    UserEntities.delete(user._id)
        .then(() => {

            StorageService.clear();
            window.location = "login.html";

        })
        .catch((err) => {

            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde."
            );

        });
    
    ImageService.delete(user.photo);
}

function searchCep() {

    CepAPIService.request(cep.value)
        .then((data) => {

            document.getElementById("cidade").value = data.localidade;
            document.getElementById("uf").value = data.uf;
            
        })
        .catch(console.log);
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

const dialog = new Dialog(document.querySelector(".dialogo--menu"));
document.getElementById("modal_close--menu").onclick = modalCloseMenu;

const menuHambuguer = document.querySelector(".menu_hamburguer");
menuHambuguer.addEventListener("click", () => dialog.open());
