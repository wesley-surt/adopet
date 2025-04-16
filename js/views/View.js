export class View {
    constructor(element) {
        this._element = element;
    }

    template(list) {
        throw new Error("The template must be overridden in the child classes");
    }

    loadTemplate(list) {
        this._element.innerHTML = this.template(list);
    }
}
