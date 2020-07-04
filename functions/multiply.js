/*jshint esversion: 6 */

/*
Introduction to Programming
Functions
*/

let rlSync = require("readline-sync");

function multiply(a, b) {
  return a * b;
}

let x = rlSync.question('first number?:');
let y = rlSync.question('second number?:');

console.log(`${x} * ${y} = ${multiply(x, y)}`);
