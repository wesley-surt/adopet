import { UserEntities } from "../entities/UserEntities.js";
import { HttpService } from "../services/HttpService.js";
import { StorageService } from "../services/StorageService.js";

var inputs = document.querySelectorAll("[data-input]");

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        let alertaHelper = new AlertaHelper(input.parentNode);

        if (input.validity.valid) alertaHelper.removeAlerta();
        else alertaHelper.adicionaAlerta();
    });
});

const button = document.getElementById("botao");
button.onclick = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if (email && password) {
        const body = { email: email, password: password };
        console.log(body);
        UserEntities.login(body)
            .then((data) => {
                if (data.token && data.userId) {
                    StorageService.set("token", data.token);
                    StorageService.set("userId", data.userId);

                    HttpService.get(`users/${data.userId}`).then((user) => {
                        StorageService.set("user", user);
                        window.location = "animals.html";
                    });
                } else alert("Email ou senha inválido.");
            })
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou entre em contato com nossa equipe técnica. catch"
                );
                console.error(err.message);
            });
    } else alert("Preencha os campos de email e senha para proceguir");
};
