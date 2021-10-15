/*1) Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".

2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.

3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/

const alumnos = [
    {
      nombre: 'Juan',
      carrera: 'Biología',
      nota: 16
    },
    {
      nombre: 'Jose',
      carrera: 'Enfermero',
      nota: 10
    },
      {
      nombre: 'Luis',
      carrera: 'Policía',
      nota: 07
    }
    ,
      {
      nombre: 'Maria',
      carrera: 'Secretariado',
      nota: 10
    },
    {
      nombre: 'Hugo',
      carrera: 'Enfermero',
      nota: 15
    },
      {
      nombre: 'Rosa',
      carrera: 'Enfermero',
      nota: 12
    }
    ,
      {
      nombre: 'Luisa',
      carrera: 'Biología',
      nota: 18
    }
  ]

  /*pregunta 1 Crear una función que recorrar el arreglo alumnos e indique cuantos están aprobados, cuantos están desaprobandos teniendo en cuenta
que la nota mínima aprobatoria es 13. Saca el promedio de las notas aprobadas, promedio de notas desaprobadas y el promedio total de notas.
Indicar el nombre y la carrera en un console.log de los que su indice sea multiplo de 2 ejemplo: "Mi nombre es Juan y mi carrera es Biología".*/
console.log("__________________________________________________________")
console.log("pregunta 1 ")
let numAprobados=0
let numDesaprobados=0
let promedioAprobados=0
let promedioDesaprobados=0
let promedio=0
alumnos.forEach((alumno,index)=>{
    if(alumno.nota>=13){
        numAprobados++
        promedioAprobados=promedioAprobados+(alumno.nota/alumnos.length)
    }
    else{
        numDesaprobados++
        promedioDesaprobados=promedioDesaprobados+(alumno.nota/alumnos.length)
    }
    promedio=promedio+(alumno.nota/alumnos.length)
    if(index%2===0){
        console.log(`mi nombres es ${alumno.nombre} y mi  carrera es ${alumno.carrera} `)
    }
})
console.log(`el numero de aprobados es ${numAprobados}`)
console.log(`el numero de desaprobados es ${numDesaprobados}`)
console.log(`la nota promedio de los alumnos aprobados es ${promedioAprobados}`)
console.log(`la nota promedio de los alumnos desaprobados es ${promedioDesaprobados}`)
console.log(`la nota promedio de los alumnos es ${promedio}`)

//2) Crear una función que filtre en un nuevo arreglo a los alumnos que tengan de nota menor a 13.
console.log("__________________________________________________________")
console.log("pregunta 2 ")
let notaMenor13 = alumnos.filter(alumno=>alumno.nota<13)
console.log("notas menores a 13 con filter")
console.log(notaMenor13)

/*3) Crear una función que retorne un nuevo arreglo en donde se multiplique por 3 la nota de los alumnos y luego la divida entre 2 para devolver
la nueva nota de los alumnos.
*/
console.log("__________________________________________________________")
console.log("pregunta 3")
const arregloNuevo = alumnos.map(function(alumno) {
    return (alumno.nota*3)/2
})
console.log("las nuevas notas de los alumnos son :")
console.log(arregloNuevo)

console.log(alumnos)