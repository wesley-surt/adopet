import { CryptographyService } from "./CryptographyService.js";

export class StorageService {
    static set(key, value) {
        localStorage.setItem(
            key,
            CryptographyService.encrypt(JSON.stringify(value))
        );
    }

    static get(key) {
        return JSON.parse(
            CryptographyService.decrypt(localStorage.getItem(key))
        );
    }

    static delete(key) {
        this.set(key, "");
    }

    static exists(key) {
        return !!this.get(key);
    }
}
