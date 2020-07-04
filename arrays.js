/*jshint esversion: 6 */

/*
Introduction to Programming
Arrays
*/

/* Excercise 1
4
5
0
3
101
*/

// Excercise 2
// let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];
//
// myArray.forEach( function (element) {
//   if (element % 2 === 0) {
//     console.log(element);
//   }
// });

// Excercise 3
// let myArray = [
//   [1, 3, 6, 11],
//   [4, 2, 4],
//   [9, 17, 16, 0],
// ];
//
//
// for (let i = 0; i < myArray.length; i++) {
//   myArray[i].forEach(function (element){
//     if (element % 2 === 0) {
//       console.log(element);
//     }
//   });
// }

// Excercise 4
// let myArray = [
//   1, 3, 6, 11,
//   4, 2, 4, 9,
//   17, 16, 0,
// ];
//
// let newArray = myArray.map(element => element % 2 === 0 ? "even" : "odd");
//
// console.log(newArray);

// Excercise 5
// let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];
// removeNonInteger(array);
//
// function removeNonInteger(array){
//   let newArray = array.filter(element => Number.isInteger(element));
//   console.log(newArray);
// }

// function removeNonInteger(array) {
//   return array.filter(Number.isInteger);
// }

// Excercise 6
/*
let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array) {
  return (array.map(element => element.length)).filter(element => element % 2 !== 0);
}

console.log(oddLengths(arr));
*/

// Excercise 7
/*
let numbers = [3, 5, 7];

function sumOfSquares(array) {
  return array.reduce((accumulator, element) => Math.pow(element, 2) + accumulator, 0);
}

console.log(sumOfSquares(numbers));
*/

// Excercise 8
/*let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];

function oddLengths(array){
  return array.reduce((accumulator, element) => {
    if (element.length % 2 === 1){
      accumulator.push(element.length);
    }
    return accumulator;
  },[]);
}

// let newArr = arr.reduce(
//   function(accumulator, element){
//     if (element.length % 2 === 1){
//       accumulator.push(element.length);
//   }
//   return accumulator;
// },
// []
// );

console.log(oddLengths(arr)); */

// Excercise 9
let numbers1 = [1, 3, 5, 7, 9, 11];
let numbers2 = [];
let numbers3 = [2, 4, 6, 8];

console.log(numbers1.includes(3));
numbers2.includes(3);
numbers3.includes(3);
