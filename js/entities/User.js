import { Http } from "../service/Http.js";
import { StorageService } from "../service/StorageService.js";

export class User {
    static register(body) {
        this.post("register", body).then(console.log).catch(console.error);
        // Fazer redirecionar para login caso o cadastro seja um sucesso
        // e exibir uma mensagem de erro caso não seja
    }

    static login(body) {
        this.post("login", body)
            .then((data) => {
                StorageService.set("token", data.token);
                StorageService.set("userId", data.userId);
                window.location = "animais.html";
            })
            .catch((err) => {
                alert("Email ou senha inválido.");
                console.error(err.message);
            });
    }

    static update(body) {
        this.put("update", body)
            .then((user) => {
                StorageService.set("user", user);
                //window.location = "animais.html";
            })
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
                console.error(err.message);
            });
    }

    static post(uri, body) {
        const url = "http://localhost:3000/users";

        return Http.request(`${url}/${uri}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
    }

    static put(uri, body) {
        const url = "http://localhost:3000/users";

        return Http.request(`${url}/${uri}`, {
            method: "PUT",
            headers: {
                "x-access-token": `${StorageService.get("token")}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
    }
}
