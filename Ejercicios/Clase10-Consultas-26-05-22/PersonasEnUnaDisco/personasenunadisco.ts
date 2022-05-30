document.getElementById("app").innerHTML = `
  <h1>Personas en una Disco</h1>
`;
const totalDePersonas: number = 270;
const edadDeCorte: number = 21;

let edadDePersonas: number[] = new Array(totalDePersonas);
let mayoresMenores: number[] = new Array(2);

// Retorna un entero aleatorio entre min (incluido) y max (excluido),
// Como el max se excluía, se agrego el + 1.
// ¡Usando Math.round() te dará una distribución no-uniforme!
//function numAlAzar(min: number, max: number) {
//  return Math.floor(Math.random() * (max - min + 1)) + min;
//}

// JOSE: Función de él.
function numAlAzar(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// Carga un arreglo en todo su longitud con edades al azar de personas
// entre un número min y max, ambos incluidos.
function cargarArregloNumeroAzar(arreglo: number[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    arreglo[i] = numAlAzar(19, 40);
  }
}

// Dado un arreglo de edades de personas las cuenta, separandolas por un
// puntoDeCorte dado en mayores e iguales y menores al puntoDeCorte y
// las almacena e un arreglo de 2 posisicones, siendo la posición 0 la
// cantidad de mayores e iguales y la posisción 1 la cantidad de menores.
// JOSE: poniendonos finos en la correccion me hace un poco de ruido el
//       nombre de la funcion, debe ser descriptivo y una accion,
//       por ej: cargaArrContador o algo incluso mejor que eso jaja
function mayoresA(arreglo: number[], puntoDeCorte: number) {
  mayoresMenores[0] = 0;
  mayoresMenores[1] = 0;
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] >= puntoDeCorte) {
      mayoresMenores[0]++;
    } else {
      mayoresMenores[1]++;
    }
  }
}

cargarArregloNumeroAzar(edadDePersonas);
mayoresA(edadDePersonas, edadDeCorte);
console.log(
  `La Cantidad de Personas con Edad menor a ${edadDeCorte} es: ${mayoresMenores[1]}`
);
console.log(
  `La Cantidad de Personas con Edad mayor o igual a ${edadDeCorte} es: ${mayoresMenores[0]}`
);
console.log(
  `La Cantidad Total de Personas en la Disco es de: ${totalDePersonas}`
);
console.log("Arerglo: " + edadDePersonas);
// JOSE: muy bien tu solucion!
