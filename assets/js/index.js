'use strict';

// // const base = Number(prompt("Enter base number:"));
// // const exp = Number(prompt("Enter exp number:"));
// // const powerResult = power(base, exp);
// // console.log(powerResult);

// // const number1 = Number(prompt("Enter number1:"));
// // const number2 = Number(prompt("Enter number2:"));

// // const maxNumber = maxValue(number1, number2);
// // const minNumber = minValue(number1, number2);

// // console.log(`Max number: ${maxNumber}`);
// // console.log(`Min number: ${minNumber}`);

// // function power(base, exp) {
// //     let result = base;
// //     for (let i = 1; i < exp; i++) {
// //         result *= base;
// //     }
// //     return result; 
// // }

// // function getMaxValue (number1, number2) {
// //     if (number1 > number2) {
// //         return number1
// //     } 
// //     return number2;
// // }

// // function getMinValue (number1, number2) {
// //     if (number1 < number2) {
// //         return number1
// //     } 
// //     return number2;
// // }

// // function isEven (number) {
// //     return number % 2 === 0;
// // }

// // const input = Number(prompt("Enter a number:"));
// // const isEvenResult = isEven(input);
// // console.log(isEvenResult);

// const cat = {
//     amountOfEyes: 2,
//     color: 'black',
//     isMale: false,
//     name: 'kitten',
//     head: {
//         eyeColor: 'grey',
//     },
//     hungryCat() {
//         return 'Give me eat';
//     }
// };
// console.log(cat.hungryCat());

// const table = {
//     color: 'black',
//     matetial: 'plastic',
//     amountOfLegs: 4,
//     price: 25,
//     isCheap() {
//         return table.price < 3000;
//     }
// };
// console.log(table.matetial);
// console.log(table.isCheap());

// function Cat(color, weight, name) {
//     this.color = color;
//     this.weight = weight;
//     this.name = name;
//     this.greetings = function() {
//         return `My name is ${this.name}`;
//     }
// };

// const cat1 = new Cat('black', 2000, 'Markiz');
// const cat2 = new Cat('white', 2450, 'Vasya');
// const cat3 = new Cat('grey', 4450, 'Murka');

// console.log(cat1);
// console.log(cat1.greetings());

// console.log(cat2);
// console.log(cat2.greetings());

// console.log(cat3);
// console.log(cat3.greetings());

// function Country(name, population, area) {
//     this.name = name;
//     this.population = population;
//     this.area = area;
//     this.getDensity = function () {
//         return this.population / this.area;
//     }
// }

// const country1 = new Country('Ukraine', 400, 20);
// console.log(country1);
// console.log(country1.getDensity());
// country1.population = 600;
// console.log(country1.getDensity());

// const country2 = new Country('Denmark', 80, 10);
// console.log(country2);
// console.log(country2.getDensity());
// country2.population = 100;
// country2.area = 11;
// console.log(country2.getDensity());

function Car(color, model, amountOfDoors) {
    this.color = color;
    this.model = model;
    this.amountOfDoors = amountOfDoors;
    this.velocity = 120;
    this.isGoing = function () {
        return this.velocity > 0;
    }
};

const car1 = new Car('red', 'Ford', '4');
console.log(car1);
console.log(car1.isGoing());
car1.velocity = 0;
console.log(car1.isGoing());

const car2 = new Car('black', 'Lada Samara', '4');
console.log(car2);
console.log(car2.isGoing());
car2.velocity = 0;
console.log(car2.isGoing());