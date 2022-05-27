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

Arreglo = LeerArregloNumero(Arreglo);
MostrarArregloInvertidoNumero(Arreglo);
