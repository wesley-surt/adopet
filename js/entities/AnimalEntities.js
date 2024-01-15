import { HttpService } from "../services/HttpService.js";
import { ImgurAPIService } from "../services/external_apis/ImgurAPIService.js";
import { StorageService } from "../services/StorageService.js";

export class AnimalEntities {
    static register(body) {
        return HttpService.post("animals/register", body);
    }

    static uptade(body) {
        return HttpService.put("animals/update", body);
    }

    static delete(animalId) {
        return HttpService.delete(`animals/${animalId}`);
    }

    static get(path) {
        return HttpService.get(`animals/${path}`);
    }

    static create() {
        return {
            animal: {
                photo: StorageService.get("photoAnimal") || "",
                name: document.getElementById("nome").value || "",
                city: document.getElementById("cidade").value || "",
                state: document.getElementById("uf").value || "",
                age: document.getElementById("idade").value || "",
                cep: document.getElementById("cep").value || "",
                measure: document.getElementById("medida").value || "",
                size: document.getElementById("porte").value || "",
                about: document.getElementById("sobre").value || "",
                characteristics1:
                    document.getElementById("comportamento1").value || "",
                characteristics2:
                    document.getElementById("comportamento2").value || "",
            },
        };
    }

    static fillForm(animal) {
        StorageService.set("photoAnimal", animal.photo);

        document.getElementById("foto").setAttribute("src", `${animal.photo}`);
        document.getElementById("nome").value = animal.name;
        document.getElementById("idade").value = animal.age;
        document.getElementById("cep").value = animal.cep;
        document.getElementById("cidade").value = animal.city;
        document.getElementById("uf").value = animal.state;
        document.getElementById("sobre").value = animal.about;
        document.getElementById("medida").value = animal.measure;
        document.getElementById("porte").value = animal.size;
        document.getElementById("comportamento1").value =
            animal.characteristics1;
        document.getElementById("comportamento2").value =
            animal.characteristics2;
    }

    static savePhoto() {
        const file = document.getElementById("file");
        file.onchange = () => {
            const data = new FormData();
            data.append("image", file.files[0]);

            ImgurAPIService.save(data)
                .then((res) => {
                    document
                        .getElementById("foto")
                        .setAttribute("src", `${res.data.link}`);

                    StorageService.set("photoAnimal", res.data.link);
                })
                .catch(console.error);
        };
    }
}