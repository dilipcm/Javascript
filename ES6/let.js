//ES6 syntax :

// let  - decalre block -scoped variables
console.log("###############ES6 Syntax##############");
console.log("let Keyword - decalre block -scoped variables\n");
let x = 10;
if (x == 10) {
  let x = 20;
  console.log(x); //20  - shadows variable x=10
}
console.log(x, "\n"); //10

//redeclaration
console.log("redeclaration");
var counter = 0;
var counter;
console.log(counter);
var counter = 20;
console.log(counter);

let count = 0;
//let count;  // gives error - counter already declared

// let counter = 0; // SyntaxError: Identifier 'counter' has already been declared

console.log(count);

console.log("Let and Hoisting:");

{
  //   console.log(val); //ReferenceError: Cannot access 'val' before initialization
  //   let val = 10;
}

console.log("TDZ:"); //TDZ - time from start until variable is processed.  - time based  not location based

//TDZ _ prevents accidentally referencing varibale that is declared.

{
  let logfn = function () {
    console.log(message); // not yet defined
  };
  let message = "Hello"; //TDZ ends
  logfn();
}

{
  //TDZ -start
  console.log(typeof myVar);
  //   console.log(typeof message);//ReferenceError: Cannot access 'message' before initialization
  let message; //end
}
//A temporal dead zone of a variable is declared using the let keyword starts from the block until the initialization is evaluated.
