// for (let i = 10; i >= 0; i--) {
//   if (i === 0) {
//     console.log('launch');
//   } else {
//     console.log(i);
//   }
// }

// let greeting = 'Aloha!';
//
// for (let i = 0; i < 3; i++){
//   console.log(greeting);
// }

// for (let i = 1; i <= 100; i++){
//   process.stdout.write(`${i * 2}`);
// }

// let array = [1, 2, 3, 4];
// let index = 0;
//
// array.forEach(item => console.log(item));

// let cities = ['Istanbul', 'Los Angeles', 'Tokyo', null, 'Vienna', null, 'London', 'Beijing', null];
//
// for (let i = 0; i < cities.length; i++){
//   if (cities[i] === null){
//     continue;
//   }
//   console.log(cities[i]);
// }

// let i = 1;
//
// while (i < 40) {
//   console.log(i);
//   i += 2;
// }

// let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
//
// for (let i = 0; i < fish.length; i++){
//   if (fish[i] === 'Nemo'){
//     break;
//   }
//   console.log(fish[i]);
// }

// let randomNumber = Math.round(Math.random());
//
// randomNumber ? console.log('yes') : console.log('no');

// let foo = 'Captain Ruby'
//
// console.log(foo.replace('Ruby', 'Javascript'));
// console.log(foo);

// function greet(code){
//   switch(code){
//     case 'en':
//       console.log('Hi');
//       break;
//     case 'fr':
//       console.log('Bonjour');
//       break;
//     case 'pt':
//       console.log('Olá');
//   }
// }
//
// greet('en');
// greet('fr');
// greet('pt');

// function extractRegion(code){
//   return code.slice(3, 5);
// }
//
// console.log(extractRegion('en_US.UTF-8'));
// console.log(extractRegion('en_GB.UTF-8'));

// function myFunction() {
//   let a = 1;
//
//   if (true) {
//     console.log(a);
//     let a = 2;
//     console.log(a);
//   }
// }
//
// myFunction();
//
// function isBlank(string) {
//   return !string ? true : false;
// }
//
// isBlank('mars'); // false
// isBlank('  ');   // false
// isBlank('');     // true

// let foo = 'launch school tech & talk';
//
// function capitalize(string) {
//   let arr = string.split(' ');
//
//   for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
//   }
//
//   return arr.join(' ');
// }
//
// console.log(capitalize(foo));

// let passcode = ['11', 'jZ5', 'hQ3f*', '8!7g3', 'p3Fs'];
//
// console.log(passcode.join('-'));

// function catAge(number) {
//   switch (number) {
//     case 0:
//     case 1: return 15;
//     case 2: return 24;
//     default:
//       return ((number - 2) * 4) + 24;
//   }
// }
//
// console.log(catAge(1));

// removeLastChar = (string) => string.substring(0, string.length - 1);
//
// console.log(removeLastChar('ciao!'));

// const template = 'I VERB NOUN.';
//
// let sentence = (verb, noun) => template.replace('VERB', verb).replace('NOUN', noun);
//
// console.log(sentence('like', 'birds'));

// let initGame = () => ({level: 1, score: 0});
//
// let game = initGame();
//
// console.log('Level: ' + game.level);
// console.log('Score: ' + game.score);

// let jane = {
//   firstName: 'Jane',
//   lastName: 'Harrelson',
//   age: 32,
//   location: {
//     country: 'Denmark',
//     city: 'Aarhus'
//   },
//   occupation: 'engineer',
//   greet: function(name) {
//     console.log(`Hej, ${name}`);
//   }
// };
//
// jane.greet('Bobby');

// let vehicle = {
//   manufacturer: 'Tesla',
//   model: 'Model X',
//   year: 2015,
//   range: 295,
//   seats: 7
// };
//
// let arr = [];
//
// for (let prop in vehicle) {
//   arr.push(prop);
// }
//
// console.log(arr);

// let nestedArray = [['title', 'Duke'], ['name', 'Nukem'], ['age', 33]];
// let obj = {};
//
// for (let i = 0; i < nestedArray.length; i++) {
//   let prop = nestedArray[i][0]
//   obj[prop] = nestedArray[i][1];
// }
//
// console.log(obj);

function clone(obj) {
  return Object.assign({}, obj);
}

let person = {
  title: 'Duke',
  name: 'Nukem',
  age: 33
};

let clonedPerson = clone(person);
person.age = 34;
console.log(clonedPerson);

console.log(person.age);       // 34
console.log(clonedPerson.age); // 33
