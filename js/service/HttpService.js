import { StorageService } from "./StorageService.js";

export class HttpService {
    static request(url, options) {
        const promiseCallback = (resolve, reject) => {
            fetch(url, options)
                .then((response) => response.json())
                .then(resolve)
                .catch(reject);
        };

        return new Promise(promiseCallback);
    }

    static post(path, body) {
        const url = "http://localhost:3000";

        return this.request(`${url}/${path}`, {
            method: "POST",
            headers: {
                "x-access-token": `${StorageService.get("token")}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
    }

    static put(path, body) {
        const url = "http://localhost:3000";

        return this.request(`${url}/${path}`, {
            method: "PUT",
            headers: {
                "x-access-token": `${StorageService.get("token")}`,
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        });
    }

    static get(path) {
        console.log(path);
        const url = "http://localhost:3000";
        console.log("entrei no http service");
        return this.request(`${url}/${path}`, {
            method: "GET",
            headers: {
                "x-access-token": `${StorageService.get("token")}`,
                "Content-type": "application/json",
            },
        });
    }
}
