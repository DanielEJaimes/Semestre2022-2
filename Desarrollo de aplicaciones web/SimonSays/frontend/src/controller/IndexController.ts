import { IndexModel } from "src/model/IndexModel";
import { IndexView } from "src/view/IndexView";

export class IndexController {
    public model:IndexModel;
    public view:IndexView;
    nivel:any;
    blockedButtons:boolean;
    speed:number;
    round:number;
    userPosition:number;
    sequence: number[];
    display:any;
    buttons:any;
    startButton:any;
    score:any;
    scoreboard: any[];
    nickname:any;
    errorSound:any;
    buttonSounds:any;


    constructor(model: IndexModel, view:IndexView) {
        this.model = model;
        this.view = view;
        this.blockedButtons = true;
        this.round = 0;
        this.userPosition = 0;
        this.sequence= [];
        this.blockedButtons = false;
        this.buttons = Array.from(document.getElementsByClassName('sbtn'));
        this.startButton = document.getElementById('btnStart')!;
        this.score = document.getElementById('score')!;
        this.speed = 1000;
        if (localStorage.getItem("tabla") === null){
            this.scoreboard = [];
        }else{
            this.scoreboard = JSON.parse(localStorage.getItem("tabla")!);
        }
        
        this.nickname = document.getElementById('nickname')!;
        this.errorSound = new Audio('../public/sounds/sounds_error.wav');
        this.buttonSounds = [
        new Audio('../public/sounds/sounds_1.mp3'),
        new Audio('../public/sounds/sounds_2.mp3'),
        new Audio('../public/sounds/sounds_3.mp3'),
        new Audio('../public/sounds/sounds_4.mp3'),
        ]
        this.nivel = document.getElementById('levelSelect');
    }

    
    start() {
        if (this.scoreboard != null){
            for (let i = 0; i<this.scoreboard.length; i++){
            this.view.addToResultado("<tr><td>"+this.scoreboard[i].nombre+"</td>","<td>"+this.scoreboard[i].puntos+"</td></tr>")
            }
        }
        this.startButton.onclick = () => this.comenzar();
    }

    // Comienza el juego
    comenzar() {
        this.startButton.disabled = true; 
        this.nickname.disabled = true;
        this.dificultad();
        console.log(this.speed);
        this.actualizarRonda(0);
        this.buttons.forEach((element:HTMLElement, i:number) => {
            element.onclick = () => this.buttonClick(i);
        });
    }

    dificultad(){
        if (this.nivel.value == 2){
            this.speed = 2000;
        }else if (this.nivel.value == 1){
            this.speed = 1000;
            }else {
                this.speed = 500;
            }
    }

    // Actualiza la ronda y el tablero
    actualizarRonda(value:number) {
        this.round = value;
        this.score.textContent = `Score: ${this.round}`;
        this.userPosition = 0;
        this.sequence = this.secuencia();
        this.showSequence();
    }

    // Crea el array aleatorio de botones
    secuencia() {
        return Array.from({length: this.round+1}, () =>  this.getRandomColor());
    }

    // Devuelve un número al azar entre 0 y 3
    getRandomColor() {
        return Math.floor(Math.random() * 4);
    }

    // Ejecuta una función cuando se hace click en un botón
    buttonClick(value:number) {
        !this.blockedButtons && this.validateChosenColor(value);
    }

    // Valida si el boton que toca el usuario corresponde a al valor de la secuencia
    validateChosenColor(value:number) {
        if(this.sequence[this.userPosition] === value) {
            this.buttonSounds[value].play();
            if(this.round === this.userPosition) {
                this.actualizarRonda(this.round + 1);
            } else {
                this.userPosition++;
            }
        } else {
            this.gameLost();
        }
    }

    // Muestra la secuencia de botones que va a tener que tocar el usuario
    showSequence() {
        console.log(this.sequence);
        this.blockedButtons = true;
        let sequenceIndex = 0;
        let timer = setInterval(() => {
            const button = this.buttons[this.sequence[sequenceIndex]];
            this.buttonSounds[this.sequence[sequenceIndex]].play();
            this.toggleButtonStyle(button);
            setTimeout( () => this.toggleButtonStyle(button), this.speed)
            sequenceIndex++;
            if (sequenceIndex > this.round) {
                this.blockedButtons = false;
                clearInterval(timer);
            }
        }, this.speed);
    }

    // Pinta los botones para cuando se está mostrando la secuencia
    toggleButtonStyle(button:HTMLElement) {
        button.classList.toggle('active');}

    // Actualiza el simon cuando el jugador pierde
    gameLost() {
        this.errorSound.play();
        this.startButton.disabled = false; 
        this.blockedButtons = true;
        this.addScore();
        this.nickname.value = '';
        location.reload();
    }

    addScore(){
        if (this.nickname.value === "" || this.nickname.value === " " || this.nickname.value === "  " || this.nickname.value === "   "){
            this.nickname.value = "N/A";
        }
        this.addLocalStorage(this.nickname.value,this.round);
        let scoreboardJson = JSON.stringify(this.scoreboard);
        localStorage.setItem("tabla",scoreboardJson);
        this.nickname.disabled = false;
    }

    addLocalStorage(nick:String , puntaje:number){
        var jugador = {"nombre":nick,
        "puntos":puntaje};
        console.log(jugador);
        if (this.scoreboard.length === 10){
            if(this.scoreboard[9].puntos < jugador.puntos){
                this.scoreboard.pop();
                this.scoreboard.push(jugador);
            }
        }else if(this.scoreboard.length < 10){
            this.scoreboard.push(jugador);
        }
        this.scoreboard.sort((o1,o2) => {
            if  (o1.puntos > o2.puntos){
                return -1;
            }else if(o1.puntos < o2.puntos){
                return 1;
            }else{
                return 0;
            }
        });
    }
}
