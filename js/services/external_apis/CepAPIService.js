import { HttpService } from "../HttpService.js";

export class CepAPIService {
    static request(cep) {
        return HttpService.request(`https://viacep.com.br/ws/${cep}/json/`);
    }
}
