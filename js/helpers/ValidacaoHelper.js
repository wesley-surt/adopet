class ValidacaoHelper {

    static validando(inputs) {

        let resultado = null;
        
        for (let i = 0; i < inputs.length; i++) {

            let input = inputs[i];

            if (input.validity.valid) resultado = true;
            else return resultado = false;
        }

        return resultado;
    }
}
