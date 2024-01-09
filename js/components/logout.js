import { StorageService } from "../services/StorageService.js";

export function logout(button) {
    const logout = button;
    logout.addEventListener("click", () => {
        StorageService.clear();
        window.location.reload();
    });
}
