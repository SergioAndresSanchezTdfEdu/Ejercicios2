document.getElementById("app").innerHTML = `
  <h1>Ordenamiento</h1>
`;

function azar(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargar(arreglo: number[], cantidad: number) {
  for (let i: number = 0; i < cantidad; i++) {
    arreglo[i] = azar(1, 100);
  }
}

function mostrar(arreglo: number[], cantidad: number, titulo: string) {
  let vector: string = "";
  for (let i: number = 0; i < cantidad; i++) {
    vector += `${arreglo[i]} `;
  }
  console.log(titulo + vector);
}

function intercambiar(arreglo: number[], i: number, b: number) {
  let aux: number;
  aux = arreglo[i];
  arreglo[i] = arreglo[b];
  arreglo[b] = aux;
}

function ordenarBubble(arreglo: number[], cantidad: number) {
  for (let i: number = 0; i < cantidad - 1; i++) {
    for (let j: number = 0; j < cantidad - i; j++) {
      if (arreglo[j] > arreglo[j + 1]) {
        intercambiar(arreglo, j, j + 1);
      }
    }
  }
}

function ordenarSelection(arreglo: number[], cantidad: number) {
  let posMinimo: number;
  for (let i: number = 0; i < cantidad - 1; i++) {
    posMinimo = i;
    for (let j: number = i + 1; j < cantidad; j++) {
      if (arreglo[j] < arreglo[posMinimo]) {
        posMinimo = j;
      }
    }
    if (posMinimo !== i) {
      intercambiar(arreglo, i, posMinimo);
    }
  }
}

let n: number = 10;
let arreglo: number[] = new Array(n);
cargar(arreglo, n);

mostrar(arreglo, n, "Cargado Selection: ");
ordenarSelection(arreglo, n);
mostrar(arreglo, n, "Ordenado Selection: ");

cargar(arreglo, n);

mostrar(arreglo, n, "Cargado Bubble: ");
ordenarBubble(arreglo, n);
mostrar(arreglo, n, "Ordenado Bubble: ");
