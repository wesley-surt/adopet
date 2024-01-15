class ListaErros{

    constructor(){
        throw new Error('Esta classe não pode ser instanciada');
    }

    static lista(){
        return [
            'customError',
            'patternMismatch',
            'valueMissing'
        ]
    }
}
