import { letraMaiusculaHelper } from "../helpers/inputEmMaiusculo.js";
import { UserEntities } from "../entities/UserEntities.js";

const inputNome = document.getElementById("nome");
inputNome.oninput = letraMaiusculaHelper;

const inputs = document.querySelectorAll("[data-input]");
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
botao.onclick = (e) => {
    e.preventDefault();
    const body = {
        email: document.getElementById("email").value || "",
        name: document.getElementById("nome").value || "",
        password: document.getElementById("senha").value || "",
        confirmPassword: document.getElementById("confirmaSenha").value || "",
    };

    UserEntities.register(body)
        .then(() => (window.location = "login.html"))
        .catch((err) => {
            console.error(err.message);
            alert(
                "Falha ao tentar cadastrar. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
        });
};
