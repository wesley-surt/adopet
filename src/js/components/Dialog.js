class Dialog {
    constructor(dialog) {
        this.dialog = dialog;
    }

    open() {
        this.dialog.showModal();
    }

    close() {
        this.dialog.close();
    }
}
