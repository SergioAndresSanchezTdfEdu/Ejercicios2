document.getElementById("app").innerHTML = `
  <h1>Completar Arreglo</h1>
`;

let Arreglo: number[] = new Array(10);

function LeerArregloNumeroAzar(Arreglo: number[]): number[] {
  let CopiaArreglo: number[] = Arreglo;
  for (let i: number = 0; i < CopiaArreglo.length; i++) {
    CopiaArreglo[i] = Math.floor(Math.random() * 10);
  }
  return CopiaArreglo;
}

function MostrarArregloNumero(arreglo: number[]) {
  for (let i = 0; i <= arreglo.length - 1; i++) {
    console.log(`El dato en la posición ${i} del Arreglo es ${arreglo[i]}`);
  }
}

Arreglo = LeerArregloNumeroAzar(Arreglo);
MostrarArregloNumero(Arreglo);
