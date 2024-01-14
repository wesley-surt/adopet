var botoes = document.querySelectorAll(".botao");
botoes.forEach((botao) => {
    botao.onclick = (evento) => {
        if (evento.target.name === "login") {
            window.location = "./html/login.html";
        } else if (evento.target.name === "register") {
            window.location = "./html/register.html";
        }
    };
});
