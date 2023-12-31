var botoes = document.querySelectorAll(".botao");
botoes.forEach((botao) => {
    botao.onclick = (evento) => {
        if (evento.target.name === "login") {
            window.location = "login.html";
        } else if (evento.target.name === "cadastro") {
            window.location = "cadastro.html";
        }
    };
});
