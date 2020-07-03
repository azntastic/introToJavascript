/*jshint esversion: 6 */

/*
Introduction to Programming
The Basics
*/

// Excercise 1
let name = 'Ryan ' + 'Chu';
console.log(name);

// Excercise 2
let x = 4936;
let y = x.toString().length;
let arr = [];

for (i = 0; i < y; i++){
  z = x % 10;
  arr.push(z);
  x = (x - z)/10;
}

arr.reverse();

console.log(arr);

// Excercise 3
console.log(typeof 'true');
console.log(typeof false);
console.log(typeof 1.5);
console.log(typeof 2);
console.log(typeof undefined);
console.log(typeof { foo: 'bar' });

// Excercise 4
var foo; //statement
foo = 5; //expression
foo; //expression

// Excercise 5
// String Concatenation

// Excercise 6
console.log(Number('5') + 10);

// Excercise 7
console.log(`The value of 5 + 10 is ${Number('5') + 10}.`);

// Excercise 8
// No error, it is just undefined

// Excercise 13
console.log('12' < '9'); // Evaluates to true because 1 < 9 
