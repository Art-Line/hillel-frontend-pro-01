/* There are two different numbers. 
Determine which one is bigger and which one is smaller. */


// const number1 = +prompt('enter first number');
// const number2 = +prompt('enter second number');

// if(number1 > number2) {
//     console.log(number1 + ' is bigger then ' + number2);
// } else if(number1 < number2) {
//     console.log(number2 + ' is bigger then ' + number1);
// } else {
//     console.log('Numbers are equal');
// }







/* Two distances are known. 
One is in kilometers, the other is in feet (1 foot = 0.305m). 
What distance is less? */


// const number3 = +prompt('enter distance (kilometers)');
// const number4 = +prompt('enter second distance (feet)');
// const FOOT = 0.305;
// const number5 = number4 * FOOT;

// if (number3 > number5) {
//     console.log(number4 + ' this number is less')
// } else if (number3 < number5) {
//     console.log(number3 + ' this number is less')
// } else {
//     console.log('Numbers are equal');
// }







/* Determine if number a is a divisor of number b ? 
And vice versa. (give two answers) */


// const number6 = +prompt('enter first number');
// const number7 = +prompt('enter second number');

// if(number6 % number7 === 0) {
//     console.log('the number ' + number7 + ' is a divisor of the number ' + number6);
// } else if(number7 % number6 === 0) {
//     console.log('the number ' + number6 + ' is a divisor of the number ' + number7);
// } else {
//     console.log('the number a is not a divisor of b and the number b is not a divisor of a')
// }







/* Given a number. 
Determine if it ends with an even number or an odd number? 
Output the last digit. */


// const number8 = prompt('enter number');

// if(number8 % 2 === 0) {
//     console.log('even');
// } else {
//     console.log('odd')
// }
// console.log(number8[number8.length - 1])







/* Given a two-digit number. 
Determine which of its digits is greater: the first or the second? */


// const number9 = +prompt('enter two-digit number');
// let secondDigit = number9 % 10;
// let firstDigit = (number9 - secondDigit) / 10;

// if (firstDigit > secondDigit) {
//     console.log(firstDigit + ' is bigger then ' + secondDigit);
// } else if(firstDigit < secondDigit) {
//     console.log(secondDigit + ' is bigger then ' + firstDigit);
// } else {
//     console.log('Numbers are equal');
// }