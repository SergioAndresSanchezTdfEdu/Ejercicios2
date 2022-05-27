document.getElementById("app").innerHTML = `
  <h1>Dos Arreglos</h1>
`;

let ArregloNombres: string[] = new Array(2);
let ArregloNumeros: number[] = new Array(3);

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

function LeerArregloCadena(Arreglo: string[]): string[] {
  let CopiaArreglo: string[] = Arreglo;
  for (let i: number = 0; i < CopiaArreglo.length; i++) {
    CopiaArreglo[i] = prompt(
      `Indique la cadena de caracteres que desea incorporar en la posición ${i} del Arreglo: `
    );
  }
  return CopiaArreglo;
}

function MostrarArregloNumero(arreglo: number[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    console.log(`El dato en la posición ${i} del Arreglo es ${arreglo[i]}`);
  }
}

function MostrarArregloCadena(arreglo: string[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    console.log(`El dato en la posición ${i} del Arreglo es ${arreglo[i]}`);
  }
}

ArregloNombres = LeerArregloCadena(ArregloNombres);
ArregloNumeros = LeerArregloNumero(ArregloNumeros);
MostrarArregloCadena(ArregloNombres);
MostrarArregloNumero(ArregloNumeros);
