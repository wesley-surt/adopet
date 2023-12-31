import { User } from "../entities/User.js";
import { StorageService } from "../service/StorageService.js";

const button = document.getElementById("botao");
button.onclick = (e) => {
    e.preventDefault();

    const body = {
        user: {
            photo: document.getElementById("foto").value || "",
            name: document.getElementById("nome").value || "",
            city: document.getElementById("cidade").value || "",
            state: document.getElementById("uf").value || "",
            telephone: document.getElementById("sobre").value || "",
            about: document.getElementById("sobre").value || "",
        },
        id: StorageService.get("userId"),
    };

    console.log(body);
    User.update(body);
};
