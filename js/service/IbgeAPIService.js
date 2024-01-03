import { HttpService } from "./HttpService.js";

export class IbgeAPIService {
    static cities(ufId) {
        return HttpService.request(
            `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufId}/distritos?orderBy=nome`
        );
    }
}
