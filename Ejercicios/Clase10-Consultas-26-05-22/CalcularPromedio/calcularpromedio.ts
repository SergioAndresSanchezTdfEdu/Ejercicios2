document.getElementById("app").innerHTML = `
  <h1>Calcular Promedio</h1>
`;
let totalDeNinios: number = Number(
  prompt(`Indique la cantidad de Niños del equipo de Futbol:`)
);
let edadDeNinios: number[] = new Array(totalDeNinios);

// Retorna un entero aleatorio entre min (incluido) y max (excluido),
// Como el max se excluía, se agrego el + 1.
// ¡Usando Math.round() te dará una distribución no-uniforme!
function numAlAzar(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Carga un arreglo en todo su longitud con edades al azar de personas
// entre un número min y max, ambos incluidos.
function cargarArregloNumeroAzar(arreglo: number[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    arreglo[i] = numAlAzar(3, 7);
  }
}

// Devuelve el promedio de edades dadas en un arreglo
function promedioDeEdad(arreglo: number[]): number {
  let suma: number = 0;

  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma / arreglo.length;
}
cargarArregloNumeroAzar(edadDeNinios);
console.log("Las Edades de los Niños son: " + edadDeNinios);
console.log(
  `La Edad promedio de los Niños es: ` + promedioDeEdad(edadDeNinios)
);
