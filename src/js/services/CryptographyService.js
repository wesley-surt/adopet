export class CryptographyService {
    static encrypt(string) {
        return window.btoa(encodeURIComponent(string));
    }

    static decrypt(b64) {
        return decodeURIComponent(window.atob(b64));
    }
}
