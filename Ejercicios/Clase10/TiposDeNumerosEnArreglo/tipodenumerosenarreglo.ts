document.getElementById("app").innerHTML = `
  <h1>Completar Arreglo</h1>
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

function MostrarCantidadPositivosNegativos0(arreglo: number[]) {
  let ceros: number = 0;
  let positivos: number = 0;
  let negativos: number = 0;

  for (let i = 0; i <= arreglo.length - 1; i++) {
    if (arreglo[i] === 0) {
      ceros++;
    } else if (arreglo[i] > 0) {
      positivos++;
    } else {
      negativos++;
    }
  }

  console.log(
    `En el Arreglo hay: ${ceros} Cero, ${positivos} Positivos y ${negativos} Negativos`
  );
}

Arreglo = LeerArregloNumero(Arreglo);
MostrarCantidadPositivosNegativos0(Arreglo);
