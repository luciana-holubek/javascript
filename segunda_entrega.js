// OBJETO: CLASE

class Usuario{
    constructor(nombre,apellido,dni,clave){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.clave = clave;
    }
}


alert("Ingrese los siguientes datos para entrar a su cuenta");
let nombre = prompt("Ingrese su nombre");
let apellido = prompt("Ingrese su apellido");
let dni = prompt("Ingrese su número de DNI");
dni = parseInt(dni);
let clave = prompt("Ingrese su clave");


let empleado = new Usuario(nombre, apellido, dni, clave);

class Usuario_saludar {
    saludar(){
        alert("Bienvenido al sistema: " + this.nombre + " " + this.apellido)
    }
}

empleado.Usuario_saludar();


//ARRAY

let lista_empleados = ["José Martínez", "Ana Farias", "Santiago García", "Patricia Báez", "Camila Robles", "Tadeo Medina"];

for(let i=0; i<lista_empleados.length; i=i+1){
    console.log("Vuelta N° ", i, ". Usuario: ", lista_empleados[i])
}

console.log("El índice de Patricia es: ", lista_empleados.indexOf("Patricia"));


//FUNCIÓN DE ORDEN SUPERIOR

function saludar(nombre){
    console.log("Hola" , nombre);
}

function saludar_a_todos(lista_empleados, saludar){
    for(i=0; i<lista_empleados.length; i=i+1){
        saludar(nombre);
    }
}

saludar_a_todos(lista_empleados, saludar)

