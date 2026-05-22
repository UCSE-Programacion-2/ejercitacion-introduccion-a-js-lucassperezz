// En estas primeras preguntas sustituye `null` por la respuesta (constantes iniciales + hoisting):

// Crea una variable "string", puede contener lo que quieras:
const nuevaString = 'hola';

// Crea una variable numérica, puede ser cualquier número:
const nuevoNum = 42;

// Crea una variable booleana:
const nuevoBool = true;

// Resuelve el siguiente problema matemático:
const nuevaResta = 10 - 5 === 5;

// Resuelve el siguiente problema matemático:
const nuevaMultiplicacion = 10 * 4 === 40;

// Resuelve el siguiente problema matemático:
const nuevoModulo = 21 % 5 === 1;

// Pensá este orden como si siguiera ejecutándose línea por línea (hoisting de `var`):
// console.log(typeof y);
// var y = 10;
// ¿Qué string devuelve `typeof y` antes de llegar al `=` ? Reemplazá null por ese string entre comillas.
const resultadoHoisting = 'undefined';

// En los próximos problemas, deberás completar la función.
// Todo tu código irá dentro de las llaves de la función.
// Asegúrate que usas "return" cuando la consola te lo pida.
// Pista: "console.log()" NO fucionará.
// No cambies los nombres de las funciones.

function devolverString(str) {
  // "Return" la string provista: str
  return str;
}

function suma(x, y) {
  // "x" e "y" son números
  // Suma "x" e "y" juntos y devuelve el valor
  return x + y;
}

function resta(x, y) {
  // Devuelve "x" menos "y"
  return x - y;
}

function multiplica(x, y) {
  // Multiplica "x" por "y" y devuelve el valor
  return x * y;
}

function divide(x, y) {
  // Divide "x" entre "y" y devuelve el valor
  return x / y;
}

function sonIguales(x, y) {
  // Devuelve "true" si "x" e "y" son iguales
  // De lo contrario, devuelve "false"
  return x === y;
}

function sonEstrictamenteIguales(x, y) {
  // Igualdad estricta: usá sólo === (no uses ==).
  return x === y;
}

function tienenMismaLongitud(str1, str2) {
  // Devuelve "true" si las dos strings tienen la misma longitud
  // De lo contrario, devuelve "false"
  return str1.length === str2.length;
}

function menosQueNoventa(num) {
  // Devuelve "true" si el argumento de la función "num" es menor que noventa
  return num < 90;
}

function mayorQueCincuenta(num) {
  // Devuelve "true" si el argumento de la función "num" es mayor que cincuenta
  return num > 50;
}

function obtenerResto(x, y) {
  // Obten el resto de la división de "x" entre "y"
  return x % y;
}

function esPar(num) {
  // Devuelve "true" si "num" es par
  return num % 2 === 0;
}

function esImpar(num) {
  // Devuelve "true" si "num" es impar
  return num % 2 !== 0;
}

function elevarAlCuadrado(num) {
  // Devuelve el valor de "num" elevado al cuadrado
  return Math.pow(num, 2);
}

function elevarAlCubo(num) {
  // Devuelve el valor de "num" elevado al cubo
  return Math.pow(num, 3);
}

function elevar(num, exponent) {
  // Devuelve el valor de "num" elevado al exponente dado en "exponent"
  return Math.pow(num, exponent);
}

function redondearNumero(num) {
  // Redondea "num" y devuélvelo
  return Math.round(num);
}

function redondearHaciaArriba(num) {
  // Redondea "num" hacia arriba y devuélvelo
  return Math.ceil(num);
}

function agregarSimboloExclamacion(str) {
  // Agrega un símbolo de exclamación al final de la string "str"
  return str + '!';
}

function combinarNombres(nombre, apellido) {
  // Devuelve "nombre" y "apellido" combinados separados por un espacio
  return nombre + ' ' + apellido;
}

function obtenerSaludo(nombre) {
  // "Martin" -> "Hola Martin!"
  return 'Hola ' + nombre + '!';
}

function obtenerAreaRectangulo(alto, ancho) {
  // Retornar el area de un rectangulo teniendo su altura y ancho
  return alto * ancho;
}

function obtenerMayor(x, y) {
  // Devuelve el número más grande
  if (x >= y) {
    return x;
  }
  return y;
}

function saludo(idioma) {
  if (idioma === 'aleman') return 'Guten Tag!';
  if (idioma === 'mandarin') return 'Ni Hao!';
  if (idioma === 'ingles') return 'Hello!';
  return 'Hola!';
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  return numero === 10 || numero === 5;
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  return numero > 20 && numero < 50;
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero
  return Math.floor(numero) === numero;
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) return 'fizzbuzz';
  if (numero % 3 === 0) return 'fizz';
  if (numero % 5 === 0) return 'buzz';
  return numero;
}

function esPrimo(numero) {
  if (numero <= 1) return false;
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) return false;
  }
  return true;
}

// --- Temario ampliado ---

function valoresDelIndiceConLetEnBucle() {
  const funciones = [];
  for (let i = 0; i < 3; i++) {
    funciones.push(function () {
      return i;
    });
  }
  return funciones.map(function (f) {
    return f();
  });
}

function construirListaConConstMutando() {
  const lista = [];
  for (let i = 1; i <= 3; i++) {
    lista.push(i);
  }
  return lista;
}

function esRealmenteNulo(valor) {
  return valor === null;
}

function esValorUndefined(valor) {
  return valor === undefined;
}

function esNumeroValido(n) {
  return typeof n === 'number' && !Number.isNaN(n);
}

function acumularPorPasos(inicial, pasos) {
  let total = inicial;
  for (let i = 0; i < pasos.length; i++) {
    total += pasos[i];
  }
  return total;
}

function aplicarIncrementoDesdeCero(intentos) {
  let contador = 0;
  for (let i = 0; i < intentos; i++) {
    contador++;
  }
  return contador;
}

function enteroDesdeBinario(binarioStr) {
  return parseInt(binarioStr, 2);
}

function floatDesdeTexto(texto) {
  return parseFloat(texto);
}

function precioFormateadoDosDecimales(precio) {
  return precio.toFixed(2);
}

function esNumeroFinitoValor(n) {
  return Number.isFinite(n);
}

function redondearHaciaAbajo(num) {
  return Math.floor(num);
}

function aleatorioEnteroInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buscarIndiceCadena(texto, subcadena) {
  return texto.indexOf(subcadena);
}

function extraerPorSlice(texto, inicio, fin) {
  return texto.slice(inicio, fin);
}

function limpiarEspaciosExtremos(texto) {
  return texto.trim();
}

function partirEnEspacios(texto) {
  return texto.split(' ');
}

function reemplazarGuionesPorEspacio(texto) {
  return texto.split('-').join(' ');
}

function minusculasYRecortado(texto) {
  return texto.trim().toLowerCase();
}

function mayusculasTrasTrim(texto) {
  return texto.trim().toUpperCase();
}

function puedePasarAlEvento(edad, tieneEntrada, esVIP) {
  return (edad >= 18 && tieneEntrada === true) || esVIP === true;
}

function noEsValorFalso(valor) {
  return !(valor === false);
}

function clasificarSigno(num) {
  return num > 0 ? 'positivo' : num < 0 ? 'negativo' : 'cero';
}

function clasificarTipoDia(codigo) {
  switch (codigo) {
    case 'lun':
    case 'mar':
    case 'mie':
    case 'jue':
    case 'vie':
      return 'habil';
    case 'sab':
    case 'dom':
      return 'descanso';
    default:
      return 'desconocido';
  }
}

function sumaDesdeUnoConWhile(numeroFinal) {
  if (numeroFinal < 1) return 0;
  let suma = 0;
  let i = 1;
  while (i <= numeroFinal) {
    suma += i;
    i++;
  }
  return suma;
}

function primerMultiploEnIntervaloDoWhile(inicio, divisor, limiteSuperior) {
  if (divisor === 0) return null;
  let candidato = inicio;
  do {
    if (candidato % divisor === 0) return candidato;
    candidato++;
  } while (candidato <= limiteSuperior);
  return null;
}

function tablaMultiplicacionForBase(base) {
  const resultado = [];
  for (let k = 1; k <= 10; k++) {
    resultado.push(base * k);
  }
  return resultado;
}

function saludarConTitulo(nombre, titulo = 'Sr.') {
  return 'Hola, ' + titulo + ' ' + nombre + '!';
}

function elevarConExponentePorDefecto(base, exponente = 2) {
  return Math.pow(base, exponente);
}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  nuevaString,
  nuevoNum,
  nuevoBool,
  nuevaResta,
  nuevaMultiplicacion,
  nuevoModulo,
  resultadoHoisting,
  devolverString,
  tienenMismaLongitud,
  sonIguales,
  sonEstrictamenteIguales,
  menosQueNoventa,
  mayorQueCincuenta,
  suma,
  resta,
  divide,
  multiplica,
  obtenerResto,
  esPar,
  esImpar,
  elevarAlCuadrado,
  elevarAlCubo,
  elevar,
  redondearNumero,
  redondearHaciaArriba,
  agregarSimboloExclamacion,
  combinarNombres,
  obtenerSaludo,
  obtenerAreaRectangulo,
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo,
  valoresDelIndiceConLetEnBucle,
  construirListaConConstMutando,
  esRealmenteNulo,
  esValorUndefined,
  esNumeroValido,
  acumularPorPasos,
  aplicarIncrementoDesdeCero,
  enteroDesdeBinario,
  floatDesdeTexto,
  precioFormateadoDosDecimales,
  esNumeroFinitoValor,
  redondearHaciaAbajo,
  aleatorioEnteroInclusive,
  buscarIndiceCadena,
  extraerPorSlice,
  limpiarEspaciosExtremos,
  partirEnEspacios,
  reemplazarGuionesPorEspacio,
  minusculasYRecortado,
  mayusculasTrasTrim,
  puedePasarAlEvento,
  noEsValorFalso,
  clasificarSigno,
  clasificarTipoDia,
  sumaDesdeUnoConWhile,
  primerMultiploEnIntervaloDoWhile,
  tablaMultiplicacionForBase,
  saludarConTitulo,
  elevarConExponentePorDefecto,
};