// let and  callback function in for loop
console.log("let and  callback function in for loop");

for (var i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 30);
}
console.log("\n"); // 5 5 5 5 5  - obeserve this console is  executed before the above for loop

//es5 - fix :
for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, 100);
  })(i);
}
// same using let  - fix using es6

for (let i = 0; i < 5; i++) {
  setTimeout(function () {
    console.log(i);
  }, 200);
}

// use arrow functions

for (let i = 5; i < 20; i++) {
  setTimeout(() => console.log(i), 300);
}
