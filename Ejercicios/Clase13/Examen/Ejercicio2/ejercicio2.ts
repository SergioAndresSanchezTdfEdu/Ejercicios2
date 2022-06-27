// JOSE: Corrección
// Correcto

document.getElementById("app").innerHTML = `
  <h1>Examen - Ejercicio 2</h1>
  <p>Enunciado:</p>
  <p>Describe que realiza la segunda función</p>
  <p>function x(entrada: number[]) {</p>
  <p>  let t: number = entrada.length;</p>
  <p>  let m: number = 0;</p>
  <p> </p>
  <p>  if (t > 0) {</p>
  <p>    m = entrada[0];</p>
  <p>    if (t > 1) {</p>
  <p>      for (let i: number = 1; i < t; i++) {</p>
  <p>         if (entrada[i] > m) m = entrada[i];</p>
  <p>      }</p>
  <p>    }</p>
  <p>  }</p>
  <p>  console.log("m: " + m);</p>
  <p>}</p>
  <p> </p>
  <p>x([5, 8, 9, 6, 4, 5, 8, 3]);</p>
  <p>RESPUESTA: La función x guarda en "t" el tamaño del arreglo y en "m" el mayor valor del arreglo. Luego muestra el valor de "m" como valor máximo dentro del arreglo.

  En definitiva la función haya el mayor valor del arreglo.</p>
`;

function x(entrada: number[]) {
  let t: number = entrada.length;
  let m: number = 0;

  if (t > 0) {
    m = entrada[0];
    if (t > 1) {
      for (let i: number = 1; i < t; i++) {
        if (entrada[i] > m) m = entrada[i];
      }
    }
  }
  console.log("m: " + m);
}

x([5, 8, 9, 6, 4, 5, 8, 3]);
