/**
 * Reverse a provided string
 * 
 * Execution time:
 * ES5: 0.053955078125ms
 * ES6: 0.037841796875ms
 * 
 * 
 * Source of practice
 * freecodecamp: https://www.freecodecamp.org/
 * 
 * Written by: Andrea Law
 */

// ES5

function reverseStringES5(str) {
    return str.split("").reverse().join("");
}

console.time("ES5");

reverseStringES5("apple");

console.timeEnd("ES5");

// ES6

function reverseStringES6(str) {
    return str.split("").reverse().join("")
}

console.time("ES6")

reverseStringES6("apple")

console.timeEnd("ES6")
