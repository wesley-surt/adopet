import { StorageService } from "../services/StorageService.js";

const logouts = document.querySelectorAll(".menu_sair");
logouts.forEach((l) => {
    l.addEventListener("click", (e) => {
        e.preventDefault();
        StorageService.clear();
        window.location = "../../index.html";
    });
});
