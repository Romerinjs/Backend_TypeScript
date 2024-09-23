//  Ejemplos de tipos de variables en TypeScript

// 1 ejemplo de variable de tipo string
const dog = 'rex'; // ejemplo de variable de tipo string
console.log(dog, 'is a big Dog.'); // asignando un valor a la variable dog

//  2 ejemplos de variables de tipo number
const countStudents = 10; //  ejemplo de variable de tipo number
console.log(countStudents, ' is the students nuber'); //   asignando un valor a la variable countStudents

// 3 ejemplos de variables de tipo boolean
const actions = false; // ejemplo de variable de tipo boolean
console.log(actions); // asignando un valor a la variable actions

//  4 ejemplo de variable de tipo any
let data: any = 32; // Puede ser cualquier tipo de dato, por ejemplo: string, number, boolean, etc.
data = 'Hello World';
console.log(data); // asignando un valor a la variable data
const actionsOne = 0;
console.log(actionsOne, ' Couldnt assign an any other value because its a constant'); // actionsOne = 1;
// Error: No se puede reasignar una constante porque es inmutable.

let actionsTwo: any;
actionsTwo = 'Hello World';
actionsTwo = 0;
actionsTwo = true;
console.log(actionsTwo);
// crear cada tipo de variable imprimiendo en consola
// tipo string
const playerName = 'Messi';
console.log(playerName, 'es un jugador de futbol');

//  tipo number
const age = 33;
console.log('La edad de', playerName, 'es', age, 'años');

//  tipo boolean
const isPlaying = true;
console.log(playerName, 'esta jugando:', isPlaying, 'porque aun es joven');

//  tipo any
let dataOne: any = 'Hola Marte';
console.log(dataOne);
dataOne = 0;

/* tipo object
let player: { name: string; age: number; isPlaying: boolean } = {
    name: 'Messi',
    age: 33,
    isPlaying: true
};
console.log(player.name, ', ', player.age, 'años, esta jugando:', player.isPlaying); */
