'use strict';

// const base = Number(prompt("Enter base number:"));
// const exp = Number(prompt("Enter exp number:"));
// const powerResult = power(base, exp);
// console.log(powerResult);

// const number1 = Number(prompt("Enter number1:"));
// const number2 = Number(prompt("Enter number2:"));

// const maxNumber = maxValue(number1, number2);
// const minNumber = minValue(number1, number2);

// console.log(`Max number: ${maxNumber}`);
// console.log(`Min number: ${minNumber}`);

// function power(base, exp) {
//     let result = base;
//     for (let i = 1; i < exp; i++) {
//         result *= base;
//     }
//     return result; 
// }

// function getMaxValue (number1, number2) {
//     if (number1 > number2) {
//         return number1
//     } 
//     return number2;
// }

// function getMinValue (number1, number2) {
//     if (number1 < number2) {
//         return number1
//     } 
//     return number2;
// }

function isEven (number) {
    return number % 2 === 0;
}

const input = Number(prompt("Enter a number:"));
const isEvenResult = isEven(input);
console.log(isEvenResult);