// 1. Declara variables utilizando todos los tipos primitivos mencionados
const myString: string = 'Hello, TypeScript!';
const myNumber: number = 2024;
const myBoolean: boolean = true;
const myNull: null = null;
const myUndefined: undefined = undefined;

console.log(myString, myNumber, myBoolean, myNull, myUndefined, '\n');

// 2. Crea una función que calcule el área de un rectángulo
function calculateRectangleArea(base: number, height: number): number {
  return base * height;
}
console.log('Area of rectangle:', calculateRectangleArea(5, 10), '\n');

// 3. Crea una clase Car con propiedades y un método
class Car {
  make: string;

  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }

  showInfo(): void {
    console.log(`Car make: ${this.make}, Model: ${this.model}`);
  }
}

const myCar = new Car('Toyota', 'Corolla');
myCar.showInfo();

// 4. Define una interfaz Shape y una clase Rectangle que implemente esta interfaz
interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  base: number;

  height: number;

  constructor(base: number, height: number) {
    this.base = base;
    this.height = height;
  }

  calculateArea(): number {
    return this.base * this.height;
  }
}

const rectangle = new Rectangle(5, 10);
console.log('Rectangle area via interface:', rectangle.calculateArea(), '\n');

// 5. Crea un arreglo de libros y usa filter para obtener libros de un autor específico
const books2 = [
  { title: 'Book 1', author: 'Author A' },
  { title: 'Book 2', author: 'Author B' },
  { title: 'Book 3', author: 'Author A' },
];

const filteredBooks = books2.filter((book) => book.author === 'Author A');
console.log('Books by Author A:', filteredBooks, '\n');

// 6. Programa completo que utiliza conceptos anteriores

// Interfaz Book
interface Book {
  title: string;
  author: string;
  year: number;
}

// Clase Library con métodos para agregar y buscar libros por autor
class Library {
  private books: Book[] = [];

  addBook(book: Book): void {
    this.books.push(book);
  }

  findBooksByAuthor(author: string): Book[] {
    return this.books.filter((book) => book.author === author);
  }
}

const myLibrary = new Library();
myLibrary.addBook({ title: 'TypeScript for Beginners', author: 'John Doe', year: 2020 });
myLibrary.addBook({ title: 'TypeScript for normal People', author: 'John Doe', year: 2018 });

myLibrary.addBook({ title: 'Advanced TypeScript', author: 'Jane Smith', year: 2022 });

console.log('Books by John Doe:', myLibrary.findBooksByAuthor('John Doe'), '\n');

// 8. Uso de ciclos
// 1. Suma de números pares del 1 al 100
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    sumEven += i;
  }
}
console.log('Sum of even numbers from 1 to 100:', sumEven, '\n');

// 2. Contar números impares con while entre 1 y 30
let countOdd = 0;
let j = 1;
while (j <= 30) {
  if (j % 2 !== 0) {
    countOdd++;
  }
  j++;
}
console.log('Count of odd numbers between 1 and 30:', countOdd, '\n');

// 3. Imprimir números primos con for y if

console.log('Prime numbers between 1 and 50:');

for (let num = 2; num <= 50; num++) {
  let isPrime = true;

  for (let k = 2; k < num; k++) {
    if (num % k === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(num);
  }
}
