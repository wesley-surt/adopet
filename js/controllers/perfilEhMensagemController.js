import { letraMaiusculaHelper } from "../helper/inputEmMaiusculo.js";

var inputs = document.querySelectorAll('.campo__input');
var inputNome = document.getElementById('nome');

inputNome.oninput = letraMaiusculaHelper;

inputs.forEach(input => {

    input.addEventListener('blur', () => {

        var seletorPai = input.parentNode;
        var alertaHelper = new AlertaHelper(seletorPai);

        if (input.validity.valid) alertaHelper.removeAlerta();
        else alertaHelper.adicionaAlerta();
    })
})
