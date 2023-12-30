var botoes = document.querySelectorAll(".botao");

botoes.forEach((botao) => {
    botao.onclick = (evento) => {
        var pagina = document.querySelector(".pagina").ariaValueText;

        if (pagina === "inicio") {
            if (evento.target.name === "login") {
                window.location = "html/login.html";
            } else if (evento.target.name === "cadastro") {
                window.location = "html/cadastro.html";
            }
        }
    };
});
