import { Http } from "../service/Http.js";

export class User {
    static register(body) {
        console.log(body);
        console.log(body.name);

        const url = "http://localhost:3000/users";

        Http.post(`${url}/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(body),
        })
            .then(console.log)
            .catch(console.error);

        // Inicialmente vai exibir apenas o sucesso e o fracasso
    }
}
