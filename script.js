/*  ONE Challenge 1:
	Script para encriptar y desencriptar mensajes 
	Por: Heriberto Ventura, 05.sep.2022

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Tenemos un periodo de tiempo de cuatro semanas para desarrollar el proyecto y vamos a trabajar con el sistema ágil de desarrollo, utilizando el Trello de la siguiente forma:
*/

var activo = false;


function encriptarlo(texto,long) {
	// Compara cadena letra por letra, si es una vocal la sustituye por valor cifrado.
	var cadena = texto.toLowerCase();
	var coincidencia = false;
	var resultado = "";
	console.log("recibio " + cadena + long);
	
	for (var pos = 0; pos < long; pos++) {
		switch(cadena[pos]) {
            case "a":
                resultado += "ai";
                break;

			case "e":
                resultado += "enter";
                break;

			case "i":
                resultado += "imes";
                break;

			case "o":
                resultado += "ober";
                break;

			case "u":
                resultado += "ufat";
                break;

			default:
                resultado += cadena[pos];
                break;
	    }
    	console.log("asi va " + cadena[pos] + " " + resultado);		 
	}
	return document.getElementById("resultado").innerHTML = resultado;
	console.log(resultado + " resultante");
}

function mostrarBoton() {
	// Quita imagen y textos, y hace visible boton.
	var munieco = document.querySelector("#munieco");
	var titulo = document.querySelector("#titulo");
	var texto = document.querySelector("#texto");
	var boton = document.querySelector("#boton3");

	munieco.style.display = "none";
	titulo.style.display = "none";
	texto.style.display = "none";
	boton.style.display = "block";
}

function encriptar() {
	// Lee cadena e inicia el cifrado.
	var cadena = document.querySelector("input").value;
	console.log("llego " + cadena);
	var longCadena = cadena.length;
	
	if (longCadena > 0) {
		mostrarBoton();
		encriptarlo (cadena,longCadena);
		activo = true;
	} else {
		console.log("no hay texto");
	}
}

function desencriptando(cadena,long) {
	// body...
}

function desencriptar() {
	// body...
}

function copiar(){
	// body...
}