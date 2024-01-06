class SenhasHelper{

    constructor(){
        
        this._senha = document.getElementById('senha');
        this._confirmaSenha = document.getElementById('confirmaSenha');
        Object.freeze(this);

    }


    compara(){
      
        if(this._senha.value === this._confirmaSenha.value)
            confirmaSenha.setCustomValidity('');
        else confirmaSenha.setCustomValidity('Nao confere');
    }
}
