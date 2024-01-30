//Cambiando la etiqueta h1 con document.querySelector
//declaracion de variables
let titulo = document.querySelector('h1');
titulo.innerHTML='Hora del Desafío';

//Crea una función que muestre en la consola el mensaje "El botón fue clicado" siempre que se presione el botón "Console".

function mensajeEnConsola(){
    console.log('El botón fue clicado');
}

//Crea una función que se ejecute cuando se haga clic en el botón "prompt", preguntando el nombre de una ciudad de Brasil. 
//Luego, muestra una alerta con el mensaje concatenando la respuesta con el texto: "Estuve en {ciudad} y me acordé de ti".

function pedirCiudadyMostrarAlerta(){
    let ciudad=prompt('Ingrese el nombre de una ciudad de Brazil');
    alert(`Estuve en ${ciudad} y me acorde de ti` );
}

//Crea una función que muestre una alerta con el mensaje: "Yo amo JS" siempre que se presione el botón "Alerta".

function mostrarMensajeConAlert(){
    alert("Yo amo JS");
}

//Al hacer clic en el botón "suma", pide 2 números y muestra el resultado de la suma en una alerta.

function sumaDeDosNumeros(){
    let numero1=prompt("Ingresa primer numero");
    let numero2=prompt("Ingresa segundo numero");
    let suma=parseInt(numero1)+parseInt(numero2);
    alert(`Suma de ${numero1} + ${numero2} es igual a ${suma}`);
}