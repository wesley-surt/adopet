const logouts = document.querySelectorAll(".menu_sair");

logouts.addEventListener("click", () => {
    StorageService.clear();
    window.location = "login.html";
});
