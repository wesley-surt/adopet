import { StorageService } from "../services/StorageService.js";

if (StorageService.get("user").photo) {
    document
        .querySelector(".imagem--usuario")
        .setAttribute("src", `${StorageService.get("user").photo}`);
} else {
    const ellipse = document.getElementById("ellipse");
    ellipse.style.backgroundImage = "url(../../../image/Usuario.png)";
}
