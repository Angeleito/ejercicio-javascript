/* EJERCICIOS 
1) Crea un juego en el que el programa genera un numero aleatorio del 1 al 100, y luego le pide al usuario ese numero. El bucle "WHILE" debe continuar ejecutandose
hasta que el usuario adivine correctamente el numero. (Investigar Math.random)

2) Crea un Objeto que contenga informacion sobre libros, donde cada propiedad es el titulo de un libro y su valor es un objeto con detalles adicionales
(autor,año de publicacion u otra cosa). Utilizar un bucle "FOR IN" para imprimir el titulo y el autor.

3) Crea un array de objetos que presenten personas, donde cada objeto tenga propiedades como (nombre,edad y ciudad). Utilizar un bucle "FOR OF" para imprimir el nombre
y la ciudad de cada persona.

4) Crea un programa que elija una palabra al azar de una lista predefinida y le pida al usuario que adivine la palabra letra por letra. Utilizar bucle "DO WHILE", para continuar solicitando letras hasta que el usuario adivine la palabra o haya cometido un numero maximo de intentos. (Investigar Math.random).

5) Crea una clase llamada "Persona" que tenga un constructor que reciba dos parametros (nombre y edad). La clase debe tener un metodo "saludar" y que imprima un mensaje de saludo con el nombre y la edad de la persona.

6) Crea una clase llamada "Estudiante" que herede de la clase "Persona" del ejercicio anterior. La clase "Estudiante" debe tener un constructor adicional que reciba un
parametro (curso). Agregar un metodo "presentar" a la clase "Estudiante" que incluya la informacion del nombre,edad y curso.

7) Crea una funcion que tome una cadena de texto y dos palabras como argumentos (parametros), y reemplace todas las ocurrencias de la primera palabra con la segunda
palabra.

8) Escribe una funcion que tome un array de objetos, donde cada objeto tiene una propiedad "edad" y filtre los objetos que tienen una edad mayor o igual a 18.

9) Dado el siguiente array [{nombre: "Luis", edad: 33, hobbies: ["videojuegos, "musica, "cine"]}, {nombre: "Juanito", edad: 30}, {nombre: "Pedro", edad: 20, hobbies: ["deportes", "leer"]}]. Recorre e imprime cada uno de los valores de cada uno de los elementos.
  
10) Agrega un ultimo elemento al array anterior con el nombre de "Maria" y la edad de 25 años

11) Encuentra el elemento con el nombre de "Pedro" y elimina el elemento hobbies.

12) Encuentra el elemento con el nombre de "Juanito" y agrega un elemento hobbies con el valor de "diseñar".

13) Crear una clase llamada "Inventario" que se encargará de gestionar un inventario de productos:
 * La clase "Inventario" debe tener un constructor que inicialice un arreglo vacío llamado productos.
 * Debe haber un método llamado agregarProducto que acepte tres parámetros (nombre, precio, y cantidad). Este método deberá agregar un objeto producto al arreglo productos con los datos proporcionados.
 * Debe existir un método llamado calcularValorTotal que calcule y devuelva el valor total del inventario multiplicando el precio por la cantidad para cada producto en el arreglo y sumándolos.
 * Debe haber un método llamado listarProductos que recorra el arreglo productos y muestre en la consola los detalles de cada producto (nombre, precio y cantidad).
 * Crea una instancia de la clase "Inventario" llamada miInventario.
 * Agrega al menos tres productos a miInventario utilizando el método agregarProducto
 * Llama al método listarProductos en miInventario para mostrar la lista de productos en la consola.
 * Llama al método calcularValorTotal en miInventario y muestra el valor total del inventario en la consola.
*/

//1)

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentoss = 0;
let adivinanza;

while(adivinanza !== numeroAleatorio){
    adivinanza = parseInt(prompt("Adivina el numero (1-100): "))
    intentoss++;

    if(adivinanza < numeroAleatorio){
        console.log("El numero es mayor");
    }else if(adivinanza > numeroAleatorio){
        console.log("El numero es menor");
    }
};

console.log(`Correcto! Adivinaste el numero en ${intentoss} intentos`);

//2)

let biblioteca = {
    HEIST:{
        autor: "Arina Godoy",
        año: 2021,
        genero: "Misterio"
    },
    Huracan:{
        autor: "Paola Calderon",
        año: 2023,
        genero: "Juvenil"
    },
    FLEUR:{
        autor: "Arina Godoy",
        año: 2016,
        genero: "Misterio"
    }   
};

for(let i in biblioteca){
    for(let j in biblioteca[i]){
        console.log(`${i} : ${biblioteca[i][j]}`);
    }
};

//3)

let comunidad = [
    people1 = {
        nombre: "Juan",
        edad: 18,
        ciudad: "Barinas"
    },
    people2 = {
        nombre: "Fer",
        edad: 20,
        ciudad: "Barcelona"
    },
    people3 = {
        nombre: "Angel",
        edad: 19,
        ciudad: "San Antonio"
    }
];

for(let person of comunidad){
    console.log(person);
};

//4)

const palabras = ["manzana", "banana", "naranja", "pera", "uva"];
const palabraAleatoria = palabras[Math.floor(Math.random()  * palabras.length)];
const letrasPalabra = palabraAleatoria.split("");
const maxIntentos = 6;
let intentos = 0;
let palabraAdivinada = [];

do{
    let letra = prompt(`Adivina una letra de la palabra (${palabraAdivinada.join("")}):`);

    if(letrasPalabra.includes(letra)){
        for(let i = 0; i < letrasPalabra.length; i ++){
            if(letrasPalabra[i] === letra){
                palabraAdivinada[i] = letra;
            }
        }
    }else{
        intentos++;
        console.log(`Letra incorrecta. Te quedan ${maxIntentos - intentos} intentos`)
    }

}while(intentos < maxIntentos && palabraAdivinada.join("") !== palabraAleatoria);

if(palabraAdivinada.join("") === palabraAleatoria){
    console.log(`Felicidades adivinaste la palabra : ${palabraAleatoria}`);
}else{
    console.log(`Agotaste tus intentos... La palabra era : ${palabraAdivinada}`);
}

//5)

class Person{
    constructor(nombre,edad){
        this._nombre = nombre;
        this._edad = edad;
    }
    saludar(){
        return `Hola soy ${this._nombre} y tengo ${this._edad}!`
    }
};

let persona1 = new Person("Angel", 19);
console.log(persona1.saludar());

//6)

class Estudent extends Person{
    constructor(nombre,edad,curso){
        super(nombre,edad);
        this._curso = curso;
    }
    presentar(){
        return `Hola soy ${this._nombre}, tengo ${this._edad} y voy al curso de ${this._curso}!`
    }
};

let estudent = new Estudent("Juan", 20, "Programacion")
console.log(estudent.presentar());

//7).

function remplazarTexto(cadena, palabraAntigua, palabraNueva){
    return cadena.split(palabraAntigua).join(palabraNueva);
};
 
const palabraa = "Me gusta el juego de The Last Of Us, me gusta su historia y me gustan los personajes"
let palabraAntigua = "gusta"
let palabraNueva = "encanta"

let palabraModificada = remplazarTexto(palabraa, palabraAntigua, palabraNueva);
console.log(palabraModificada);

//8)

let edades = [{edad : 18}, {edad: 19}, {edad: 25}, {edad: 17}]

function mayores_edad(array){
    return array.filter(objeto => objeto.edad >= 18);
};

let mayorEdad = mayores_edad(edades);
console.log(mayorEdad);

//9)

let peoples = [
    {nombre: "Luis", edad: 33, hobbies: ["Videojuegos", "Musica", "Cine"]},
    {nombre: "Juanito", edad: 30}, 
    {nombre: "Pedro", edad: 20, hobbies: ["Deportes", "Leer"]}
];
console.log(peoples);

for(let i in peoples){
    for(let j in peoples[i]){
        console.log(peoples[i][j]);
    };
};

//10)

peoples.push({nombre: "Maria", edad: 25});
console.log(peoples);

//11)

peoples = peoples.map(peoples => {
    if (peoples.nombre === "Pedro"){
        let { hobbies, ...resto} = peoples;
        return resto;
    }
    return peoples;
});
console.log(peoples);

//12)

peoples = peoples.map(peoples => {
    if (peoples.nombre === "Juanito"){
        return { ...peoples, hobbies: ["Disenar"]};
    }
    return peoples;
});

console.log(peoples);

//13)

class Inventario{
    constructor(){
        this.productos = []
    }
    agregarProducto(nombre, precio, cantidad){
        const producto = {nombre, precio, cantidad};
        this.productos.push(producto);
    }
    calcularValorTotal(){
        return this.productos.reduce((total, producto) => {
            return total + (producto.precio * producto.cantidad);
        }, 0);
    }
    listarProductos(){
        this.productos.forEach(producto => {
            console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`);
        });
    }
};

let miInventario = new Inventario();
miInventario.agregarProducto("Laptop", 1000, 5);
miInventario.agregarProducto("Telefono", 500, 10);
miInventario.agregarProducto("Tablet", 350, 7);
console.log(miInventario.productos);

miInventario.listarProductos();

const ValorTotal = miInventario.calcularValorTotal();
console.log(`Valor total del inventario: ${ValorTotal}`);