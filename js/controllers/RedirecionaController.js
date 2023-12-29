class RedirecionaController {

    constructor(){
        
        this._pagina = document.querySelector('.pagina');
        this._janela = new Janela();
        this._redirecionaFactory = new RedirecionaFactory(this._pagina);
    }

    redireciona() {
        
        if (this._pagina.ariaValueText === 'cadastro') {
        
            this._redirecionaFactory.chama(
                'cadastro', 
                () => window.location = 'perfil.html'
            )}
        
        else if (this._pagina.ariaValueText === 'login') {
        
            this._redirecionaFactory.chama(
                'login', 
                () => window.location = 'perfil.html'
            )}
        
        else if (this._pagina.ariaValueText === 'perfil') {
        
            this._redirecionaFactory.chama(
                'perfil',
                () => {
                    alert('Perfil salvo com sucesso!');
                    window.location.reload();
            })
        }
        
        else if (this._pagina.ariaValueText === 'mensagem') {
        
            this._redirecionaFactory.chama(
                'mensagem', 
                () => {
                    alert('Mensagem evniada com sucesso!');
                    window.location.reload();
            })
        }
    }
}
