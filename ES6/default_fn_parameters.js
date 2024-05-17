function say(message = "hi") {
  console.log(message);
}
say(); //Hi
say("Hello"); // Hello

function add(x, y) {
  return x + y;
}

add(100, 200); // 100,200 -> arguments  and  x,y -> parameters

function demomsg(message) {
  console.log(message);
}

demomsg(); // undefined

//how to fix ?
function demomsg2(message) {
  message = typeof message !== "undefined" ? message : "Hello Hi!";
  console.log(message);
}

demomsg2(); // undefined

/*
function fn(param1= default1, param2 =default2,....){
.....
}
*/

function sayHello(msg = "Hello") {
  console.log(msg);
}

say(); //Hello
say(undefined); //msg
say("Hi"); //Hi

//passing  undefined parameters
function add_3nums(a = 10, b = 20, c = 30) {
  console.log(a + b + c);
}

add_3nums(); // 60
add_3nums(undefined, 50, 100); // 160
add_3nums(undefined, 100); // 140

//Evaluating default parameters

function put(toy, toyBox = []) {
  toyBox.push(toy);
  return toyBox;
}

console.log(put("Toy Car")); //[ Toy Car]
console.log(put("Teddy Bear")); // [Teddy Bear]

//parameter can take default value which is a result of a fn.

function date(d = today()) {
  //default value is return value of the today() function
  console.log(d);
}

function today() {
  return new Date().toLocaleDateString("en-In");
}

function todayTime() {
  return new Date().toTimeString("en-IN");
}

date(); // returns today date
date(todayTime()); //timestring;
date("18/5/2024");

// make arguments mandatory

function requiredArgs() {
  throw new Error("Mandatory argument");
}

function addition(x = requiredArgs(), y = requiredArgs()) {
  return x + y;
}

//using other parameters in default values;

function add3(x = 1, y = x, z = x + y) {
  return x + y + z;
}

console.log(add3()); //4
//parameter list seems to have its own scope  .
// suppose fun fname(x=y,y=1){ ..} gives error : Reference Error : Cannot access 'y' before initalization

//

//return value of fn can be used as default value of the parameter.

let taxRate = () => 0.5;
let getPrice = function (price, tax = price * taxRate()) {
  return price + tax;
};

let fullPrice = getPrice(100); //110
console.log(fullPrice);

//the arguments object

function add4(x, y = 1, z = 2) {
  console.log(arguments.length);
  return x + y + z;
}

add4(10); //1
add4(10, 20); //2

add(10, 20, 30); //3
