import { HttpService } from "../services/HttpService.js";

export class UserEntities {
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
