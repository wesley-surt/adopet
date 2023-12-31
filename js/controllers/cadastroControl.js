import { letraMaiusculaHelper } from "../helper/inputEmMaiusculo.js";
import { RequestionBackendService } from "../service/RequestionBackendService.js";

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
botao.onclick = (e) => {
    e.preventDefault();
    const body = {
        email: document.getElementById("email").value || "",
        name: document.getElementById("nome").value || "",
        password: document.getElementById("senha").value || "",
        confirmPassword: document.getElementById("confirmaSenha").value || "",
    };

    console.log(body);
    RequestionBackendService.register("users/register", body)
        .then(() => (window.location = "login.html"))
        .catch((err) => {
            console.error(err.message);
            alert(
                "Falha ao tentar cadastrar. Tente novamente mais tarde ou contate nossa equipe técnica."
            );
        });
};
