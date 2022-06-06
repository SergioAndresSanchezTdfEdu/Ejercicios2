document.getElementById("app").innerHTML = `
  <h1>Multiplicación</h1>
`;

let v1: number[] = [1, 2, 3];
let v2: number[] = [4, 5, 6];
let v3: number[] = [2, 1, 2];
let v4: number[] = [1, 2, 1];
let vResultado: number[] = new Array(3);

/*
vResultado (v1*v2*v3*v4): [8, 20, 36]
*/

// Cuento las butacas desocupados, que son las que tiene valor false.
function multiplicarArreglos(
  arreglo1: number[],
  arreglo2: number[],
  resultado: number[]
) {
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
