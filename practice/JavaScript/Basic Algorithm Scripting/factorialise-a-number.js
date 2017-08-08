/**
 * Return the factorial of the provided integer.
 * 
 * If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
 * Factorials are often represented with the shorthand notation n!
 * For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
 * 
 * Approaches:
 * ES5-1  for loop
 * ES6-1  for loop
 * ES5-2  while loop
 * ES5-3  recursion
 * 
 * Execution time:
 * ES5-1: 0.033935546875ms
 * ES6-1: 0.004150390625ms
 * ES5-2: 0.001708984375ms
 * ES5-3: 0.001708984375ms
 * 
 * Source of practice
 * freecodecamp: https://www.freecodecamp.org/
 * 
 * Written by: Andrea Law
 */

// ES5

function factorialize(num) {
  var product = 1;
  for (var i = 2; i <= num; i++) {
    product *= i;
  }
  return product;
}
console.time("ES5-1");
factorialize(5);
console.timeEnd("ES5-1");

// ES6-1

function factorialize(num) {
  var product = 1
  for (var i = 2; i <= num; i++) {
    product *= i
  }
  return product
}
console.time("ES6-1")
factorialize(5)
console.timeEnd("ES6-1")

// ES5-2

function getfactorial(num) {

  // edge cases:
  if (num.length < 1) {
    throw new Error("Cannot get factorial with a non-positve number.");
  }

  var result = 0;

  while (num > 1) { 
    num--;
    result *= num;
  }
  return result;
}
console.time("ES5-2")
getfactorial(5)
console.timeEnd("ES5-2")

// ES5-3

function factorialize(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * factorialize(num - 1));
  }
}
console.time("ES5-3")
factorialize(5)
console.timeEnd("ES5-3")

// Approach 4

function getfactorial(num) {
  
  // edge cases:
  if (num.length < 1) {
    throw new Error("Cannot get factorial with a non-positve number.");
  }

  var factorial = 0; 

  while (num > 1) { 
    num--;
    factorial *= num;
  }
  return factorial;
}
console.time("Approach 4")
getfactorial(5)
console.timeEnd("Approach 4")