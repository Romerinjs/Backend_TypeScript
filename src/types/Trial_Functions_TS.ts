/* eslint-disable no-plusplus */
// Taller

// point 1
console.log('Exercise 1');
const auxNumber: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// 1 agregar al array por medio de la función push el 10, 12, 15, 16 y 17
auxNumber.push(10);
auxNumber.push(12);
auxNumber.push(15);
auxNumber.push(16);
auxNumber.push(17);
console.log('point 1 push');
console.log(auxNumber, '\n');
// 2 eliminar el ultimo elemento del array con pop
const pop1 = auxNumber.pop();
console.log('point 2 pop');
console.log(pop1, '\n');
// 3 encontrar el indice del numero 1, 4 y 7 con indexOf
const indicao = auxNumber.indexOf(1);
const indicao2 = auxNumber.indexOf(4);
const indicao3 = auxNumber.indexOf(7);
console.log('point 3 indexOf');
console.log(indicao, indicao2, indicao3, '\n');
// 4 extraer la parte del array que va desde el indice 2 al 9 con slice
console.log('point 4 slice');
const slicedT = auxNumber.slice(2, 9);
console.log(slicedT, '\n');
// 5 verificar si todos los elementos son mayores que 1 por el metodo every (respuesta true o false)
const verify: boolean = auxNumber.every((num) => num > 1);
console.log('point 5 every');
console.log(verify, '\n');
// 6 verificar si algun elemento es mayor o igual que 7 por el metodo some (respuesta true o false)
const verifySome: boolean = auxNumber.some((num) => num > 7);
console.log('point 6 some');
console.log(verifySome, '\n');

//
console.log('Exercise 2');
// point 2
const auxString: string[] = ['1', '2', '3', '4', '5', '6', '7'];
// 1 agregar al array por medio de push el 10, 11, 12, 13, 14 tipo string
auxString.push('10');
auxString.push('11');
auxString.push('12');
auxString.push('13');
auxString.push('14');
console.log('point 1 push');
console.log(auxString, '\n');
// 2 encontrar el indice de un elemento el 10, 11 y 14 con indexOf
const index1 = auxString.indexOf('10');
const indexTwo = auxString.indexOf('11');
const index3 = auxString.indexOf('14');
console.log('point 2 indexOf');
console.log(index1, indexTwo, index3, '\n');
//
console.log('Exercise 3');
// point 3
const message: string = 'Welcome to ITP';
console.log(message);
// 1 dividir la cadena en un array de palabras donde el separador sea el espacio ' ' por split
console.log('point 1 split');
const splitMessage = message.split(' ');
console.log(splitMessage, '\n');
// 2 a la salida tomar el resultado y aplicar un join pero debe ser separado por comas ','
console.log('point 2 join ,');
const joinMessage = splitMessage.join(', ');
console.log(joinMessage, '\n');

//

// point 4
console.log('Exercise 4');
const nameList: string = 'michael, Anderson, Yadir, Kevin, Emerson';
console.log(nameList);
// 1 dividir la cadena en un array de palabras donde el separador sea las comas ',' por split
console.log('point 1 split ,');
const splitName = nameList.split(', ');
console.log(splitName, '\n');
// a este array aplicar el join pero debe ser separado por espacios ' '
console.log('point 2 join');
const joinName = splitName.join(' ');
console.log(joinName, '\n');

//

// point 5
console.log('Exercise 5');
const arrayProducts: any[] = [
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
// 1 vamos a filtrar en una constante donde price sea mayor que 900 por medio de filter y por medio de un for
const priceP = arrayProducts.filter((product) => product.price > 900);
const prodOv900 = []; // Array vacío para almacenar los productos filtrados

for (let i = 0; i < arrayProducts.length; i++) {
  if (arrayProducts[i].price > 900) {
    prodOv900.push(arrayProducts[i]); // Agregar producto al array si cumple la condición
  }
}

console.log('point 1 filter func');
console.log(priceP, '\n');
console.log('point 1 for');
console.log(prodOv900, '\n');

// 2 encontrar el primer objeto del array donde el priceDiscount sea mayor que 500 por medio del metodo find
const priceD = arrayProducts.find((product) => product.priceDiscount > 500);
console.log('point 2 find');
console.log(priceD, '\n');
// 3 encontrar el indice del primer elemento del array donde el price sea mayor que 1000 por medio del metodo findIndex
const indexP = arrayProducts.findIndex((product) => product.price > 1000);
console.log('point 3 findIndex');
console.log(indexP, '\n');
// 4 agregar un nuevo objeto de un producto de una tienda por medio de push
arrayProducts.push(
  {
    id: 3,
    name: 'Bonos Bread',
    price: 2300,
    priceDiscount: 300,
  },
);
console.log('point 4');
console.log(arrayProducts, '\n');

//

// point 6
console.log('Exercise 6');
const array1: number[] = [1, 2, 3, 4];
const array2: number[] = [6, 7, 8];
// 1 concatenar el array 1 con array 2 por medio de concat y por medio de push
const concat1: number[] = array1.concat(array2);
const concat2 = array1.push(...array2);

console.log('point 1 concat');
console.log(concat1, '\n');
console.log(concat2, '\n');
// 2 a la respuesta ordenar de mayor a menor por medio de sort
console.log('point 2 sort');
const sort1 = concat1.sort((a, b) => b - a);
console.log(sort1, '\n');
// 3 al concat1 ordenar de forma descendente por medio de reverse
console.log('point 3 reverse');
const reverse1 = concat1.reverse();
console.log(reverse1, '\n\n');
console.log('                      2024', '\n');
console.log('     @Romer Almeida - All rights reserved', '\n');
