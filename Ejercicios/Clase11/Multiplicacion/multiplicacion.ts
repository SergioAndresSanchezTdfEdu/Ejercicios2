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
  for (let i: number = 0; i < arreglo1.length; i++) {
    resultado[i] = arreglo1[i] * arreglo2[i];
  }
}

console.log("v1: " + v1);
console.log("v2: " + v2);
console.log("v3: " + v3);
console.log("v4: " + v4);
console.log("-----------");

multiplicarArreglos(v1, v2, vResultado);

console.log("v1 * v2");
console.log("vResultado: " + vResultado);
console.log("-----------");

multiplicarArreglos(vResultado, v3, vResultado);

console.log("vResultado * v3");
console.log("vResultado: " + vResultado);
console.log("-----------");

multiplicarArreglos(vResultado, v4, vResultado);

console.log("vResultado * v4");
console.log("vResultado: " + vResultado);
console.log("-----------");
