import { letraMaiusculaHelper } from "../helpers/inputEmMaiusculo.js";

var inputs = document.querySelectorAll("[data-input]");
var inputNome = document.getElementById("nome");

inputNome.oninput = letraMaiusculaHelper;

inputs.forEach((input) => {
    input.addEventListener("blur", () => {
        var seletorPai = input.parentNode;
        var alertaHelper = new AlertaHelper(seletorPai);

        if (input.validity.valid) {
            alertaHelper.removeAlerta();
        } else alertaHelper.adicionaAlerta();
    });
});
