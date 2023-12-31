import { RequestionBackendService } from "../service/RequestionBackendService.js";

var inputs = document.querySelectorAll("[data-input]");

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        let alertaHelper = new AlertaHelper(input.parentNode);

        if (input.validity.valid) {
            alertaHelper.removeAlerta();
        } else {
            alertaHelper.adicionaAlerta();
        }
    });
});

const button = document.getElementById("botao");
button.onclick = () => {
    const body = {
        email: document.getElementById("email").value,
        password: document.getElementById("senha").value,
    };

    console.log(body);
    RequestionBackendService.login(body);
};
