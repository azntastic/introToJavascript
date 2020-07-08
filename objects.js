/*jshint esversion: 6 */

/*
Introduction to Programming
Objects
*/

// Excercise 3
/*
let myArray = {
  1: 'Joe',
  2: 'Louis',
  3: 'Frazier',
  length: 3
};

for (let i = 1; i <= myArray.length; i += 1) {
  console.log(myArray[i]);
}
*/

// Excercise 4
/*
let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let newArr = Object.keys(obj);
for (let i = 0; i < newArr.length; i++){
  newArr[i] = newArr[i].toUpperCase();
}
console.log(newArr);
*/

// let objKeys = Object.keys(obj).map((key) => key.toUpperCase());

// Excercise 5
/*
let myProtoObj = {
  foo: 1,
  bar: 2,
};

let myObj = Object.create(myProtoObj);
console.log(myObj);
*/

// Excercise 7
let objToCopy = {
  foo: 1,
  bar: 2,
};

function copyObj(sourceObject, keys) {
  let destinationObject = {};

  if (keys) {
    keys.forEach(function(key) {
      destinationObject[key] = sourceObject[key];
    });

    return destinationObject;
  } else {
    return Object.assign(destinationObject, sourceObject);
  }
}
