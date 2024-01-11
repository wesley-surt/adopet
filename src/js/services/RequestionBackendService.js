import { HttpService } from "./HttpService.js";
import { StorageService } from "./StorageService.js";

export class RequestionBackendService {
    static login(body) {
        HttpService.post("users/login", body)
            .then((data) => {
                console.log(data);
                console.log(data.token);
                console.log(data.userId);
                if (data.token && data.userId) {
                    StorageService.set("token", data.token);
                    StorageService.set("userId", data.userId);

                    this.get(`users/${data.userId}`).then((user) => {
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

    static register(path, body) {
        return HttpService.post(path, body);
    }

    static update(path, body) {
        return HttpService.put(path, body);
    }

    static get(path) {
        return HttpService.get(path);
    }

    static delete(path) {
        return HttpService.delete(path);
    }
}
