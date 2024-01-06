import { HttpService } from "../services/HttpService.js";
import { StorageService } from "../services/StorageService.js";

export class UserEntities {
    static login(body) {
        HttpService.post("users/login", body)
            .then((data) => {
                if (data.token && data.userId) {
                    StorageService.set("token", data.token);
                    StorageService.set("userId", data.userId);

                    HttpService.get(`users/${data.userId}`).then((user) => {
                        StorageService.set("user", user);
                        window.location = "animals.html";
                    });
                } else alert("Email ou senha inválido.");
            })
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou entre em contato com nossa equipe técnica. catch"
                );
                console.error(err.message);
            });
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
