import { HttpService } from "../service/HttpService.js";

const reg = RegExp("@");
const email = document.getElementById("email");

email.onblur = () => {
    if (reg.test(email.value)) {
        const body = { email: email.value };

        console.log(email.value);

        HttpService.post("users/exists", body)
            .then((data) => {
                if (data.exists) alert("Este email já está cadastrado!");
            })
            .catch(console.log);
    }
};
