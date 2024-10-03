let username: string = 'John Doe';
username = 'brayan';
console.log(username, 'es un visajoso');

// array
const products: Array<number> = [1, 2, 3, 4, 5];

const store: number[] = [1, 2, 3, 4, 5];

const coiny: Array<string> = ['USD', 'EUR', 'COP']; // Array de strings, forma 1.

const coins: string[] = ['USD', 'EUR', 'COP']; // Array de strings, forma 2, se diferencia por el tipo de dato.

const pOne: any[] = ['any', 1, true, {id: 1, name: 'John Doe'}];

const coin: any[] = [ // Array de objetos con diferentes tipos de datos.
    {
        "id": 1,
        "name": "pesos"
    },
    {
        "id": 2,
        "name": "euro"
    },

    {
        "id": 3,
        "name": "dolar"
    }
    // Es un array de objetos
];
coin.push({ // Agregar un nuevo objeto al array
    id: 4,
    name: 'euro'
});

let books: any[] = [
    {
        id: 1,
        title: 'El principito',
    }
];

books = [1, 2, 3, 4, 5]; // Se puede reasignar el array con otro tipo de dato.

// Tuplas

let dateOne: [string, number] = ['2021-09-25', 25]; // Tupla con dos tipos de datos.
// o
let dateTwo: [string, number]; // tambien se define por orden de los tipos de datos.
dateTwo = ['2021-09-25', 25];

let dateThree: [string, number, boolean]; // tambien se define por orden de los tipos de datos.
dateThree = ['2021-09-25', 25, true];

// Enum

enum Colors {
    Red,
    Green,
    Blue
}

let c: Colors = Colors.Green;
console.log(c, ' num 3'); // 1
console.log(Colors[2]); // Blue

enum Dia {
    id = 1,
    type = 3,
    name = 4,
    product
}
let dia: Dia = Dia.product; // 'Martes' tendrá el valor de 2
console.log(Dia[dia], ' da'); // 2
console.log(Dia[1], 'dia'); // id

// void

function sumar(): void {
    const aux = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < aux.length; i++) {
        sum += aux[i];
    }
    console.log('\n', sum, ' resultado');
}

function llegada(): boolean {
    const name: boolean = true;
    return name;

}
sumar();
console.log(`Haz llegado ${llegada() }`);
// console.log('Haz llegado', llegada()); // Otra forma de imprimir el mensaje.
// object

let car: {make: string, model: string, year: number} = {
make: 'Toyota',
model: 'Camry',
year: 2020
};

let animals : {name: string, age: number, status: boolean} = {
name: 'dog',
age: 2,
status: false
};

// null & undefined
let nothing1: null = null;
let nothing: any = null;
nothing = 'Hi there';
let notDefined: undefined = undefined;

// union
let value: number | string | boolean = false;
value = '1';