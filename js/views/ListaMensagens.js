class ListaMensagens {
    constructor() {
        throw new Error("Esta classe não deve ser instanciada");
    }

    static lista() {
        return {
            email: {
                patternMismatch: "O email digitado está invalido.",
                valueMissing: "Insira seu email.",
            },
            nome: {
                patternMismatch: "Este campo deve possuir apenas letras.",
                valueMissing: "Digite seu nome.",
            },
            senha: {
                patternMismatch: "A senha deve conter no mínimo 6 digitos.",
                valueMissing: "Digite a senha.",
            },
            confirmaSenha: {
                customError:
                    "A senha informada não é idêntica a senha escolhida.",
                valueMissing:
                    "Você deve preencher o campo para confirmar a senha.",
            },
            telefone: {
                patternMismatch: "Este campo deve possuir apenas números.",
                valueMissing: "Informe o número celular.",
            },
            nomeDoAnimal: {
                patternMismatch: "Este campo deve conter apenas letras.",
                valueMissing: "Informe o nome do animal.",
            },
            cep: {
                patternMismatch: "Este campo deve conter apenas números.",
                valueMissing: "Informe o CEP de sua rua.",
            },
            idade: {
                patternMismatch: "Este campo deve conter apenas números.",
                valueMissing: "Informe a idade do animal.",
            },
        };
    }
}
