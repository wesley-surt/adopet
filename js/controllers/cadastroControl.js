import { User } from "../entities/User.js";
import { letraMaiusculaHelper } from "../helper/inputEmMaiusculo.js";

var inputs = document.querySelectorAll("[data-input]");
var inputNome = document.getElementById("nome");

inputNome.oninput = letraMaiusculaHelper;

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        let senhasProxyFactory = SenhasProxyFactory.create(
            new SenhasHelper(),
            "_senha",
            "_confirmaSenha"
        );

        senhasProxyFactory.compara();

        let alertaHelper = new AlertaHelper(input.parentNode);

        if (input.validity.valid) {
            alertaHelper.removeAlerta();
        } else {
            alertaHelper.adicionaAlerta();
        }
    });
});

const botao = document.getElementById("botao");
botao.onclick = () => {
    const body = {
        email: document.getElementById("email").value || "",
        name: document.getElementById("nome").value || "",
        password: document.getElementById("senha").value || "",
        confirmPassword: document.getElementById("confirmaSenha").value || "",
    };

    console.log(body);
    User.register(body);
};
