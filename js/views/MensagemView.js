class MensagemView{

    constructor(){
        this._mensagem = new Mensagem();
    }

    atualizaMensagem(alerta, input){
        var tipoInput = input.dataset.input;
        var lista = ListaErros.lista();

        for(let i = 0; i < lista.length; i++){

            var erro = lista[i];
            
            if(input.validity[erro]){
                this._mensagem.texto = ListaMensagens.lista()[tipoInput][erro];
                break;
            }
            else {
                this._mensagem.texto = '';
            }
        }
        alerta.textContent = this._mensagem.texto;
    }
}
