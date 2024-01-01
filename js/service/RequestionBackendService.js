import { HttpService } from "./HttpService.js";
import { StorageService } from "./StorageService.js";

export class RequestionBackendService {
    static login(body) {
        HttpService.post("users/login", body)
            .then((data) => {
                StorageService.set("token", data.token);
                StorageService.set("userId", data.userId);

                this.get(`users/${data.userId}`).then((user) => {
                    StorageService.set("user", user);
                    console.log("entrei get dentro do login");
                });

                window.location = "animais.html";
            })
            .catch((err) => {
                alert("Email ou senha inválido.");
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
        console.log(path);
        return HttpService.get(path);
    }

    static delete() {}
}
