import { CryptographyService } from "./CryptographyService.js";
export class StorageService {
    static set(key, value) {
        localStorage.setItem(
            key,
            CryptographyService.encrypt(JSON.stringify(value))
        );
    }

    static get(key) {
        if (!!localStorage.getItem(key))
            return JSON.parse(
                CryptographyService.decrypt(localStorage.getItem(key))
            );
        else return "";
    }

    static delete(key) {
        this.set(key, "");
    }

    static exists(key) {
        return !!localStorage.getItem(key);
    }

    static clear() {
        localStorage.clear();
    }
}
