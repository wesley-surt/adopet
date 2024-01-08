import { StorageService } from "../services/StorageService.js";

const smallUserImage = document.querySelector(".imagem--usuario");
console.log(smallUserImage);

if (StorageService.get("user").photo) {
    document
        .querySelector(".imagem--usuario")
        .setAttribute("src", `${StorageService.get("user").photo}`);
} else {
    document
        .querySelector(".imagem--ellipse")
        .setAttribute(
            "backGround",
            "url('../../image/Usuario.png') center / cover no-repeat;"
        );
}
