console.log('Exercise 1');
const auxNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
auxNumber.push(10, 12, 15, 16, 17);
console.log('point 1 push');
console.log(auxNumber, '\n');
auxNumber.pop();
console.log('point 2 pop');
console.log(auxNumber, '\n');
const indicao = auxNumber.indexOf(1);
const indicao2 = auxNumber.indexOf(4);
const indicao3 = auxNumber.indexOf(7);
console.log('point 3 indexOf');
console.log(indicao, indicao2, indicao3, '\n');
console.log('point 4 slice');
const slicedT = auxNumber.slice(2, 9);
console.log(slicedT, '\n');
const verify = auxNumber.every((num) => num > 1);
console.log('point 5 every');
console.log(verify, '\n');
const verifySome = auxNumber.some((num) => num > 7);
console.log('point 6 some');
console.log(verifySome, '\n');
console.log('Exercise 2');
const auxString = ['1', '2', '3', '4', '5', '6', '7'];
auxString.push('10', '11', '12', '13', '14');
console.log('point 1 push');
console.log(auxString, '\n');
const index1 = auxString.indexOf('10');
const indexTwo = auxString.indexOf('11');
const index3 = auxString.indexOf('14');
console.log('point 2 indexOf');
console.log(index1, indexTwo, index3, '\n');
console.log('Exercise 3');
const message = 'Welcome to ITP';
console.log(message);
console.log('point 1 split');
const splitMessage = message.split(' ');
console.log(splitMessage, '\n');
console.log('point 2 join ,');
const joinMessage = splitMessage.join(', ');
console.log(joinMessage, '\n');
console.log('Exercise 4');
const nameList = 'michael, Anderson, Yadir, Kevin, Emerson';
console.log(nameList);
console.log('point 1 split ,');
const splitName = nameList.split(', ');
console.log(splitName, '\n');
console.log('point 2 join');
const joinName = splitName.join(' ');
console.log(joinName, '\n');
console.log('Exercise 5');
const arrayProducts = [
    {
        id: 1,
        name: 'arroz',
        price: 1000,
        priceDiscount: 700,
    },
    {
        id: 2,
        name: 'atun',
        price: 2500,
        priceDiscount: 1500,
    },
];
console.log(arrayProducts, '\n');
const priceP = arrayProducts.filter((product) => product.price > 900);
for (let i = 0; i < arrayProducts.length; i++) {
    if (arrayProducts[i].price > 900) {
        console.log(arrayProducts[i], 'cicle for', '\n');
    }
}
console.log('point 1 filter func');
console.log(priceP, '\n');
const priceD = arrayProducts.find((product) => product.priceDiscount > 500);
console.log('point 2 find');
console.log(priceD, '\n');
const indexP = arrayProducts.findIndex((product) => product.price > 1000);
console.log('point 3 findIndex');
console.log(indexP, '\n');
arrayProducts.push({
    id: 3,
    name: 'Bonos Bread',
    price: 2300,
    priceDiscount: 300,
});
console.log('point 4');
console.log(arrayProducts, '\n');
console.log('Exercise 6');
const array1 = [1, 2, 3, 4];
const array2 = [6, 7, 8];
const concat1 = array1.concat(array2);
const concat2 = array1.push(...array2);
console.log('point 1 concat');
console.log(concat1, '\n');
console.log(concat2, '\n');
console.log('point 2 sort');
const sort1 = concat1.sort((a, b) => b - a);
console.log(sort1, '\n');
console.log('point 3 reverse');
const reverse1 = concat1.reverse();
console.log(reverse1, '\n\n');
console.log('                      2024', '\n');
console.log('     @Romer Almeida - All rights reserved', '\n');
//# sourceMappingURL=Trial_Functions_TS.js.map