class RedirecionaController {
    constructor() {
        this._pagina = document.querySelector(".pagina");
        this._janela = new Janela();
        this._redirecionaFactory = new RedirecionaFactory(this._pagina);
    }

    redireciona() {
        if (this._pagina.ariaValueText === "register") {
            this._redirecionaFactory.chama(
                "register",
                () => (window.location = "profile.html")
            );
        } else if (this._pagina.ariaValueText === "login") {
            this._redirecionaFactory.chama(
                "login",
                () => (window.location = "profile.html")
            );
        } else if (this._pagina.ariaValueText === "profile") {
            this._redirecionaFactory.chama("profile", () => {
                alert("Perfil salvo com sucesso!");
                window.location.reload();
            });
        } else if (this._pagina.ariaValueText === "message") {
            this._redirecionaFactory.chama("message", () => {
                alert("Mensagem evniada com sucesso!");
                window.location.reload();
            });
        }
    }
}
