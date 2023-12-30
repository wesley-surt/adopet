export class Http {
    static post(url, options) {
        const promiseCallback = (resolve, reject) => {
            fetch(url, options)
                .then((response) => response.json())
                .then(resolve)
                .catch(reject);
        };

        return new Promise(promiseCallback);
    }
}
