const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const enfermedades = [
    [1,'Pudrición del cogollo','Flechas podridas , Ausencia de hojas nuevas , Hojas jóvenes amarillas , Presencia de "mordiscos" en hojas jovenes , Pudrición en los tejidos del cogollo','La enfermedad se inicia como resultado de la infección de los tejidos inmaduros de las flechas y las lesiones producidas por el patógeno que se hace visible tres o cuatro días más tarde como pequeñas lesiones ne cróticas sobre los costados de la flecha más joven en la medida en que esta crece.','Se han elaborado diferentes alternativas para el control de la enfermedad, incluyendo la mejora en los drenajes y el mejor balance de nutrientes en la palma. Todos ellos contribuyen a reducir el impacto de la PC, pero las medidas de control que realmente están demostrando una buena recuperación de las palmas infectadas son el diagnóstico temprano, la remoción del tejido enfermo y la protección del tejido expuesto con insecticidas, fungicidas y bactericidas. Este procedimiento se com plementa con un programa de aspersión para proteger las plantas vecinas, la eliminación de los estados avanzados de la enfermedad y la renovación temprana de lotes afectados.'],
    [2,'Marchitez sorpresiva','Pérdida de brillo en los frutos , Racimos podridos , Decoloración café de los foliolos , Deshidratación de los foliolos , Presencia de insectos nematodo','La Marchitez sorpresiva de la palma de aceite ha sido asociada a la presencia de un protozoario flagelado del género Phytomonas (Trypanosomatidae), identifi cado como P. staheli por McGhee y McGuee en 1980 (McCoy, 1981; McCoy y Martínez, 1982). El papel de estos microorganismos como patógenos de plantas no es nuevo, ellos fueron reconocidos en plantas de café desde 1931, y fueron transmitidos por injerto, pero no se identificó ningún vector y por muchos años no se les prestó mayor atención como patógenos de plantas.','La enfermedad se ha controlado cuando se realizan campañas de identificación temprana de las palmas enfermas y se procede a su rápida erradicación, complementada con el manejo adecuado de las gra míneas presentes en los lotes afectados y la aplicación de insecticidas en el área, para reducir la población de los insectos que pueden estar involucrados en su diseminación, en una forma similar a la recomendado para el control de la Marchitez letal.'],
    [3,'Anillo rojo','Presencia de anillo color café al realizar un corte transversal , Hojas pequeñas , Foliolos cortos con decoloración verde , Decoloración del color interno','El Anillo rojo es una enfermedad causada por el nematodo Bursaphelenchus cocophilus, (Cobb). La primera descripción se hizo en Trinidad en 1905 y desde esa época ha sido registrada en muchas es pecies de palmas, siendo más conocida en palma de aceite y cocotero.','El mejor método para el manejo de esta enfermedad ha sido la detección temprana y la eliminación de todas las palmas afectadas así como la implemen tación de programas para el control del vector. Es necesario reducir las fuentes de inóculo de los nematodos y los sitios de reproducción del insecto así como la implementación de trampas para su captura.'],
    [4,'Marchitez letal','Pérdida de brillo en los frutos , Racimos podridos , Raices podridas , Deshidratación de los foliolos','No se tienen evidencias claras sobre quién es el responsable de la Marchitez letal de la palma de aceite. Hay registros que indican que es causada por un fitoplasma, pero esto no se ha podido probar definitivamente.','Como se ha mencionado antes, la enfermedad se está controlando con una detección temprana de los síntomas y la erradicación de las palmas enfermas. En parcelas experimentales se ha demostrado la ventaja del control de gramíneas y de potenciales vectores como Myndus crudus, similar a lo observado por Martínez (1977), Mena et al., (1977).'],
    [5,'Amarillamiento letal','Hojas jóvenes amarillas , Raices podridas , Flechas podridas , Racimos podridos','Esta enfermedad parece ser una variante de la pudrición letal de la flecha y del cogollo. En Colombia, en la zona de Tumaco se describe como amarillamiento sorpresivo de las hojas jóvenes y en el Ecuador, como pudrición de la flecha y del cogollo.','Las medidas de control consistentes en cirugía de los tejidos afectados y aplicación de mezclas fungíinsecticidas, no han dado resultados promisorios. Cuando se presentan los síntomas iniciales, además de la remoción de los tejidos afectados, algunos recomiendan la aplicación de fungicidas como Vitavax Thiram al 0.4°/o o Trímangol al 0.7%. Se recomienda además adicionar el insecticida Thiodan al 0.4%. Las palmas muertas deben ser erradicadas a la mayor brevedad posible. '],
    [6,'Anillo marrón','Hojas jóvenes amarillas , Racimos podridos , Presencia de anillo color café al realizar un corte transversal','El anillo marrón de la palma aceitera, al igual que el anillo rojo del cocotero, es causado por el nemátodo Radinaphelenchus cocophillus (Cob. y Goodey), cuyo agente vector principal es el cucaRevista Palmas Volumen 11 No. 4, 1990 rrón picudo o gualpa Rhynchophorus palmarum L. Aunque puede presentarse en palmas mayores de 5 años, es más frecuente en palmas de 10 años y más de edad.','El tratamiento curativo del anillo marrón, median28 te la aplicación de nematicidas en inyección al tronco, al suelo en la zona del plateo o por absorción a través de las raíces, ha dado hasta el presente, resultados erráticos. ']
]
const enfermedad = document.getElementById('accordionExample');
let sintomas = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let restuladoEnfermedad = "";
let generar = document.getElementById("generar");
generar.addEventListener("click", () => generarDiagrama());
generar.addEventListener("click", () => restuladoEnfermedad = "");
document.onload = generarVacio();
function generarVacio() {
    ctx.fillStyle = "black";
    ctx.font = "16px Verdana";
    ctx.textAling = "start";
    ctx.fillText("A", 15, 40);
    ctx.fillText("B", 15, 90);
    ctx.fillText("C", 15, 140);
    ctx.fillText("D", 15, 190);
    ctx.fillText("F", 15, 290);
    ctx.fillText("G", 15, 340);

    /// ############### Amarillamiento Letal (H)
    // (C,D) , And
    crearAnd(65, 157);
    // C , And
    crearLinea(35, 138, 65, 145, 0, "black");
    // D , And
    crearLinea(35, 183, 65, 170, 0, "black");
    // (A,B) , And
    crearAnd(110, 57);
    // A , And
    crearLinea(35, 38, 110, 45, 0, "black");
    // B , And
    crearLinea(35, 83, 110, 60, 0, "black");
    // And , And
    crearLinea(85, 153, 110, 70, 0, "black");
    ctx.fillText("H", 160, 63);
    // And , H
    crearLinea(130, 58, 159, 58, 0, "black");
    /// #######################################

    // ########### Marchitez letal (K) #############
    // (F,G,D) , And
    crearAnd(65, 285);
    // F , And
    crearLinea(35, 285, 65, 285, 0, "black");
    // G , And
    crearLinea(35, 335, 65, 295, 0, "black");
    // D , And
    crearLinea(35, 186, 65, 275, 0, "black");
    // 2do And
    crearAnd(110, 285);
    // 1er And , 2do And
    crearLinea(85, 285, 110, 285, 0, "black");
    // B , 2do And
    crearLinea(35, 86, 110, 275, 20, "black");
    ctx.fillText("K", 150, 290);
    // 2do And , K
    crearLinea(130, 285, 150, 285, 20, "black");
    // ########################################

    // ################### Marchitez Sorpresiva
    ctx.fillText("L", 15, 390);
    ctx.fillText("M", 15, 440);
    // 2do And
    crearAnd(110, 388);
    // 1er And , 2do And
    crearLinea(85, 290, 110, 375, 0, "black");
    // L , And
    crearLinea(35, 388, 110, 388, 0, "black");
    // M , And
    crearLinea(35, 435, 110, 398, 0, "black");
    ctx.fillText("N", 150, 393);
    // 2do And , N
    crearLinea(130, 388, 150, 388, 0, "black");
    // ##########################################

    // ################ Anillo Marrón (I) #######
    // 2do And
    crearAnd(150, 157);
    ctx.fillText("E", 110, 205);
    // E , 2do And
    crearLinea(125, 196, 150, 167, 0, "black");
    // 1er And , 2do And
    crearLinea(85, 157, 150, 157, 0, "black");
    ctx.fillText("I", 190, 162);
    // 2do And , I
    crearLinea(170, 157, 190, 157, 0, "black");
    // ###########################################

    // ######################## Anillo Rojo (T) ##
    // (J,E) , And
    crearAnd(150, 222);
    ctx.fillText("J", 110, 255);
    ctx.fillText("O", 190, 205);
    ctx.fillText("P", 190, 255);
    // E , And
    crearLinea(125, 200, 150, 214, 0, "black");
    // J , And
    crearLinea(125, 250, 150, 226, 0, "black");
    // 2do And
    crearAnd(230, 222);
    // 1er And , 2do And
    crearLinea(170, 222, 230, 222, 0, "black");
    // O , 2do And
    crearLinea(205, 200, 230, 214, 0, "black");
    // P , 2do And
    crearLinea(205, 250, 230, 235, 0, "black");
    ctx.fillText("T", 270, 227);
    // 2do And T
    crearLinea(250, 222, 270, 222, 0, "black");
    // ###########################################

    // #################### Pudrición del cogollo
    ctx.fillText("Q", 270, 40);
    ctx.fillText("R", 270, 90);
    ctx.fillText("S", 270, 140);
    // And
    crearAnd(310, 85);
    // A , And
    crearLinea(35, 34, 310, 74, 13, "black");
    // C , And
    crearLinea(35, 131, 310, 94, 0, "black");
    // R , And
    crearLinea(285, 85, 310, 85, 0, "black");
    // S , And
    crearLinea(285, 135, 310, 100, 0, "black");
    // Q , And
    crearLinea(285, 35, 310, 69, 0, "black");
    ctx.fillText("U", 350, 90);
    // And , U
    crearLinea(330, 85, 350, 85, 0, "black");
    // ######################################
}

function generarDiagrama() {
    generarVacio();
    generar.style.visibility = "hidden";
    contador = 1000;
    let andCD = 0;
    let contAmarillamiento = 0;
    let contAnilloRojo = 0;
    let contMarchitez = 0;
    let contMarchitezSorpresiva = 0;
    let contRaiz = 0;
    let contCogollo = 0;
    if ((sintomas[1] === 1) && (sintomas[0] === 0)) {
        // A , And
        setTimeout(() => {
            crearLinea(35, 38, 110, 45, 0, "yellow");
        }, contador);
        contador += 1000;
        contAmarillamiento += 1;
        // A , And Cogollo
        setTimeout(() => {
            crearLinea(35, 34, 310, 74, 13, "pink");
        }, contador);
        contador += 1000;
        contCogollo += 1;
    }
    if ((sintomas[19] === 1) && (sintomas[18] === 0)) {
        // B , And
        setTimeout(() => {
            crearLinea(35, 83, 110, 60, 0, "yellow");
        }, contador);
        contador += 1000;
        contAmarillamiento += 1;
        // B , 2do And
        setTimeout(() => {
            crearLinea(35, 86, 110, 275, 20, "blue");
        }, contador);
        contador += 1000;
        contRaiz += 1;
    }
    if ((sintomas[5] === 1) && (sintomas[2] === 0)) {
        // C , And
        setTimeout(() => {
            crearLinea(35, 138, 65, 145, 0, "brown");
        }, contador);
        contador += 1000;
        andCD += 1;
        // C , And Pudrición cogollo
        setTimeout(() => {
            crearLinea(35, 131, 310, 94, 0, "pink");
        }, contador);
        contador += 1000;
        contCogollo += 1;
    }
    if ((sintomas[13] === 1) && (sintomas[12] === 0)) {
        // D , And
        setTimeout(() => {
            crearLinea(35, 183, 65, 170, 0, "brown");
        }, contador);
        contador += 1000;
        andCD += 1;
        if (andCD === 2) {
            // And , And Amarillamiento
            setTimeout(() => {
                crearLinea(85, 153, 110, 70, 0, "yellow");
            }, contador);
            contador += 1000;
            if (contAmarillamiento === 2) {
                // And , H
                setTimeout(() => {
                    crearLinea(130, 58, 159, 58, 0, "yellow");
                }, contador);
                contador += 1000;
                // Amarillamiento
                setTimeout(() => {
                    ctx.fillStyle = "yellow";
                    ctx.fillText("H", 160, 63);
                }, contador);
                contador += 1000;
                mostrarEnfermedad(5);
            }
            // 1er And , 2do And Anillo Marrón
            setTimeout(() => {
                crearLinea(85, 157, 150, 157, 0, "brown");
            }, contador);
            contador += 1000;
        }
        // D , And
        setTimeout(() => {
            crearLinea(35, 186, 65, 275, 0, "blue");
        }, contador);
        contador += 1000;
        contMarchitez += 1;
    }
    if ((sintomas[22] === 1) && (sintomas[21] === 0)) {
        // E , 2do And Anillo Marrón
        setTimeout(() => {
            crearLinea(125, 196, 150, 167, 0, "brown");
        }, contador);
        contador += 1000;
        if (andCD === 2) {
            // 2do And , I Anillo Marrón
            setTimeout(() => {
                crearLinea(170, 157, 190, 157, 0, "brown");
            }, contador);
            contador += 1000;
            setTimeout(() => {
                ctx.fillStyle = "brown";
                ctx.fillText("I", 190, 162);
            }, contador);
            contador += 1000;
            mostrarEnfermedad(6);
        }
        // E , And Anillo Rojo
        setTimeout(() => {
            crearLinea(125, 200, 150, 214, 0, "red");
        }, contador);
        contador += 1000;
        contAnilloRojo += 1;
    }
    if ((sintomas[4] === 1) && (sintomas[2] === 0)) {
        // J , And
        setTimeout(() => {
            crearLinea(125, 250, 150, 226, 0, "red");
        }, contador);
        contador += 1000;
        if (contAnilloRojo === 1) {
            // 1er And , 2do And
            setTimeout(() => {
                crearLinea(170, 222, 230, 222, 0, "red");
            }, contador);
            contador += 1000;
            contAnilloRojo += 1;
        }
    }
    if ((sintomas[16] === 1) && (sintomas[14] === 0)) {
        // O , 2do And
        setTimeout(() => {
            crearLinea(205, 200, 230, 214, 0, "red");
        }, contador);
        contador += 1000;
        contAnilloRojo += 1;
    }
    if ((sintomas[24] === 1) && (sintomas[23] === 0)) {
        // P , 2do And
        setTimeout(() => {
            crearLinea(205, 250, 230, 235, 0, "red");
        }, contador);
        contador += 1000;
        if (contAnilloRojo === 3) {
            // 2do And T Anillo Rojo
            setTimeout(() => {
                crearLinea(250, 222, 270, 222, 0, "red");
            }, contador);
            contador += 1000;
            setTimeout(() => {
                ctx.fillStyle = "red";
                ctx.fillText("T", 270, 227);
            }, contador);
            contador += 1000;
            mostrarEnfermedad(3);
        }
    }
    if ((sintomas[11] === 1) && (sintomas[10] === 0)) {
        // F , And
        setTimeout(() => {
            crearLinea(35, 285, 65, 285, 0, "blue");
        }, contador);
        contador += 1000;
        contMarchitez += 1;
    }
    if ((sintomas[17] === 1) && (sintomas[14] === 0)) {
        // G , And
        setTimeout(() => {
            crearLinea(35, 335, 65, 295, 0, "blue");
        }, contador);
        contador += 1000;
        if (contMarchitez === 2) {
            // 1er And , 2do And
            setTimeout(() => {
                crearLinea(85, 285, 110, 285, 0, "blue");
            }, contador);
            contador += 1000;
            if (contRaiz === 1) {
                // 2do And , K
                setTimeout(() => {
                    crearLinea(130, 285, 150, 285, 20, "blue");
                }, contador);
                contador += 1000;
                // Marchitez Letal
                setTimeout(() => {
                    ctx.fillStyle = "blue";
                    ctx.fillText("K", 150, 290);
                }, contador);
                contador += 1000;
                mostrarEnfermedad(4);
            }
            // 1er And , 2do And Marchitez Sorpresiva
            setTimeout(() => {
                crearLinea(85, 290, 110, 375, 0, "green");
            }, contador);
            contador += 1000;
            contMarchitezSorpresiva += 1;
        }
    }
    if ((sintomas[15] === 1) && (sintomas[14] === 0)) {
        // L , And
        setTimeout(() => {
            crearLinea(35, 388, 110, 388, 0, "green");
        }, contador);
        contador += 1000;
        contMarchitezSorpresiva += 1;
    }
    if ((sintomas[20] === 1) && (sintomas[18] === 0)) {
        // M , And
        setTimeout(() => {
            crearLinea(35, 435, 110, 398, 0, "green");
        }, contador);
        contador += 1000;
        if (contMarchitezSorpresiva === 2) {
            // And , N Marchitez Sorpresiva
            setTimeout(() => {
                crearLinea(130, 388, 150, 388, 0, "green");
            }, contador);
            contador += 1000;
            setTimeout(() => {
                ctx.fillStyle = "green";
                ctx.fillText("N", 150, 393);
            }, contador);
            contador += 1000;
            mostrarEnfermedad(2);
        }
    }
    if ((sintomas[7] === 1) && (sintomas[2] === 0)) {
        // Q , And
        setTimeout(() => {
            crearLinea(285, 35, 310, 69, 0, "pink");
        }, contador);
        contador += 1000;
        contCogollo += 1;
    }
    if ((sintomas[9] === 1) && (sintomas[8] === 0)) {
        // R , And
        setTimeout(() => {
            crearLinea(285, 85, 310, 85, 0, "pink");
        }, contador);
        contador += 1000;
        contCogollo += 1;
    }
    if ((sintomas[6] === 1) && (sintomas[8] === 0)) {
        // S , And
        setTimeout(() => {
            crearLinea(285, 135, 310, 100, 0, "pink");
        }, contador);
        contador += 1000;
        if (contCogollo === 4) {
            // And , U
            setTimeout(() => {
                crearLinea(330, 85, 350, 85, 0, "pink");
            }, contador);
            contador += 1000;
            setTimeout(() => {
                ctx.fillStyle = "pink";
                ctx.fillText("U", 350, 90);
            }, contador);
            contador += 1000;
            mostrarEnfermedad(1);
        }
    }
    setTimeout(() => {
        generar.style.visibility = "visible";
    }, contador);
}

function addSintoma(id) {
    try {
        let index = parseInt(id);
        if (index <= 24) {
            if (sintomas[index] === 0) {
                sintomas[index] = 1;
            } else {
                sintomas[index] = 0;
            }
        }
    } catch {
    }
}

function mostrarEnfermedad(enf){
    enf = enf-1;
    restuladoEnfermedad += 
    "<div class='accordion-item'>"+
        "<h2 class='accordion-header' id='heading"+enf+"'>"+
        "<button class='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapse"+enf+"' aria-expanded='true' aria-controls='collapse"+enf+"'>"+
        enfermedades[enf][1]+
        "</button>"+
        "</h2>"+
        "<div id='collapse"+enf+"' class='accordion-collapse collapse show' aria-labelledby='heading"+enf+"' data-bs-parent='#accordionExample'>"+
            "<div class='accordion-body'>"+
            "<strong>Descripcion: </strong>"+enfermedades[enf][3]+"<br>"+
            "<strong>Sintomas: </strong>"+enfermedades[enf][2]+"<br>"+
            "<strong>Tratamiento: </strong>"+enfermedades[enf][4]+
            "</div>"+
        "</div>"+
    "</div>";
    enfermedad.innerHTML = restuladoEnfermedad;
}

function crearAnd(x, y) {
    ctx.beginPath();
    ctx.strokeStyle = "black";
    ctx.lineWidth = 1;
    ctx.arc(x, y, 20, Math.PI / 2, 3 * Math.PI / 2, true);
    ctx.moveTo(x, (y - 20));
    ctx.lineTo(x, (y + 20));
    ctx.stroke();
}

function crearLinea(xi, yi, x, y, mas, color) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    mitadX = (x - xi) / 2;
    ctx.beginPath();
    ctx.moveTo(xi, yi);
    if ((mitadX != 0) && (yi != y)) {
        ctx.lineTo((mitadX + xi + mas), yi);
        ctx.lineTo((mitadX + xi + mas), y);
    }
    ctx.lineTo(x, y);
    ctx.stroke();
}