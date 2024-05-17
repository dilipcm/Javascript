//es6 : for..of - iterate over iterable objects

// iterate over buiilt in - Array, String, Set, ..
//array -like objects  - arguments  or NodeList
//user defined objects that implement iterator protocol

/*
for (variable of iterable){
    ....
}
*/
scores = [34, 32, 65, 23, 90];
for (let score of scores) {
  console.log(score);
}

scores = [34, 32, 65, 23, 90];
for (const score of scores) {
  //only use if you dont change score value inside loop
  console.log(score);
  //   score -= 2; //TypeError: Assignment to constant variable.
}
