import { View } from "./View.js";

export class CitiesView extends View {
    template(list) {
        return `
                <select data-input="cidade" data-cidade class="campo__input" name="cidade" id="cidade" required>
                    <option disabled selected value="">Digite uma cidade</option>
                    ${list
                        .map((city) => {
                            return `
                            <option value="${city.nome}">${city.nome}</option>
                        `;
                        })
                        .join("")}
                </select>
        `;
    }
}
