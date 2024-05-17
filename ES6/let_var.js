//differences
/*
var - global / local scope 
*/
var x, y;
(x = 10), (y = 30);
function global_var() {
  var x = 20;
  console.log(x);
  console.log(y);
}

console.log(x);
console.log(y);
// creating global properties

var counter = 0;
// console.log(window.counter); //0

let counter2 = 0;
// console.log(window.counter2); // undefined

//Redeclaration

var counter3 = 10;
var counter3;
console.log(counter3); // 10

let counter4 = 10;
// let counter4; // error

//4 .Temporal Dead Zone  - let but var not

// var - creation phase - assign storage and initialize to undefined.  -  execution - anu modify it will change else remains same.
//let  - creation phase - assign storage and doesn't initialize, so cause  Reference error , execution phase -same as var.

/*
The temporal dead zone starts from the block until the let variable declaration is processed. In other words, it is the location where you cannot access the let variables before they are defined.
*/
