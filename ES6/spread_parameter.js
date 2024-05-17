//spread parameter  - spreads out elements of iteratble object

//spread - unpacks the elements of an iterable object, can be at any position
//rest - packs elements into an array, must be last parameter

const odd = [1, 3, 5];
const combined = [...odd, 2, 4, 6];
console.log(combined);

//ex:2

const combined2 = [2, ...odd, 4, 6];
console.log(combined2);
//es2018 - extends to objects - called object spread

function compare(x, y) {
  return x - y;
}

//es5
const result = compare.apply(null, [1, 2]);
console.log(result);

//es6 :

const result2 = compare(...[1, 2]);
console.log(result2);

let rivers = ["Nile", "Ganges", "Yamuna"];
let moreRivers = ["Danube", "Amazon"];

//es5
[].push.apply(rivers, moreRivers);
console.log(rivers);

//es6
rivers.push(...moreRivers); //push acts inline
console.log(rivers);

// Constructing array literal and array manipulation

let initialChars = ["A", "B"];
let chars = [...initialChars, "C", "D"];
console.log(chars); //

//concatenating arrays

let numbers = [1, 2];
let moreNumbers = [3, 2];
let allNumbers = [...numbers, ...moreNumbers];
console.log(allNumbers); //[1,2,3,2]

let scores = [80, 70, 90];
let copiedScores = [...scores]; //copy an array instance

console.log(copiedScores); //[80,70,90]   - ... copies array itself not elemenents

//spread operator and strings

let chars2 = ["A", ..."BC", "D"];
console.log(chars2); //['A','B','C','D','E']

/*
The spread operator is denoted by three dots (...).
The spread operator unpacks elements of iterable objects such as arrays, sets, and maps into a list.
The rest parameter is also denoted by three dots (...). However, it packs the remaining arguments of a function into an array.
The spread operator can be used to clone an iterable object or merge iterable objects into one.
*/
