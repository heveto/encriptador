/*  Copiado de: https://www.lawebdelprogramador.com/codigo/JavaScript/3270-Cifrado-Cesar.html
	Código modificador para mejor comprención.
	La función compara el mensaje letra por letra con el abecedario 
	y cuando coincide, coloca el caracter segun segun el desplazamiento
	 X en variable resultado.

*/
		function cifrar() {
			var cambiarCadena = function (texto, salto, estado) {
				function cambiaLetra() {
					// abecedario de referencia.
					var abecedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
					var letra = abecedario.length;

					return function(apuntador) { // primero canbia letras de la cadena a minúsculas.
						var letraAbc = abecedario.indexOf(apuntador.toLowerCase());
						if (letraAbc != -1) {
							var pos = letraAbc;
							if (estado) {
								// avanza
								pos += salto;
								pos -= (pos >= letra)?letra:0;
							} else {
								// regresa
								pos -= salto;
								pos += (pos < 0)?letra:0;
							}
							return abecedario[pos];
						}
						return apuntador;
					};
				};

				var reemplaza = cambiaLetra();

				var re = (/([a-z])/ig);
				return String(texto).replace(re, function (compara) {
					return reemplaza(compara);
				});
			};
 
			return {
				encode: function(texto, salto) {
					return cambiarCadena (texto, salto, true);
				},
				decode: function(texto, salto) {
					return cambiarCadena (texto, salto, false);
				}
			};
		};

		var codCesar = cifrar();

		var x = 3; // numero de desplazamiento de letras en cadena
 
		function codificar() {
			document.getElementById("resultado").innerHTML=codCesar.encode(document.getElementById("cadena").value, x);
		}

		function decodificar() {
			document.getElementById("resultado").innerHTML=codCesar.decode(document.getElementById("cadena").value, x);
		}