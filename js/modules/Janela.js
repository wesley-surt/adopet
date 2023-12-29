class Janela{

    constructor() {
        this._janela = document.querySelector('.janela');
    }

    exibe() {
        this._janela.classList.add('abre_janela');
    }

    remove() {
        this._janela.classList.remove('abre_janela');
    }
}
