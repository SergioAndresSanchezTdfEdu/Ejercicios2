document.getElementById("app").innerHTML = `
  <h1>Cine</h1>
`;

let tamanio = Number(prompt(`Indique la cantidad de Butacas del Cine`));
let butacas: boolean[] = new Array(tamanio);

// Si el valor entregado por la función Math.random() es < 0.5 retorno el valor false
// en caso contrario retorna true.
function numAlAzarBoolean(): boolean {
  if (Math.random() < 0.5) {
    return false;
  } else {
    return true;
  }
}

// Cargo el arreglo de tamanio definido por el usuario con valores booleanos entregados al azar
// por la función numAlAzarBoolean().
function cargarArregloBooleanAzar(arreglo: boolean[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    arreglo[i] = numAlAzarBoolean();
  }
}

// Cuento las butacas desocupados, que son las que tiene valor false.
function contarButacasDesocupadas(arreglo: boolean[]): number {
  let butacasDesocupadas: number = 0;
  for (let i: number = 0; i < arreglo.length; i++) {
    if (!arreglo[i]) {
      butacasDesocupadas++;
    }
  }
  return butacasDesocupadas;
}
cargarArregloBooleanAzar(butacas);
console.log(
  "El cine cuenta con " +
    tamanio +
    " butacas de las cuales están desocupadas " +
    contarButacasDesocupadas(butacas)
);
//esta muy bien tu solucion
