let username = 'John Doe';
username = 'brayan';
console.log(username, 'es un visajoso');
const products = [1, 2, 3, 4, 5];
const store = [1, 2, 3, 4, 5];
const coiny = ['USD', 'EUR', 'COP'];
const coins = ['USD', 'EUR', 'COP'];
const pOne = ['any', 1, true, { id: 1, name: 'John Doe' }];
const coin = [
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
];
coin.push({
    id: 4,
    name: 'euro'
});
let books = [
    {
        id: 1,
        title: 'El principito',
    }
];
books = [1, 2, 3, 4, 5];
let dateOne = ['2021-09-25', 25];
let dateTwo;
dateTwo = ['2021-09-25', 25];
let dateThree;
dateThree = ['2021-09-25', 25, true];
var Colors;
(function (Colors) {
    Colors[Colors["Red"] = 0] = "Red";
    Colors[Colors["Green"] = 1] = "Green";
    Colors[Colors["Blue"] = 2] = "Blue";
})(Colors || (Colors = {}));
let c = Colors.Green;
console.log(c, ' num 3');
console.log(Colors[2]);
var Dia;
(function (Dia) {
    Dia[Dia["id"] = 1] = "id";
    Dia[Dia["type"] = 3] = "type";
    Dia[Dia["name"] = 4] = "name";
    Dia[Dia["product"] = 5] = "product";
})(Dia || (Dia = {}));
let dia = Dia.product;
console.log(Dia[dia], ' da');
console.log(Dia[1], 'dia');
function sumar() {
    const aux = [1, 2, 3, 4, 5];
    let sum = 0;
    for (let i = 0; i < aux.length; i++) {
        sum += aux[i];
    }
    console.log('\n', sum, ' resultado');
}
function llegada() {
    const name = true;
    return name;
}
sumar();
console.log(`Haz llegado ${llegada()}`);
let car = {
    make: 'Toyota',
    model: 'Camry',
    year: 2020
};
let animals = {
    name: 'dog',
    age: 2,
    status: false
};
let nothing1 = null;
let nothing = null;
nothing = 'Hi there';
let notDefined = undefined;
let value = false;
value = '1';
//# sourceMappingURL=class_25_09.js.map