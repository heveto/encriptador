/*  ONE Challenge 1:
	Script para encriptar y desencriptar mensajes 
	Por: Heriberto Ventura, 05.sep.2022

Requisitos:
- Debe funcionar solo con letras minúsculas
- No deben ser utilizados letras con acentos ni caracteres especiales
- Debe ser posible convertir una palabra para la versión encriptada 
- también devolver una palabra encriptada a su versión original.
*/

function encriptarlo(texto,long) {
	// Cambia aminúsculas y compara cadena letra por letra, si es una vocal la sustituye por valor cifrado.
	var cadena = texto.toLowerCase();
	var resultado = "";
	
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
	}
	return document.getElementById("resultado").innerHTML = resultado;
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

var texto2 = document.querySelector("#texto2");

function encriptar() {
	// Lee cadena e inicia el cifrado.
	var cadena = document.querySelector("input").value;
	var longCadena = cadena.length;
	
	if (longCadena > 0) {
		mostrarBoton();
		encriptarlo (cadena,longCadena);
	} else {
	}
}

function desencriptarlo(texto,long) {
	// Desencripta el mensaje.
	var cadena = texto.toLowerCase();
	var resultado = "";
	document.getElementById("resultado").innerHTML = "";

	for (var pos = 0; pos < long; pos++) {
		switch(cadena[pos]) {
            case "a":
                resultado += "a";
                pos += 1;
                break;

			case "e":
                resultado += "e";
                pos += 4;
                break;

			case "i":
                resultado += "i";
                pos += 3;
                break;

			case "o":
                resultado += "o";
                pos += 3;
                break;

			case "u":
                resultado += "u";
                pos += 3;
                break;

			default:
                resultado += cadena[pos];
                break;
	    }		 
	}
	return document.getElementById("resultado").innerHTML = resultado;
}

function desencriptar() {
	// Envia cadena a desencriptar.
	var cadena = document.querySelector("input").value;
	var longCadena = cadena.length;

	if (longCadena > 0) {
		mostrarBoton();
		desencriptarlo (cadena,longCadena);
	} else {
	}
}

function copiar(){
	// Copia mensaje encriptado a caja para desencriptar.
	var portaPapel = navigator.clipboard.writeText(resultado.innerHTML);
	document.querySelector("input").value = document.getElementById("resultado").innerHTML;
	document.getElementById("resultado").innerHTML = " Ahora puedes pegarlo como mensaje donde gustes o presionar Desencriptar!";
	return portaPapel;
}