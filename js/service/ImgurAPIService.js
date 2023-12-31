import { Http } from "./Http.js";

export class ImgurAPIService {
    static save(body) {
        return Http.request(
            "https://api.imgur.com/3/image",
            this.options(body)
        );
    }

    static options(body) {
        const CLIENT_ID = "0fbd4fd8e99f9fa";

        return {
            method: "POST",
            body: body,
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}`,
            },
        };
    }
}
