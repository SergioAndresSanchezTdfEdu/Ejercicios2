// JOSE: Correción
// Ojo con la función random, así como esta no da valores de 0 a 100
// sino de 0 a 98
// Bien resuelto

document.getElementById("app").innerHTML = `
  <h1>Examen - Ejercicio 1</h1>
  <p>Enunciado:</p>
  <p>Realizar una función que permita genere un arreglo de tamaño ingresado por el usuario y cargarlo con valores aleatorios. Realizar una función que muestre por consola los elementos del arreglo. Realizar una función que devuelva el menor valor del arreglo con valores numéricos. Por ultimo muestra por consola el menor valor devuelto por la función.</p>
`;

let tamanio = Number(prompt(`Indique el tamaño del arreglo`));
let arregloNumerico: number[] = new Array(tamanio);

// Carga un arreglo pasado por paramentro en todo su longitud
// con numeros al azar de 0 a 100.
function cargarArregloNumeroAzar(arreglo: number[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    // SERGIO:
    // arreglo[i] = Math.floor(Math.random() * 99);
    // JOSE:
    arreglo[i] = Math.floor(Math.random() * 101);
  }
}

// Muestro el arreglo pasado por parametro.
function mostrarArreglo(arreglo: number[]) {
  console.log("Arreglo: " + arreglo);
}

// Busco el menor de un arreglo pasado por parametro.
function buscarMenorNumero(arreglo: number[]): number {
  let menor: number = arreglo[0];
  for (let i: number = 1; i < arreglo.length; i++) {
    if (arreglo[i] < menor) {
      menor = arreglo[i];
    }
  }
  return menor;
}

if (arregloNumerico.length !== 0) {
  cargarArregloNumeroAzar(arregloNumerico);
  mostrarArreglo(arregloNumerico);
  console.log(
    "El menor valor del arreglo es: " + buscarMenorNumero(arregloNumerico)
  );
} else {
  console.log("La dimensión del arreglo es 0");
}
