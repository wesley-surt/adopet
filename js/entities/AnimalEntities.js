import { ImgurAPIService } from "../service/ImgurAPIService.js";
import { RequestionBackendService } from "../service/RequestionBackendService.js";
import { StorageService } from "../service/StorageService.js";

export class AnimalEntities {
    static register(body) {
        RequestionBackendService.register("animals/register", body)
            .then((animal) => (window.location = "perfil.html"))
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
                console.error(err.message);
            });
    }

    static uptade(body) {
        RequestionBackendService.update("animals/update", body)
            .then((animal) => (window.location = "perfil.html"))
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
                console.error(err.message);
            });
    }

    static delete(animalId) {
        RequestionBackendService.delete(`animals/${animalId}`)
            .then((animal) => (window.location = "perfil.html"))
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
            });
    }

    static get() {
        return RequestionBackendService.get(`animals`);
    }

    static create() {
        return {
            animal: {
                photo: StorageService.get("photoAnimal") || "",
                name: document.getElementById("nome").value || "",
                city: document.getElementById("cidade").value || "",
                state: document.getElementById("uf").value || "",
                age: document.getElementById("idade").value || "",
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

    static fillForm(animalStorage) {
        document
            .getElementById("foto")
            .setAttribute("src", `${animalStorage.photo}`);
        document.getElementById("nome").value = animalStorage.name;
        document.getElementById("telefone").value = animalStorage.telephone;
        document.getElementById("cidade").value = animalStorage.city;
        document.getElementById("uf").value = animalStorage.state;
        document.getElementById("sobre").value = animalStorage.about;
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
