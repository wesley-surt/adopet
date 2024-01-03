import { View } from "./View.js";

export class AnimalView extends View {
    template(list) {
        return `
            ${list
                .map((animal) => {
                    return `
                    
                `;
                })
                .join("")}
        `;
    }
}
