export class IndexView {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.resultado = this.getElement('.scoreboard');
    }
    addToResultado(content1, content2) {
        this.resultado.innerHTML += content1 + content2;
    }
}
