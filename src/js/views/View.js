export class View {
    constructor(elemente) {
        this._elemente = elemente;
    }

    template(list) {
        throw new Error("The template must be overridden in the child classes");
    }

    loadTemplate(list) {
        this._elemente.innerHTML = this.template(list);
    }
}
