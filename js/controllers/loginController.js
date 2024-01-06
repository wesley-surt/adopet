import { UserEntities } from "../entities/UserEntities.js";

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
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    if (email && password) {
        const body = { email: email, password: password };
        console.log(body);
        UserEntities.login(body);
    } else alert("Preencha os campos de email e senha para proceguir");
};
