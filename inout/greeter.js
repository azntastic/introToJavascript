/*jshint esversion: 6 */

/*
Introduction to Programming
Input/Output
*/

let rlSync = require('readline-sync');

let askName = () => {
  let firstName = rlSync.question('What\'s your first name?\n');
  let lastName = rlSync.question('What\'s your last name?\n');
  return firstName + ' ' + lastName;
}

console.log(askName());
