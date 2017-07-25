/*

Make a Person
Written by: Andrea Law for a freecodecamp challenge


Requirement: 

Fill in the object constructor with the following methods below:
getFirstName()
getLastName()
getFullName()
setFirstName(first)
setLastName(last)
setFullName(firstAndLast)

Run the tests to see the expected output for each method.
The methods that take an argument must accept only one argument and it has to be a string.
These methods must be the only available means of interacting with the object.


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

var Person = function(firstAndLast) {
    // Complete the method below and implement the others similarly
  var name = firstAndLast;
  this.getFullName = function() {
      return name;
    };
  this.getFirstName = function() {
      return name.substr(0, name.indexOf(" "));
    };
  this.getLastName = function() {
      return name.substr(name.indexOf(" ")+1, name.length);
    };
  this.setFullName = function(anb) {
      name = anb;
    };
  this.setFirstName = function(a) {
      name = a + name.substr(name.indexOf(" "), name.length);
    };
  this.setLastName = function(b) {
      name = name.substr(0, name.indexOf(" ")+1) + b;
    };
};

// Test cases

var bob = new Person('Bob Ross');

Object.keys(bob).length;// should return 6.
bob instanceof Person;// should return true.
bob.firstName;// should return undefined.
bob.lastName;// should return undefined.
bob.getFirstName();// should return "Bob".
bob.getLastName();// should return "Ross".
bob.getFullName();// should return "Bob Ross".
