/* eslint-disable @typescript-eslint/no-inferrable-types */
// array de numeros
const numbers = [1, 2, 3, 4, 5];

// array de numeros 2
const number2: Array<number> = [1, 2, 3, 4, 5];
// Aqui está escrito el siguiente ejercicio para uso de auxiliar pero con el += que es iterar sin redundancia, es la linea más larga para diferenciarlo
let suma: number = 0;

// Ciclo para sumar los elementos del array con el auxiliar

// eslint-disable-next-line no-plusplus
for (let i = 0; i < number2.length; i++) {
  suma += number2[i];
}

// array de strings
const strings: string[] = ['USD', 'EUR', 'COP'];

// array de booleanos
const booleans: boolean[] = [true, false, true];

// array de tuplas
const mixed: [string, number] = ['2021-09-25', 25];

// acceso a elementos
const colors: string[] = ['red', 'green', 'blue'];
console.log(colors[0]); // red
console.log('\n', colors[1]); // green

// Manipulacion de arrays
const numbers2: number[] = [1, 2, 3, 4, 5];
const number3: string[] = ['one', 'two', 'three', 'four', 'five'];

// añadir al elemento
numbers2.push(6);

// para añadir un elemento sin el push
numbers2[number2.length + 1] = 7;

// eliminar elementos
numbers2.pop();

// encontrar el indice de un elemento
const index = numbers2.indexOf(3); // funcion indexOf devuelve el indice de un elemento
console.log(index); // 2

// encontrar el indice de un string
const index2 = number3.indexOf('three');
console.log('\n', index2); // -1

// extraer una parte del array
const sliced = numbers2.slice(1, 3); // funcion slice devuelve una parte del array

// Usar map para transformar un array o elementos
const square = numbers2.map((num) => num % 2 === 0);

// Usar filter para filtrar elementos de un array
const evenNumber = numbers2.filter((num) => num % 2 === 0); // [2, 4, 6]

const sum = numbers2.reduce((acumulador) => acumulador[0] + acumulador); // 21

// Continuacion de la clase anterior
// Nuevos usos de funciones

// Array de monedas
const coinsArray: any [] = [
  {
    id: 1,
    name: 'pesos',
    code: '$',
  },
  {
    id: 2,
    name: 'dolar',
    code: 'USD',
  },
  {
    id: 3,
    name: 'euro',
    code: 'EUR',
  },
  {
    id: 4,
    name: 'dolar',
    code: 'USD',
  },

];
// Filtrar monedas
const filteredCoins = coinsArray.filter((coin) => coin.code === 'USD');
console.log(filteredCoins);

// cadena de texto separado por espacios
const sentence: string = 'Hello world Typescript is great';
const words: string[] = sentence.split(' '); // funcion split separa una cadena de texto en un array
console.log(words);

// Join, es lo contrario de split
const joinedSentence: string = words.join(' '); // funcion join une un array en una cadena de texto, tome todos los elementos y construye una cadena de texto donde el separador sea un espacio
console.log(joinedSentence);

const numberArray: number[] = [1, 2, 3, 4, 5];
const joinedNumber: string = numberArray.join('$'); // 1 2 3 4 5
console.log(joinedNumber);

// Encontrar el indice del primer numero mayor que 25
const foundIndex = numberArray.findIndex((num) => num > 25);
console.log(foundIndex); // 2

// Verificar si todos los numeros son mayores que 0
const allPositive: boolean = numberArray.every((num) => num > 0);
console.log(allPositive); // true

// Verificar si algun numero es mayor que 40
const someGreaterThan40: boolean = numberArray.some((num) => num > 40);
console.log(someGreaterThan40); // false

// concatenar arrays
const numbers3: number[] = [1, 2, 3];
const numbers4: number[] = [4, 5, 6];
const concatNumbers: number[] = numbers3.concat(numbers4); // funcion concat concatena dos arrays, forma principal
const concatNumbersPush = numbers3.push(...numbers4);
// los tres puntos son para desestructurar el array, es decir, que tome cada uno de los elementos y los añada al array, de lo contrario añadiria un array dentro de otro array
console.log(concatNumbers); // [1, 2, 3, 4, 5, 6]
console.log(concatNumbersPush); // 6

// metodo sort
const sortedNumbers: number[] = numbers3.sort((a, b) => a - b); // funcion sort ordena los elementos de un array, calcule la resta de a - b, si el resultado es negativo, a va antes que b, si es positivo, b va antes que a
console.log(sortedNumbers); // [1, 2, 3, 4, 5, 6]

// ordenar el array de palabras en orden alfabetico
const names: string[] = ['John', 'Doe', 'Alice', 'Bob'];
const sortedNames: string[] = names.sort();
console.log(sortedNames); // ['Alice', 'Bob', 'Doe', 'John']

const reversedNumbers: number[] = numbers3.reverse(); // funcion reverse invierte el orden de los elementos de un array
console.log(reversedNumbers); // [6, 5, 4, 3, 2, 1]

// Uso de includes para verificar la existencia de  un elemento
const auxNumbersArrays: number[] = [1, 2, 3, 4, 5, 6];
const aut: any = [];
// eslint-disable-next-line no-plusplus
for (let i = 0; i < auxNumbersArrays.length; i++) {
  if (!(aut.includes(auxNumbersArrays[i]))) {
    aut.push(auxNumbersArrays[i]);
  }
}
console.log(aut, 'aut');
