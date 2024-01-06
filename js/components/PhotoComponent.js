export class PhotoComponent {
    static create(url, classes, id) {
        const img = new Image();
        if (classes) img.classList.add(classes);
        if (url) img.setAttribute("src", `${url}`);
        if (id) img.setAttribute("id", `${id}`);
        return img;
    }
}
