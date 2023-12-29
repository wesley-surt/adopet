
var inputs = document.querySelectorAll('[data-input]');

inputs.forEach(input => {

    input.addEventListener('blur', () => {

        let alertaHelper = new AlertaHelper(input.parentNode);

        if(input.validity.valid){
            alertaHelper.removeAlerta();
        }
        else{
            alertaHelper.adicionaAlerta();
        }
    })
})
