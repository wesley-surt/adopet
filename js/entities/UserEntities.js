import { HttpService } from "../services/HttpService.js";
import { ImageService } from "../services/external_apis/imageService.js";

export class UserEntities {

    static handleUserDisplay(user) {

        user.photo
            ? ImageService.handleDisplay(
                user.photo.replace('uploads\\', ''),
                document.getElementById("foto")
        
            )
            : document.getElementById("foto").setAttribute(
                "src",
                "../../image/Perfil.png"
            );

        document.getElementById("nome").append(user.name || "");
        document.getElementById("telefone").append(user.telephone || "");
        document.getElementById("cidade").append(user.city || "");
        document.getElementById("uf").append(user.state || "");
        document.getElementById("cep").append(user.cep || "");
        document.getElementById("sobre").append(user.about || "");
    }
    
    static login(body) {
        return HttpService.post("users/login", body);
    }

    static register(body) {
        return HttpService.post("users/register", body);
    }

    static update(body) {
        return HttpService.put("users/update", body);
    }

    static get(path) {
        return HttpService.get(`users/${path}`);
    }

    static delete(path) {
        return HttpService.delete(`users/${path}`);
    }

    static emailExists(body) {
        return HttpService.post("users/exists", body);
    }
}
