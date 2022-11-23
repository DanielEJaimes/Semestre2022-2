import { IndexModel } from "src/model/IndexModel";
import { IndexView } from "src/view/IndexView";

export class IndexController {

    public model:IndexModel;
    public view:IndexView;
    b: number[];
    filaB:any;
    i: number[];
    filaI:any;
    n: number[];
    filaN:any;
    g: number[];
    filaG:any;
    o: number[];
    filaO:any;
    carton: number[];
    balotas: number[];
    balotasSelected: number[];
    balotaShow:any;
    nextBalota:any;

    constructor(model: IndexModel, view:IndexView) {
        this.model = model;
        this.view = view;
        this.b = [];
        this.i = [];
        this.n = [];
        this.g = [];
        this.o = [];
        this.filaB = document.querySelectorAll('.number-b');
        this.filaI = document.querySelectorAll('.number-i');
        this.filaN = document.querySelectorAll('.number-n');
        this.filaG = document.querySelectorAll('.number-g');
        this.filaO = document.querySelectorAll('.number-o');

        this.carton = [];
        this.balotasSelected = [];
        this.balotas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75];
        this.balotaShow = document.querySelectorAll('.bingo');
        this.nextBalota = document.querySelectorAll('.nextBalota');
        this.nextBalota.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.generarBalota();
            });
        })
        this.balotaShow.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.bingo();
            });
        })
    }

    public llenarAleatoriosB(a: number[]){
        while(a.length < 5){
            var v = Math.floor(Math.random()*(15-1+1)+1);
            if(!a.some(function(e){return e == v})){
                a.push(v);
            }
        }
        this.filaB.forEach((Element: { innerHTML: string; },i: number) => {
            Element.innerHTML='' + this.b[i];
        });
        this.filaB.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.toggleActive(elemento);
            });
        })
    }

    public llenarAleatoriosI(a: number[]){
        while(a.length < 5){
            var v = Math.floor(Math.random()*(30-16+1)+16);
            if(!a.some(function(e){return e == v})){
                a.push(v);
            }
        }
        this.filaI.forEach((Element: { innerHTML: string; },i: number) => {
            Element.innerHTML='' + this.i[i];
        });
        this.filaI.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.toggleActive(elemento);
            });
        })
    }

    public llenarAleatoriosN(a: number[]){
        while(a.length<4){
            var v = Math.floor(Math.random()*(45-31+1)+31);
            if(!a.some(function(e){return e == v})){
                a.push(v);
            }
        }
        this.filaN.forEach((Element: { innerHTML: string; },i: number) => {
            Element.innerHTML='' + this.n[i];
        });
        this.filaN.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.toggleActive(elemento);
            });
        })
    }

    public llenarAleatoriosG(a: number[]){
        while (a.length<5){
            var v = Math.floor(Math.random()*(60-46+1)+46);
            if(!a.some(function(e){return e == v})){
                a.push(v);
            }
        }
        this.filaG.forEach((Element: { innerHTML: string; },i: number) => {
            Element.innerHTML='' + this.g[i];
        });
        this.filaG.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.toggleActive(elemento);
            });
        })
    }

    public llenarAleatoriosO(a: number[]){
        while (a.length < 5){
            var v = Math.floor(Math.random()*(75-61+1)+61);
            if(!a.some(function(e){return e == v})){
                a.push(v);
            }
        }
        this.filaO.forEach((Element: { innerHTML: string; },i: number) => {
            Element.innerHTML='' + this.o[i];
        });
        this.filaO.forEach((elemento: { addEventListener: (arg0: string, arg1: void) => void; })=> {
            elemento.addEventListener('click',()=>{
                this.toggleActive(elemento);
            });
        })
    }

    public generarBalota() :void{
        var v = Math.floor(Math.random()*(this.balotas.length));
        this.showBalota(this.balotas[v]);
        this.balotasSelected.push(this.balotas[v]);
        this.balotas = this.balotas.filter(item => item!== this.balotas[v]);
    }

    public showBalota(a:number) :void{
        this.view.addToBalota(a.toString());
    }

    public toggleActive(a:any){
        a.classList.toggle('active');
        if (this.carton.includes(parseInt(a.textContent))){
            this.carton = this.carton.filter(item => item!== parseInt(a.textContent));
        }else{
            this.carton.push(parseInt(a.textContent));
        }
    }

    public bingo(){
        if (this.comprobarBingo()){
            this.view.addToResultado("BINGO");
        }else{
            this.view.addToResultado("NO BINGO");
        }
    }

    public comprobarBingo():boolean{
        var iguales=0;
        for(var i=0;i<this.balotasSelected.length;i++){
            for(var j=0;j<this.carton.length;j++){
                if(this.balotasSelected[i]==this.carton[j])
                    iguales++;
            }
        }
        if (iguales === 24){
            return true;
        }else {
            return false;
        }
    }

    public generarCarton(){
        this.llenarAleatoriosB(this.b);
        this.llenarAleatoriosI(this.i);
        this.llenarAleatoriosN(this.n);
        this.llenarAleatoriosG(this.g);
        this.llenarAleatoriosO(this.o);
        this.generarBalota();
    }
}
