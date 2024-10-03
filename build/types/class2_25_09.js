const numbers = [1, 2, 3, 4, 5];
const number2 = [1, 2, 3, 4, 5];
let suma = 0;
for (let i = 0; i < number2.length; i++) {
    suma += number2[i];
}
const strings = ['USD', 'EUR', 'COP'];
const booleans = [true, false, true];
const mixed = ['2021-09-25', 25];
const colors = ['red', 'green', 'blue'];
console.log(colors[0]);
console.log('\n', colors[1]);
const numbers2 = [1, 2, 3, 4, 5];
const number3 = ['one', 'two', 'three', 'four', 'five'];
numbers2.push(6);
numbers2[number2.length + 1] = 7;
numbers2.pop();
const index = numbers2.indexOf(3);
console.log(index);
const index2 = number3.indexOf('three');
console.log('\n', index2);
const sliced = numbers2.slice(1, 3);
const square = numbers2.map((num) => num % 2 === 0);
const evenNumber = numbers2.filter((num) => num % 2 === 0);
const sum = numbers2.reduce((acumulador) => acumulador[0] + acumulador);
const coinsArray = [
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
const filteredCoins = coinsArray.filter((coin) => coin.code === 'USD');
console.log(filteredCoins);
const sentence = 'Hello world Typescript is great';
const words = sentence.split(' ');
console.log(words);
const joinedSentence = words.join(' ');
console.log(joinedSentence);
const numberArray = [1, 2, 3, 4, 5];
const joinedNumber = numberArray.join('$');
console.log(joinedNumber);
const foundIndex = numberArray.findIndex((num) => num > 25);
console.log(foundIndex);
const allPositive = numberArray.every((num) => num > 0);
console.log(allPositive);
const someGreaterThan40 = numberArray.some((num) => num > 40);
console.log(someGreaterThan40);
const numbers3 = [1, 2, 3];
const numbers4 = [4, 5, 6];
const concatNumbers = numbers3.concat(numbers4);
const concatNumbersPush = numbers3.push(...numbers4);
console.log(concatNumbers);
console.log(concatNumbersPush);
const sortedNumbers = numbers3.sort((a, b) => a - b);
console.log(sortedNumbers);
const names = ['John', 'Doe', 'Alice', 'Bob'];
const sortedNames = names.sort();
console.log(sortedNames);
const reversedNumbers = numbers3.reverse();
console.log(reversedNumbers);
const auxNumbersArrays = [1, 2, 3, 4, 5, 6];
const aut = [];
for (let i = 0; i < auxNumbersArrays.length; i++) {
    if (!(aut.includes(auxNumbersArrays[i]))) {
        aut.push(auxNumbersArrays[i]);
    }
}
console.log(aut, 'aut');
//# sourceMappingURL=class2_25_09.js.map