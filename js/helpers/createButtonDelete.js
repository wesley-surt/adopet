import { AnimalEntities } from "../entities/AnimalEntities.js";
import { StorageService } from "../services/StorageService.js";

function createButtonDelete() {
    const button = document.createElement("button");
    const fragment = new DocumentFragment();
    const p = document.createElement("p");

    button.classList.add("texto_deletar");
    button.innerHTML = "Excluir";

    p.classList.add("deletar");
    p.id = "btn-deletar";
    p.name = "botao";
    p.append(button);
    p.onclick = () => {
        const animalId = StorageService.get("animalId");
        AnimalEntities.delete(animalId)
            .then(() => {
                StorageService.set("photoAnimal");
                window.location = "profile.html";
            })
            .catch((err) => {
                alert(
                    "Ocorreu algum erro no servidor. Tente novamente mais tarde ou contate nossa equipe técnica."
                );
                console.error(err);
            });

        StorageService.set("animalId", "");
    };
    fragment.append(p);
    document.querySelector(".secao2").append(fragment);
};

createButtonDelete();
