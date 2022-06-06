document.getElementById("app").innerHTML = `
  <h1>Invertir Arreglo</h1>
`;

let tamanio = Number(prompt(`Indique el tamaño del Arreglo: `));
let Arreglo: number[] = new Array(tamanio);

function LeerArregloNumero(Arreglo: number[]): number[] {
  let CopiaArreglo: number[] = Arreglo;
  for (let i: number = 0; i < CopiaArreglo.length; i++) {
    let NumeroLeido: number;
    NumeroLeido = Number(
      prompt(
        `Indique el número que desea incorporar en la posición ${i} del Arreglo: `
      )
    );
    CopiaArreglo[i] = NumeroLeido;
  }
  return CopiaArreglo;
}

function MostrarArregloInvertidoNumero(arreglo: number[]) {
  for (let i = arreglo.length - 1; i >= 0; i--) {
    console.log(`El dato en la posición ${i} del Arreglo es ${arreglo[i]}`);
  }
}
/*
function InvertirArreglo(arreglo: number[]): number[] {
  let arregloinvertido: number[] = new Array(tamanio);
  let j: number = 0;
  for (let i = arreglo.length - 1; i >= 0; i--) {
    arregloinvertido[i] = arreglo[j];
    j++;
  }
  return arregloinvertido;
}
*/
/*
function InvertirArregloSobreSiMismo(arreglo: number[]) {
  let izquierda: number = 0;
  let derecha: number = arreglo.length - 1;
  let auxiliar: number = 0;
  while (izquierda < derecha) {
    auxiliar = arreglo[izquierda];
    arreglo[izquierda] = arreglo[derecha];
    arreglo[derecha] = auxiliar;
    izquierda++;
    derecha--;
  }
}
*/
Arreglo = LeerArregloNumero(Arreglo);
MostrarArregloInvertidoNumero(Arreglo);

//console.log("Arreglo Invertido: ", InvertirArreglo(Arreglo));
//InvertirArregloSobreSiMismo(Arreglo);
//console.log("Arreglo Invertido sobre Si Mismo: " + Arreglo);
