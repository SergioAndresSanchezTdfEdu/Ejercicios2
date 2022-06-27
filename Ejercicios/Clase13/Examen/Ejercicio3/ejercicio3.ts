// JOSE: Corrección
// El ejercicio esta bien, lo rebuscaste demasiado.
// Hay alguna solución que propusiste que no es del todo acertada,
// pero como es una solución a algo que no se pide no se tiene en
// cuenta para la corrección.
// Para finalizar, tu examen está muy bien!!

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

// a) El comentario esta mal hecho ya que se hace por líneas con // o se hace todo el párrafo empezando con /* y terminando al final de todo el comentario con */

// b) EL pasar por parámetro cantNum, no se entiende, no corresponde con lo comentado en el comentario de la función. Tomo cantNum, como la cantidad de números que debe ingresar el usuario.

// c) La variable resultado debería iniciarse en 1 ya que es el valor neutro para la multiplicación.

// d) El While no cortaría nunca, salvo que cantNum sea 0, no se modifican nunca los valores de i y cantNum dentro del while. Como es una cantidad sabida de iteraciones, lo haría con un for.

//e ) No se esta realizando la multiplicación de los números ingresados por el usuario que cumplan con estar entre los valores min y max.

//f ) return debería retornar la variable resultado luego de ser bien realizado el cálculo.

// g) Agrego la variable ningunValorDentroDelRango inicializada en true, para evaluar si la persona entro valores dentro del rango y convertirla en false, de no ser así, se debe retornar el valor 0 en caso de que min sea mayor que max y en caso de que el usuario no ingrese ningún valor dentro del rango solicitado. De esta manera, si el usuario ingresa valores menores a cero o mayores a cero funciona siempre.

// La función debería quedar así:

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
