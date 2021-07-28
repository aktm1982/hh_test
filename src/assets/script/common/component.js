export class Component {
    constructor(selector) {
        this.element = document.getElementById(selector);
        this.init();
    }

    init() {}
}