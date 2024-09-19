// Ejemplos de tipos de variables en TypeScript

//1 ejemplo de variable de tipo string
let dog: string = ''; //ejemplo de variable de tipo string
dog = 'rex'; //asignando un valor a la variable dog

//2 ejemplos de variables de tipo number
let countStudents: number = 10; //ejemplo de variable de tipo number
countStudents = 2; //   asignando un valor a la variable countStudents

//3 ejemplos de variables de tipo boolean 
let actions: boolean = false; // ejemplo de variable de tipo boolean
actions = true; //asignando un valor a la variable actions

//4 ejemplo de variable de tipo any
let data: any = 'Could be any type of data';    // Puede ser cualquier tipo de dato, por ejemplo: string, number, boolean, etc.

const actionsOne: number = 0;
// actionsOne = 1;    // Error: No se puede reasignar una constante porque es inmutable.  

let actionsTwo: any;
actionsTwo = 'Hello World';
actionsTwo = 0;
actionsTwo = true;
//crear cada tipo de variable imprimiendo en consola
//tipo string
let playerName: string = 'Messi';
console.log(playerName, 'es un jugador de futbol');

//tipo number
let age: number = 33;
console.log('La edad de', playerName, 'es', age, 'años');


//tipo boolean
let isPlaying: boolean = true;
console.log(playerName, 'esta jugando:', isPlaying, 'porque aun es joven');

//tipo any
let dataOne: any  = 'Hola Marte';
console.log(dataOne);
dataOne = 0;

/* tipo object
let player: { name: string; age: number; isPlaying: boolean } = {
    name: 'Messi',
    age: 33,
    isPlaying: true
};
console.log(player.name, ', ', player.age, 'años, esta jugando:', player.isPlaying);*/