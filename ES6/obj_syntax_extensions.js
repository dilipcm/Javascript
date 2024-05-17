//object literals  - one of the popular pattern for creating objects in javascript.

//before es6, object literal is collection of name-value pairs

function createMachine(name, status) {
  return {
    name: name,
    status: status,
  };
}

let v = createMachine("JE", "In Progress");
console.log(v);
//es6 syntax
function createMachine2(name, status) {
  return {
    name,
    status,
  };
}

let sample = createMachine2("PVM", "Executed");
console.log(sample);
// construct an object literals from local variables
let name = "Computer",
  status = "On";
let machine = {
  name,
  status,
};
console.log(machine);

//computed property name

//before es6 - [] used to enable computed property name

let name2 = "machine name";
let machine2 = {
  [name]: "server",
  "machine hours": 10000,
};

console.log(machine2[name]); //server
console.log(machine2["machine hours"]);

//when property name is palced inside a string then the javascript engine evaluates it as string

let prefix = "machine";
let machine3 = {
  [prefix + " name"]: "server",
  [prefix + " hours"]: 10000,
};
console.log(machine3["machine name"]);
console.log(machine3["machine hours"]);

//concise method syntax -
//es5

let server = {
  name: "Server",
  restart: function () {
    console.log("The " + this.name + " is restarting...");
  },
};
server.restart();

//es6
let server2 = {
  name: "Server2",
  restart() {
    //also called concise method syntax
    console.log("The " + this.name + " is restarting...");
  },
};
server2.restart();

//valid to have spaces
let server3 = {
  name: "Server3",
  restart() {
    //also called concise method syntax
    console.log("The " + this.name + " is restarting...");
  },
  "start up"() {
    console.log("The " + this.name + " is starting up!");
  },
};
server3.restart();
server3["start up"](); //syntax : object.['property_name']()

//learnings - property initializer shrotand, computed properties, concise method syntax
