import { StorageService } from "../services/StorageService.js";

export function addEventsToCards(cards, page) {
    cards.forEach((c) => {
        c.addEventListener("click", () => {
            const animalId = c.querySelector(".animal-id").textContent;
            StorageService.set("animalId", animalId);
            window.location = page;
        });
    });
}
