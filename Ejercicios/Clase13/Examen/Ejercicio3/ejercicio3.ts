document.getElementById("app").innerHTML = `
  <h1>Examen - Ejercicio 3</h1>
  <p>Enunciado:</p>
  <p>Detecta cuales son los errores en la siguiente función y describe como los solucionarías</p>
`;

/* la función multiplica los números ingresados por el usuario
que se encuentran entre los valores min y max y devuelve el
resultado de la multiplicación */

/*
function multiplicarEntreNumeros(
  min: number,
  max: number,
  cantNum: number
): number {
  let resultado: number = 0;
  let numIng: number = 0;
  let i: number = 1;
  while (i <= cantNum) {
    numIng = Number(prompt("Ingrese un número: "));
    if (numIng >= min && numIng <= max) {
      resultado = numIng;
    }
  }
  return cantNum;
}*/

// RESPUESTA:
// El comentario esta mal hecho ya que se hace por línes con //
// o se hace todo el parrafo empezando con /* y terminando al final
// de todo el comentario con */
//
// EL pasar por parametro cantNum, no se entiende, no corresponde con lo comentado
// en el comentario de la función. Tomo cantNum, como la cantidad de números que debe ingresar
// el usuario.
// resultado debería iniciar en 1 ya que es el valor neutro para la multiplicación.
// El While no cortaría nunca, salvo que cantNum sea 0, no se modifican nunca los valores de i y
// cantNum dentro del while. Como es una cantidad sabida de iteraciones, lo haría con un for.
// No se esta realizando la multiplicación de los números ingresados por el usuario que cumplan
// con estar entre los valores min y max.
// return debería retornar la variable resultado luego de ser bien realizado el cálculo.
// agrego la variable ningunValorDentroDelRango inicalizada en true, para evaluar si la persona
// entro volaros dentro del rango y convertirla en false, de no ser así, se debe retornar el valor 0.
// de esta manerasi el usario ingresa valores menores a cero o mayores a cero funciona siempre.

function multiplicarEntreNumerosArreglada(
  min: number,
  max: number,
  cantNum: number
): number {
  let resultado: number = 1;
  let ningunValorDentroDelRango = true;
  if (min <= max) {
    let numIng: number = 0;
    let i: number = 1;
    for (i; i <= cantNum; i++) {
      numIng = Number(prompt("Ingrese un número: "));
      if (numIng >= min && numIng <= max) {
        resultado *= numIng;
        ningunValorDentroDelRango = false;
      }
    }
  }
  if (ningunValorDentroDelRango) {
    return 0;
  } else {
    return resultado;
  }
}

console.log(
  "El producto de los 10 números ingresados entre -12 y 7 es: " +
    multiplicarEntreNumerosArreglada(-12, 7, 10)
);
