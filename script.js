//Bienvenida a Javascript básico parte II, donde veremos condicionales y bucles.

//En el archivo index.html que tienes abierto en el navegador (preferiblemente chrome o firefox) vamos a trabajar con la consola, abre tu inspector y en la pestaña de consola, mira si puedes ver el mensaje escrito abajo.

console.log('Hola soy tu consola y juntas vamos a aprender Javascript')

//Si has encontrado el mensaje puedes continuar con los ejercicios

//CONDICIONALES

//Ejercicio 1: Escribe un condicional if/else que imprima en la consola 'Eres mayor de edad' cuando la constante age tenga el valor correspondiente, si no es así, debe imprimir 'No eres aún mayor de edad'

const age = 18
//Escribe tu código aquí
if (age >= 18) {
    console.log('Eres mayor de edad')
}
else {
    console.log('No eres aún mayor de edad')
}
//Ejercicio 2: Cambia el valor de age a 12 para mirar el resultado del ejercicio anterior.
const age1 = 12;
if (age >= 18) {
    console.log('Eres mayor de edad')
}
else {
    console.log('No eres aún mayor de edad')
}


//Ejercicio 3: Escribe un condicional if/else que lea la constante pet y si es un perro, que imprima en la consola "Tengo un perro", si es un gato, que imprima en la consola "Tengo un gato", si es un pájaro, que imprima en la consola "Tengo un pájaro" y si no es ninguno de los 3 que imprima "No tengo una mascota convencional"

const pet = "perro";
//Escribe tu código aquí
if (pet == 'perro') {
    console.log('Tengo un perro');
}
else if (pet == 'gato') {
    console.log('Tengo un gato');
}
else if (pet == 'pájaro') {
    console.log('Tengo un pájaro');
}
else {
    console.log('No tengo una mascota convencional');
}

//Ejercicio 4: cambia el valor de pet a "serpiente" y mira el resultado en consola para comprobar que tu código funciona bien.
if (pet == 'perro') {
    console.log('Tengo un perro');
}
else if (pet == 'gato') {
    console.log('Tengo un gato');
}
else if (pet == 'pájaro') {
    console.log('Tengo un pájaro');
}
else {
    console.log('No tengo una mascota convencional');
}


//Ejercicio 5: Haz el mismo ejercicio 3, pero con el condicional switch.

//Escribe tu código aquí
switch (pet) {
    case 'perro':
        console.log('Tengo un perro');
        break;
    case 'gato':
        console.log('Tengo un gato');
        break;
    case 'pájaro':
        console.log('Tengo un pájaro');
        break;
    default:
        console.log('No tengo una mascota convencional');
}


//Ejercicio 6: Usando un operador ternario, escribe un programa que lea la constante weather e imprima en consola si es soleado "Me vestiré con un vestido" y si no es así que imprima "Me vestiré con pantalón"

const weather = "soleado"

//Escribe tu código aquí;
const resultado = weather == "soleado" ? "Me vestire con un vestido" : "Me vestire con pantalon";


//Ejercicio 7: cambia el valor de weather a "frío" y mira el resultado en consola para comprobar que tu código funciona bien.
const result1 = "frio"

const result = weather == "soleado" ? "Me vestiré con un vestido" : "Me vestiré con pantalón";
//Ejercicio 8: Escribe un programa que al darle la constante 'value' imprima en consola "Es un número" cuando el valor sea de tipo number, "Es un string" cuando el valor sea de tipo string o si no es ni uno ni otro que imprima "No es ni número ni string". Puedes hacerlo con cualquier tipo de condicional.

const value = '1'

//Escribe tu código aquí
let tipoDato = typeof value;
switch (tipoDato) {
    case 'number':
        console.log('Es un número');
        break;
    case 'string':
        console.log('Es un string');
        break;
    default:
        console.log('No es ni número ni string');
}



//BUCLES

//Ejercicio 9: Imprime en consola una lista del 0 al 10 con el bucle for

//Escribe tu código aquí
for (let numero = 0; numero < 11; numero++) {
    console.log(numero);
}



//Ejercicio 10: Con un bucle for in imprime en pantalla todos los nombres, apellidos y su aporte a la sociedad de las programadoras de la historia contenidas en el array llamado 'programmers', Deberás imprimir el índice y la información de cada una de ellas de la siguiente manera: '0: Ada Lovelace, su aporte fue la máquina analítica'. 

const programmers = [
    {
        name: 'Ada',
        lastname: 'Lovelace',
        knowledge: 'la máquina analítica'
    },
    {
        name: 'Margaret',
        lastname: 'Hamilton',
        knowledge: 'el programa espacial Apolo'
    },
    {
        name: 'Grace',
        lastname: 'Hopper',
        knowledge: 'el lenguaje Cobol'
    },
    {
        name: 'Hedy',
        lastname: 'Lamarr',
        knowledge: 'el wifi'
    }
]

//Escribe tu código aquí
for (const objeto in programmers) {
    console.log(objeto + ': ' + programmers[objeto].name + ' ' + programmers[objeto].lastname + ', su aporte fue ' + programmers[objeto].knowledge);
}

//Ejercicio 11: Con un bucle for of imprime en consola "Hola, mi nombre es ... " y reemplaza los tres puntos con cada nombre del array dado.

const names = ['Rocío', 'Lola', 'Antía', 'Laura', 'Noelia']

//Escribe tu código aquí
for (const name of names) {
    console.log('Hola, mi nombre es ' + name);
}

//Ejercicio 12: Con un bucle while imprime en consola una lista del 1 al 5.

//Escribe tu código aquí

let x = 0;
while (x < 5) {
    x++;
    console.log(x)
}

//Ejercicio 13: Realiza el mismo ejercicio anterior pero con un bucle do while.

//Escribe tu código aquí
let y = 0;
do {
    y++;
    console.log(y);
} while (y < 5);



//Ejercicio 14: Saludo Personalizado
//Crea una función llamada saludar que tome un parámetro llamado nombre y devuelva un saludo personalizado. Luego, llama a la función con diferentes nombres y muestra el resultado en la consola.

//Escribe tu código aquí
function llamar(name) {
    console.log('hola ' + name)
}

llamar('Alex');
llamar('Juan');
llamar('Liza');



//Ejercicio 15: Calcular el Área de un Rectángulo
//Crea una función llamada calcularAreaRectangulo que tome dos parámetros (ancho y alto) y devuelva el área del rectángulo. Luego, llama a la función con diferentes valores de ancho y alto y muestra el resultado en la consola.

//Escribe tu código aquí
function calcularAreaRectangulo(ancho, alto) {
    console.log(ancho * alto)
}
calcularAreaRectangulo(3, 6);

