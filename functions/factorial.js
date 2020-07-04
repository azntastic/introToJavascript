/*jshint esversion: 6 */

/*
Introduction to Programming
Functions
*/

times(5, times(4, times(3, times(2, times(1, 1)))));

function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}
