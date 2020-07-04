/*jshint esversion: 6 */

/*
Introduction to Programming
Loops & Iterating
*/

function factorial(integer) {
  if (integer < 2) {
    return 1;
  }
  return integer * factorial(integer - 1);
}
