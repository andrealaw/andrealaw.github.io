// this is a constructor function
function Person(name){
  this.name = name;
}

// this is an object created from the Person constructor
var elie = new Person("Elie");
var colt = new Person("Colt");

// add a new prototype afterward
Person.prototype.isInstructor = true;

elie.isInstructor; // true
colt.isInstructor; // true

// how were we able to access properties on the prototype?

console.dir(elie);
elie.__proto__===Array.prototype // true
