document.getElementById("app").innerHTML = `
  <h1>Promedio Escolar</h1>
`;
let tamanio = Number(prompt(`Indique la cantidad de alumnos a cargar`));
let nombresAlumnos: string[] = new Array(tamanio);
let notasMateria1: notas[] = new Array(tamanio);
let notasMateria2: notas[] = new Array(tamanio);
let notasMateria3: notas[] = new Array(tamanio);

function cargarArreglo(arreglo: string[], notas1, notas2, notas3: number[]) {
  for (let i: number = 0; i < arreglo.length; i++) {
    arreglo[i] = prompt(`Ingrese el nombre del Alumno:`);
    notas1[i] = Number(prompt(`Ingrese la Nota de la Materia 1:`));
    notas2[i] = Number(prompt(`Ingrese la Nota de la Materia 2:`));
    notas3[i] = Number(prompt(`Ingrese la Nota de la Materia 3:`));
  }
}

function mostrarAlumnosNotasPromedio(
  arreglo: string[],
  notas1,
  notas2,
  notas3: number[]
) {
  for (let i: number = 0; i < arreglo.length; i++) {
    console.log("Nombre Alumno: " + arreglo[i]);
    console.log("Notas: " + notas1[i] + "," + notas2[i] + "," + notas3[i]);
    console.log("Promedio: " + (notas1[i] + notas2[i] + notas3[i]) / 3);
  }
}

cargarArreglo(nombresAlumnos, notasMateria1, notasMateria2, notasMateria3);
mostrarAlumnosNotasPromedio(
  nombresAlumnos,
  notasMateria1,
  notasMateria2,
  notasMateria3
);
