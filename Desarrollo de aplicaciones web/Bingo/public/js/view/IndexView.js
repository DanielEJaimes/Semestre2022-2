export class IndexView {
    constructor() {
        this.getElement = (selector) => document.querySelector(selector);
        this.resultado = this.getElement('.resultado');
        this.numero = this.getElement('.balota');
    }
    addToResultado(content) {
        this.resultado.innerHTML = `<h1>${content}</h1>`;
    }
    addToBalota(content) {
        this.numero.innerHTML = `<h3>${content}</h3>`;
    }
}
