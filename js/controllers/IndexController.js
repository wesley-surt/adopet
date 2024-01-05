var botoes = document.querySelectorAll(".botao");
botoes.forEach((botao) => {
    botao.onclick = (evento) => {
        if (evento.target.name === "login") {
            window.location = "html/login.html";
        } else if (evento.target.name === "cadastro") {
            window.location = "html/cadastro.html";
        }
    };
});
