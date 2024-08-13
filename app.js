let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
    
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    //console.log(intentos);
    if (numeroUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${(intentos === 1 ? 'vez' : 'veces')}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p','El número secreto es menor');
        } else {
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    /*let valorCaja = document.querySelector('#valorUsuario')
    valorCaja.value = '';
    */
}

function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1;
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    /*console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    */
    //Si ya sorteamos todos los números
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p','Ya se sortearon todos los números posibles');
    }  else {
    // Si el numero generado está incluido en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
        listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}
function CondicionesIniciales() {
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}` );
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de números
    // generar el número aleatorio 
    // inicializar el número de intentos
    CondicionesIniciales();
    // Deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

CondicionesIniciales();
