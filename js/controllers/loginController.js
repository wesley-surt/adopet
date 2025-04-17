import { UserEntities } from "../entities/UserEntities.js";
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

button.onclick = (e) => {

    e.preventDefault();
    const inputs = document.querySelectorAll("[data-input]");

    if (ValidacaoHelper.validando(inputs)) {

        const body = {
            email: document.getElementById("email").value,
            password: document.getElementById("senha").value
        };

        UserEntities.login(body)
            .then((data) => {

                if (data.token && data.userId) {

                    StorageService.set("token", data.token);
                    StorageService.set("userId", data.userId);

                    UserEntities.get(`${data.userId}`).then((user) => {
                        StorageService.set("user", user);
                        window.location = "adopt_animals.html";
                    });

                } else alert("Email ou senha inválido.");
            })
            .catch((err) => {

                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou entre em contato com nossa equipe técnica."
                );

                console.error(err.message);
            });
            
    } else {
        dialog.open();
    }
};

const dialog = new Dialog(document.querySelector("dialog"));
document.getElementById("modal_close").onclick = dialog.close();
