class ValidationForSelect {
    static valid(selects) {
        console.log("entrei no valid select");
        for (let i = 0; i < selects.length; i++) {
            console.log("entrei no for");
            const select = selects[i];
            console.log(select.value);
            if (select.value === "--Selecione--") return false;
        }
        return true;
    }

    static addAlert(parent) {
        const dataLabel = parent.querySelector("[data-label]");
        const dataSelect = parent.querySelectorAll("[data-select]");
        const dataAlert = parent.querySelector("[data-alerta]");

        dataLabel.classList.add("alerta_label");
        dataAlert.classList.add("exibir_alerta");
        dataSelect.forEach((s) => s.classList.add("alerta_input"));
    }

    static removeAlert(parent) {
        const dataLabel = parent.querySelector("[data-label]");
        const dataSelect = parent.querySelectorAll("[data-select]");
        const dataAlert = parent.querySelector("[data-alerta]");

        dataLabel.classList.remove("alerta_label");
        dataAlert.classList.remove("exibir_alerta");
        dataSelect.forEach((s) => s.classList.remove("alerta_input"));
    }
}
