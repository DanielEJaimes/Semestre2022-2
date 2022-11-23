let resultado = document.getElementById('resultado');
let botones = Array.from(document.getElementsByClassName('boton'));

botones.map(boton => {
    boton.addEventListener('click', (e) => {
        switch(e.target.innerText){

            case 'C':
                resultado.innerText = '';
                break;

            case 'back':
                resultado.innerText = resultado.innerText.slice(0,-1);
                break;

            case '=':
                try{
                    resultado.innerText = eval(resultado.innerText);
                }catch{
                    resultado.innerText = 'Error';
                }
                break;

            case 'x^2':
                resultado.innerText = eval(resultado.innerText**2);
                break;

            case 'sqrt':
                resultado.innerText = eval(Math.sqrt(resultado.innerText));
                break;
            case '1/x':

                resultado.innerText = eval(1/resultado.innerText);
                break;

            case '+/-':
                resultado.innerText = eval(resultado.innerText * -1);
                break;

            default:
                resultado.innerText += e.target.innerText;
        }
    });
});
