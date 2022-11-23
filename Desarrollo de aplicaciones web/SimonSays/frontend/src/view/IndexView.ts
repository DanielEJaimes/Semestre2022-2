export class IndexView{

    private resultado: any;

    constructor() {        
        this.resultado = this.getElement('.scoreboard');
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    public addToResultado(content1: string,content2:string): void {
        this.resultado.innerHTML += content1 + content2;
    }
}