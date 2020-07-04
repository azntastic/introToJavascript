/*jshint esversion: 6 */

/*
Introduction to Programming
Flow Control
*/

// let a = prompt('Enter a number');
//
// if (a === '3') {
//   console.log("a is 3");
// } else if (a === '4') {
//   console.log("a is 4");
// } else {
//   console.log("a is neither 3, nor 4");
// }

/* Excercise 1
(1) False
(2) True
(3) 3
(4) 3
(5) false
(6) True
(7) False
(8) False
(9) False
(10) True
(11) False
(12) True
*/

// Excercise 2 & 3

let a = prompt('Enter an integer');

if (Number.isInteger(Number(a))) {
  evenOrOdd(Number(a));
} else {
  console.log("not an integer");
}


function evenOrOdd (value) {
  if (value % 2 === 0) {
    console.log('even');
  } else {
    console.log('odd');
  }
}

// Excercise 4
// logs all statements from case 113 b/c no break

// Excercise 5
if (foo()) {
  return 'bar';
} else {
  return qux();
}

// Excercise 6
// returns True

// Excercise 7
var allCaps = (string) => string.length > 10 ? string.toUpperCase() : string;

// Excercise 8
function numberRange(number) {
  if (number >= 0 && number <= 50){
    console.log(`${number} is between 0 and 50`);
  } else if (number > 50 && number <= 100){
    console.log(`${number} is between 51 and 100`);
  } else if (number > 100) {
    console.log(`${number} is greater than 100`);
  } else {
    console.log(`${number} is less than 0`);
  }
}
