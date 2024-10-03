// array de numeros
const numbers = [1, 2, 3, 4, 5];
// array de numeros 2
const number2: Array<number> = [1, 2, 3, 4, 5];

// array de strings
const strings: string[] = ['USD', 'EUR', 'COP'];

// array de booleanos
const booleans: boolean[] = [true, false, true];

// array de tuplas
const mixed: [string, number] =
[
    '2021-09-25',
    25
];

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
const index = numbers2.indexOf(3); //funcion indexOf devuelve el indice de un elemento
console.log(index); // 2

// encontrar el indice de un string
const index2 = number3.indexOf('three');
console.log('\n', index2); // -1

// extraer una parte del array
const sliced = numbers2.slice(1, 3); //funcion slice devuelve una parte del array
