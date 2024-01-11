class AlertaHelper{

    constructor(seletorPai){
        this._seletorPai = seletorPai;
        this._mensagemView = new MensagemView(this._seletorPai);
        this._label = seletorPai.querySelector('[data-label]');
        this._input = seletorPai.querySelector('[data-input]');
        this._alerta = seletorPai.querySelector('[data-alerta]');
    }

    adicionaAlerta(){
        this._label.classList.add('alerta_label');
        this._input.classList.add('alerta_input');
        this._alerta.classList.add('exibir_alerta');

        this._mensagemView.atualizaMensagem(this._alerta, this._input);
    }

    removeAlerta(){
        this._label.classList.remove('alerta_label');
        this._input.classList.remove('alerta_input');
        this._alerta.classList.remove('exibir_alerta');

        this._mensagemView.atualizaMensagem(this._alerta, this._input);
    }
}
