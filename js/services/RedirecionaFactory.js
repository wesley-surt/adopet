class RedirecionaFactory{

    constructor(pagina) {
        this._pagina = pagina;
        this._inputs = document.querySelectorAll('input');
        this._janela = new Janela();
    }

    chama(pagina, callback) {
        
         if (this._pagina.ariaValueText === pagina) {

            if (ValidacaoHelper.validando(this._inputs)) callback();
            else this._janela.exibe();
        }
    }
}
