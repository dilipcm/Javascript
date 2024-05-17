console.log("constants");

const CONSTANT_NAME = "value";
console.log(CONSTANT_NAME);
//block- scoped , can't be reassigned

const RETE = 0.1;
RATE = 0.2;

// const RED;  -SyntaxError , so must initialize

//actual value need not neccessarily be a immutable
const person = {
  age: 20,
};
person.age = 30;
console.log(person.age);

//but we can't reassign

// person ={
//     age: 40
// };   error

//Can you make the value of the variable also to be immutable?

const person2 = Object.freeze({
  age: 20,
});
person2.age = 20; // TypeError  - now it is immutable  - Object.freeze()  - but not getting error actually need to recheck

const employee = Object.freeze({ name: "ram", age: 30, salary: 30000 });

// employee.name = "sam"; // error

// Object.freeze() can freeze the properties of the object , not the objects referenced by the properties

const company = Object.freeze({
  name: "ABC Corp",
  address: {
    street: "Vajpayee Nagar",
    city: "bangalore",
    state: "CA",
    zipcode: 95134,
  },
});

company.address.zipcode = 560068; //no error

console.log(company);

//const and arrays

const colors = ["red"];
colors.push("green");
console.log(colors); //['red','green']

colors.pop();
colors.pop();
console.log(colors); //[]

// colors = []; //TypeError: Assignment to constant variable.    - we can't reassign the array colros to another array

//const in for loop

let scores = [10, 20, 30];
for (let score of scores) {
  console.log(score);
  //observe we are not modifying the score inside loop in such cases we can use cosnt
}

for (const score of scores) {
  console.log(score); //new score constant is created every iteration
}

//but what about tradiational for loop?

// for (const i = 0; i < scores.length; i++) {

//   console.log(scores[i]);
// } TypeError: Assignment to constant variable.
