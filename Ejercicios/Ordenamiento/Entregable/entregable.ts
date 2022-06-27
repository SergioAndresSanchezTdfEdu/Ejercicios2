document.getElementById("app").innerHTML = `
  <h1>Ordenamiento - Entregable</h1>
`;

function azar(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function cargarAnios(arreglo: number[], cantidad: number) {
  for (let i: number = 0; i < cantidad; i++) {
    arreglo[i] = azar(1, 100);
  }
}

function cargarAlturas(arreglo: number[], cantidad: number) {
  for (let i: number = 0; i < cantidad; i++) {
    arreglo[i] = azar(150, 200);
  }
}

function cargarTexto(arreglo: string[], cantidad: number) {
  for (let i: number = 0; i < cantidad; i++) {
    arreglo[i] = prompt(`Indique el Nombre`);
  }
}

function mostrar(arreglo: number[], cantidad: number, titulo: string) {
  let vector: string = "";
  for (let i: number = 0; i < cantidad; i++) {
    vector += `${arreglo[i]} `;
  }
  console.log(titulo + vector);
}

function mostrarTexto(arreglo: string[], cantidad: number, titulo: string) {
  let vector: string = "";
  for (let i: number = 0; i < cantidad; i++) {
    vector += `${arreglo[i]} `;
  }
  console.log(titulo + vector);
}

function intercambiar(arreglo: number[], a: number, b: number) {
  let aux: number;
  aux = arreglo[a];
  arreglo[a] = arreglo[b];
  arreglo[b] = aux;
}

function intercambiarTexto(arreglo: string[], a: number, b: number) {
  let aux: string;
  aux = arreglo[a];
  arreglo[a] = arreglo[b];
  arreglo[b] = aux;
}

function ordenarBubble(
  arreglo1: string[],
  arreglo2: number[],
  arreglo3: number[],
  cantidad: number
) {
  for (let i: number = 0; i < cantidad - 1; i++) {
    for (let j: number = 0; j < cantidad - i; j++) {
      if (
        arreglo2[j] > arreglo2[j + 1] ||
        (arreglo2[j] === arreglo2[j + 1] && arreglo3[j] > arreglo3[j + 1])
      ) {
        intercambiar(arreglo2, j, j + 1);
        intercambiarTexto(arreglo1, j, j + 1);
        intercambiar(arreglo3, j, j + 1);
      }
    }
  }
}

function ordenarSelection(
  arreglo1: string[],
  arreglo2: number[],
  arreglo3: number[],
  cantidad: number
) {
  let posMinimo: number;
  for (let i: number = 0; i < cantidad - 1; i++) {
    posMinimo = i;
    for (let j: number = i + 1; j < cantidad; j++) {
      if (
        arreglo2[j] < arreglo2[posMinimo] ||
        (arreglo2[j] === arreglo2[posMinimo] &&
          arreglo3[j] < arreglo3[posMinimo])
      ) {
        posMinimo = j;
      }
    }
    if (posMinimo !== i) {
      intercambiar(arreglo2, i, posMinimo);
      intercambiarTexto(arreglo1, i, posMinimo);
      intercambiar(arreglo3, i, posMinimo);
    }
  }
}

let longitudArrays: number = Number(
  prompt(`Indique el tamaño de los arreglos`)
);

let nombres: string[] = new Array(longitudArrays);
let anios: number[] = new Array(longitudArrays);
let alturas: number[] = new Array(longitudArrays);

let nombresB: string[] = new Array(longitudArrays);
let aniosB: number[] = new Array(longitudArrays);
let alturasB: number[] = new Array(longitudArrays);

cargarTexto(nombres, longitudArrays);
cargarAnios(anios, longitudArrays);
cargarAlturas(alturas, longitudArrays);

nombresB = nombres;
aniosB = anios;
alturasB = alturas;

console.log(" - - - - - Ordenamiento por Selection - - - - - ");
mostrarTexto(nombres, longitudArrays, "Cargado Nombre: ");
mostrar(anios, longitudArrays, "Cargado Años: ");
mostrar(alturas, longitudArrays, "Cargado Alturas: ");

ordenarSelection(nombres, anios, alturas, longitudArrays);

mostrarTexto(nombres, longitudArrays, "Ordenado Nombre: ");
mostrar(anios, longitudArrays, "Ordenado Años: ");
mostrar(alturas, longitudArrays, "Ordenado Alturas: ");

console.log(" - - - - - Ordenamiento por Bubble - - - - - ");
mostrarTexto(nombresB, longitudArrays, "Cargado Nombre: ");
mostrar(aniosB, longitudArrays, "Cargado Años: ");
mostrar(alturasB, longitudArrays, "Cargado Alturas: ");

ordenarBubble(nombresB, aniosB, alturasB, longitudArrays);

mostrarTexto(nombresB, longitudArrays, "Ordenado Nombre: ");
mostrar(aniosB, longitudArrays, "Ordenado Años: ");
mostrar(alturasB, longitudArrays, "Ordenado Alturas: ");
