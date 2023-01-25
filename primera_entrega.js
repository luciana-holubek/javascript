/* Los empleados de una fábrica trabajan en dos turnos: Diurno y Nocturno. El objetivo es calcular el jornal diario de acuerdo con las siguientes condiciones:
a) La tarifa de las horas diurnas es de $ 850
b) La tarifa de las horas nocturnas es de $ 1000
c) En caso de ser feriado, la tarifa se incrementa en un 100% si el turno es diurno y en un 115% si el turno es nocturno.*/


// FUNCIÓN TURNO
function salario_turno(turno){
    if(turno == "diurno"){
        valor_hora = 850
    }
    else if(turno == "nocturno"){
        valor_hora = 1000
    }
}

// FUNCIÓN CANTIDAD DE HORAS 
function salario_cantidad_horas(cantidad_horas){
    for(let i=0; cantidad_horas; i=i+1){
        salario_final = salario_final + valor_hora
        console.log(i)
    }

 /* Otra manera
    if(cantidad_horas <= 9 && cantidad_horas >=4){
        valor_hora = valor_hora * cantidad_horas
        }
    else{
        alert("Valor no válido")
    }
*/
    }

// FUNCIÓN FERIADO
function salario_feriado(feriado, turno){
    if(feriado=="si" && turno=="diurno"){
        salario_final = salario_final * 2
    }
    else if(feriado=="si" && turno=="nocturno"){
        salario_final = salario_final * 2.15
    }
}


// DECLARACIÓN VARIABLES Y SOLICITUD DE DATOS
alert("Bienvenido/a al sistema! Ingrese sus datos para conocer su remuneración diaria:")
let nombre = prompt("Ingrese su nombre")
let turno = prompt("Ingrese si ha estado en turno diurno o nocturno")
let cantidad_horas = prompt("Ingrese la cantidad de horas trabajadas")
let feriado = prompt("¿Es feriado? si/no")

parseFloat(cantidad_horas)
let valor_hora = 0
let salario_final = 0

salario_turno(turno)
salario_cantidad_horas(cantidad_horas)
salario_feriado(feriado,turno)

alert(nombre, " ha trabajado ", cantidad_horas, " horas en el turno ", turno, ", siendo feriado: ", feriado )
alert("La remuneración por su día de trabajo es de: $", salario_final)








