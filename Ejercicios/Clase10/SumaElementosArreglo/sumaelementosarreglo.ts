document.getElementById("app").innerHTML = `
  <h1>Suma Elementos Arreglo</h1>
`;

let TamanioArreglo = Number(prompt("Ingrese la cantidad de nombres a cargar"));
let Arreglo: number[] = new Array(TamanioArreglo);

let SumaElementos: number;

function LeerArreglo(
  Arreglo: number[],
  Tamanio: number,
  NombreArreglo: string
): number[] {
  for (let i: number = 0; i < Tamanio; i++) {
    let NumeroLeido: number;
    NumeroLeido = Number(
      prompt(
        `Indique el número que desea incorporar en la posición ${i} del ${NombreArreglo}: `
      )
    );
    Arreglo[i] = NumeroLeido;
  }
  return Arreglo;
}

function SumaArreglo(arreglo1: number[], tamanio: number): number {
  let Suma: number = 0;
  for (let i: number = 0; i < tamanio; i++) {
    Suma = Suma + arreglo1[i];
  }
  return Suma;
}

function MostrarArreglo(
  arreglo: number[],
  tamanio: number,
  NombreArreglo: string
) {
  for (let i: number = 0; i < tamanio; i++) {
    console.log(
      `El dato en la posición ${i} del ${NombreArreglo} es ${arreglo[i]}`
    );
  }
}

Arreglo = LeerArreglo(Arreglo, TamanioArreglo, "Arreglo");
MostrarArreglo(Arreglo, TamanioArreglo, "Arreglo");
SumaElementos = SumaArreglo(Arreglo, TamanioArreglo);

console.log(`La suma de los elementos del arreglo es: ${SumaElementos}`);
