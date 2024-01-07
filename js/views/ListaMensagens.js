class ListaMensagens {
    constructor() {
        throw new Error("Esta classe não deve ser instanciada");
    }

    static lista() {
        return {
            email: {
                patternMismatch: "O email digitado está invalido.",
                valueMissing: "O campo email não pode permanecer vazio.",
            },
            nome: {
                patternMismatch: "O campo nome possui alguma irregularidade.",
                valueMissing: "O campo nome não pode permanecer vazio.",
            },
            senha: {
                valueMissing: "Você deve preencher o campo de senha.",
                patternMismatch: "A senha deve conter no mínimo 6 digitos.",
            },
            confirmaSenha: {
                customError:
                    "A senha informada não é idêntica a senha escolhida.",
                valueMissing: "Você deve preencher o campo de confirma senha.",
            },
            telefone: {
                patternMismatch: "Formato de número celular incorreto.",
                valueMissing: "Informe o número celular.",
            },
            nomeDoAnimal: {
                patternMismatch: "Este campo possui alguma irregularidade.",
                valueMissing: "Informe o nome do animal.",
            },
            cidade: {
                patternMismatch: "Este campo possui alguma irregularidade.",
                valueMissing: "Digite o nome de sua cidade.",
            },
            uf: {
                patternMismatch: "Este campo possui alguma irregularidade.",
                valueMissing: "Digite o nome do seu estado.",
            },
            cep: {
                patternMismatch: "Este campo deve conter apenas letras.",
                valueMissing: "Este campo não pode ficar vazio.",
            },
        };
    }
}
