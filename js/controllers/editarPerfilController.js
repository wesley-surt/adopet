import { ImgurAPIService } from "../service/ImgurAPIService.js";
import { RequestionBackendService } from "../service/RequestionBackendService.js";
import { StorageService } from "../service/StorageService.js";

const button = document.getElementById("botao");
button.onclick = (e) => {
    e.preventDefault();

    const body = {
        user: {
            photo: StorageService.get("photo") || "",
            name: document.getElementById("nome").value || "",
            city: document.getElementById("cidade").value || "",
            state: document.getElementById("uf").value || "",
            telephone: document.getElementById("telefone").value || "",
            about: document.getElementById("sobre").value || "",
        },
        id: StorageService.get("userId"),
    };

    RequestionBackendService.update("users/update", body)
        .then((user) => {
            StorageService.set("user", user);
            window.location = "perfil.html";
        })
        .catch((err) => {
            alert(
                "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
            console.error(err.message);
        });
};

function fillnAllFields() {
    handleUser(StorageService.get("user"));
}

function handleUser(userStorage) {
    document
        .getElementById("foto")
        .setAttribute(
            "src",
            `${userStorage.photo || "../../image/Usuario.png"}`
        );
    document.getElementById("nome").value = userStorage.name || "";
    document.getElementById("telefone").value = userStorage.telephone || "";
    document.getElementById("cidade").value = userStorage.city || "";
    document.getElementById("uf").value = userStorage.state || "";
    document.getElementById("sobre").value = userStorage.about || "";
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

            StorageService.set("photo", res.data.link);
        })
        .catch(console.error);
};

fillnAllFields();
