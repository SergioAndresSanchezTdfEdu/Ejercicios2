document.getElementById("app").innerHTML = `
  <h1>Sumar Dos Arreglos</h1>
`;
// JOSE: llamar a las variables y funciones con minusculas como primer palabra
// SERGIO: ok.
let tamanio = Number(prompt(`Indique el tamaño de los vectores`));
let arreglo1: number[] = new Array(tamanio);
let arreglo2: number[] = new Array(tamanio);
let sumaArreglo1y2: number[] = new Array(tamanio);

// JOSE: seria mejor llamar a esta funcion cargarArreglo y no LeerArreglo
// SERGIO: Perfecto!!!

function cargarArreglo(
  arreglo: number[],
  tamanio: number,
  nombreArreglo: string
) {
  // JOSE: definir variables fuera de ciclos
  // SERGIO: perdón, jajaja.

  let numeroLeido: number;
  for (let i: number = 0; i < tamanio; i++) {
    numeroLeido = Number(
      prompt(
        `Indique el número que desea incorporar en la posición ${i} del ${nombreArreglo}: `
      )
    );
    arreglo[i] = numeroLeido;
  }
}

// JOSE: los arreglos son globales no hace falta retornarlos
// SERGIO: buenísmo, no lo sabía.

function sumarArreglos(
  arreglo1: number[],
  arreglo2: number[],
  tamanio: number
) {
  for (let i: number = 0; i < tamanio; i++) {
    sumaArreglo1y2[i] = arreglo1[i] + arreglo2[i];
    // JOSE: porque no usar el arreglo de suma ya definido al principio del script?
    // SERGIO: porque no sabía que los arreglos eran Globales y se modificaban
    //         dentro de una función.
  }
}

function productoEscalar(arreglo1: number[], arreglo2: number[]): number {
  let suma: number = 0;
  for (let i: number = 0; i < arreglo1.length; i++) {
    suma += arreglo1[i] * arreglo2[i];
  }
  return suma;
}

function mostrarArreglo(
  arreglo: number[],
  tamanio: number,
  nombreArreglo: string
) {
  for (let i: number = 0; i < tamanio; i++) {
    console.log(
      `El dato en la posición ${i} del ${nombreArreglo} es ${arreglo[i]}`
    );
  }
}

cargarArreglo(arreglo1, tamanio, "Arreglo 1");
// SERGIO: Cambiado por comentario de JOSE
//mostrarArreglo(arreglo1, 6, "Arreglo 1");
console.log(`El Arreglo 1 es: ${arreglo1}`);
cargarArreglo(arreglo2, tamanio, "Arreglo 2");
// SERGIO: Cambiado por comentario de JOSE
//mostrarArreglo(arreglo2, 6, "Arreglo 2");
console.log(`El Arreglo 2 es: ${arreglo2}`);
sumarArreglos(arreglo1, arreglo2, tamanio);
// SERGIO: Cambiado por comentario de JOSE
//mostrarArreglo(sumaArreglo1y2, 6, "arreglo de la suma de los Arreglos 1 y 2");
console.log(`La Suma de los Arreglos 1 y 2 es: ${sumaArreglo1y2}`);
console.log(
  "El Producto Escalar de los Arreglos es: " +
    productoEscalar(arreglo1, arreglo2)
);
// JOSE: a veces no es bueno mostrar tanta informacion, console.log arreglo es suficiente y claro
// SERGIO: Debería reemplasar los mostrarArreglo(...) por console.log y listo

// JOSE: El ejercicio esta bien resuelto
// SERGIO: Gracias!!!
