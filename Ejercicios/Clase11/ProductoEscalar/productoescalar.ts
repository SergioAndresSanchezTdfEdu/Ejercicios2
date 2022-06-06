document.getElementById("app").innerHTML = `
  <h1>Producto Escalar</h1>
`;
let tamanio = Number(prompt(`Indique el tamaño de los vectores`));
let arreglo1: number[] = new Array(tamanio);
let arreglo2: number[] = new Array(tamanio);

function cargarArreglo(
  arreglo: number[],
  tamanio: number,
  nombreArreglo: string
) {
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

function productoEscalar(arreglo1: number[], arreglo2: number[]): number {
  let productoEscalar: number = 0;
  for (let i: number = 0; i < arreglo1.length; i++) {
    productoEscalar += arreglo1[i] * arreglo2[i];
  }
  return productoEscalar;
}

cargarArreglo(arreglo1, tamanio, "Arreglo 1");
console.log(`El Arreglo 1 es: ${arreglo1}`);
cargarArreglo(arreglo2, tamanio, "Arreglo 2");
console.log(`El Arreglo 2 es: ${arreglo2}`);
console.log(
  "El Producto Escalar de los Arreglos es: " +
    productoEscalar(arreglo1, arreglo2)
);
