const myString = 'Hello, TypeScript!';
const myNumber = 2024;
const myBoolean = true;
const myNull = null;
const myUndefined = undefined;
console.log(myString, myNumber, myBoolean, myNull, myUndefined, '\n');
function calculateRectangleArea(base, height) {
    return base * height;
}
console.log('Area of rectangle:', calculateRectangleArea(5, 10), '\n');
class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }
    showInfo() {
        console.log(`Car make: ${this.make}, Model: ${this.model}`);
    }
}
const myCar = new Car('Toyota', 'Corolla');
myCar.showInfo();
class Rectangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }
    calculateArea() {
        return this.base * this.height;
    }
}
const rectangle = new Rectangle(5, 10);
console.log('Rectangle area via interface:', rectangle.calculateArea(), '\n');
const books2 = [
    { title: 'Book 1', author: 'Author A' },
    { title: 'Book 2', author: 'Author B' },
    { title: 'Book 3', author: 'Author A' },
];
const filteredBooks = books2.filter((book) => book.author === 'Author A');
console.log('Books by Author A:', filteredBooks, '\n');
class Library {
    constructor() {
        this.books = [];
    }
    addBook(book) {
        this.books.push(book);
    }
    findBooksByAuthor(author) {
        return this.books.filter((book) => book.author === author);
    }
}
const myLibrary = new Library();
myLibrary.addBook({ title: 'TypeScript for Beginners', author: 'John Doe', year: 2020 });
myLibrary.addBook({ title: 'TypeScript for normal People', author: 'John Doe', year: 2018 });
myLibrary.addBook({ title: 'Advanced TypeScript', author: 'Jane Smith', year: 2022 });
console.log('Books by John Doe:', myLibrary.findBooksByAuthor('John Doe'), '\n');
let sumEven = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        sumEven += i;
    }
}
console.log('Sum of even numbers from 1 to 100:', sumEven, '\n');
let countOdd = 0;
let j = 1;
while (j <= 30) {
    if (j % 2 !== 0) {
        countOdd++;
    }
    j++;
}
console.log('Count of odd numbers between 1 and 30:', countOdd, '\n');
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
//# sourceMappingURL=2Trial_TS_Functions.js.map