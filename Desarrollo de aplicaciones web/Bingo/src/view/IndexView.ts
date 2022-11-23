export class IndexView{

    private resultado: any;
    private numero:any;

    constructor() {        
        this.resultado = this.getElement('.resultado');  
        this.numero = this.getElement('.balota');
    }

    private getElement = (selector: string): HTMLElement | null => document.querySelector(selector);

    public addToResultado(content: string): void {
        this.resultado.innerHTML = `<h1>${content}</h1>`;
    }
    public addToBalota(content: string): void {
        this.numero.innerHTML = `<h3>${content}</h3>`;
    }
}