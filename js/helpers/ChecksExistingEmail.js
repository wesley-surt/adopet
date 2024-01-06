import { UserEntities } from "../entities/UserEntities.js";

const reg = RegExp("@");
const email = document.getElementById("email");

email.onblur = () => {
    if (reg.test(email.value)) {
        const body = { email: email.value };

        console.log(email.value);

        UserEntities.emailExists(body)
            .then((data) => {
                if (data.exists) alert("Este email já está cadastrado!");
            })
            .catch(console.log);
    }
};
