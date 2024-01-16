export default class MenuItem {
    #element;
    constructor(image, title, description) {
        this.#element = (function() {
            const element = document.createElement("div");
            element.classList.add("menu-item");

            const titleElement = document.createElement("div");
            titleElement.textContent = title;
            titleElement.classList.add("item-title");

            const imageElement = new Image();
            imageElement.src = image;
            imageElement.classList.add("item-image");

            const descriptionElement = document.createElement("div");
            descriptionElement.textContent = description;
            descriptionElement.classList.add("item-description");

            element.appendChild(titleElement);
            element.appendChild(imageElement);
            element.appendChild(descriptionElement);

            return element;
        })()
    }

    get element() {
        return this.#element;
    }
}
