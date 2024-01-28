function handleMenu() {
    const dialogMenu = new Dialog(document.querySelector(".dialogo--menu"));
    document.getElementById("modal_close--menu").onclick = () =>
        dialogMenu.close();

    const menuHambuguer = document.querySelector(".menu_hamburguer");
    menuHambuguer.addEventListener("click", () => dialogMenu.open());
}

handleMenu();
