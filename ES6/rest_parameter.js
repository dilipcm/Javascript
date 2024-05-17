//rest parameter - prefix ...
function fn(a, b, ...args) {
  return;
}

fn(1, 2, 3, "A", "B", "C", "D", "E");
//here args takes [3,'A','B','C','D','E']
fn(1, 2); //here args= []

// function fn1(a,..args,b){
//     //SyntaxError: Rest parameter must be last formal parameter
// }

function sum(...args) {
  let total = 0;
  for (const a of args) {
    total += a;
  }
  return total;
}

function multiplication(...args) {
  let result = 1;
  for (const a of args) {
    result *= a;
  }
  return result;
}

res = multiplication(1, 2, 3, 4, 5);
console.log(res);

///caluclate sum of only number arguments ignore others

function addition_num(...args) {
  let sum = 0;
  for (const val of args) {
    if (typeof val == "number") {
      sum += val;
    }
  }
  return sum;
}

res = addition_num(1, 2, 3, "a", "b", true);
console.log(res);

//method2 :
function addnum(...args) {
  return args
    .filter(function (e) {
      return typeof e == "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

res = addnum(1, 2, 3, 4, "a", "b", false, true);
console.log(res);

//ES5 approach

function add_nums() {
  return Array.prototype.filter
    .call(arguments, function (e) {
      return typeof e == "number";
    })
    .reduce(function (prev, curr) {
      return prev + curr;
    });
}

res = add_nums(1, 2, 3, "a", "b");
console.log(res);

function filterby(type, ...args) {
  return args.filter(function (e) {
    return typeof e == type;
  });
}

let nargs = filterby("number", "a", "b", true, 5, 3, 2, 2.4);
console.log(nargs);

//arrow fn and rest parameters  - arrow fns  doesn't have arguments object.
const combine = (...args) => {
  return args.reduce(function (prev, curr) {
    return prev + curr;
  });
};

let message = combine("j", "a", "v", "a");
console.log(message);

//rest parameter in dynamic function

var showNubers = new Function("...numbers", "console.log(numbers)");
showNubers(1, 2, 3, 4.5);
