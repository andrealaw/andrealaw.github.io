/**
 * 
 * Return true if the given string is a palindrome. Otherwise, return false.
 * 
 * A palindrome is a word or sentence that's spelled the same way 
 * both forward and backward, 
 * ignoring punctuation, case, and spacing.
 * 
 * Note: 
 * You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything lower case in order to check for palindromes.
 * 
 * Special cases:
 * pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.
 * pass strings with special symbols, such as "2A3*3a2", "2A3 3a2", and "2_A3*3#A2".
 * 
 * Execution time:
 * ES5-1: 0.161865234375ms
 * ES6-1: 0.157958984375ms
 * ES5-2: 0.1669921875ms // removed reusable local variable
 * ES5-3: 0.184814453125ms
 * ES6-3: 0.041015625ms
 * 
 * Fastest: ES6-3
 * 
 * Source of practice
 * freecodecamp: https://www.freecodecamp.org/
 * 
 * Written by: Andrea Law
 * 
 */

// ES5-1

function palindrome(str) {
  var newStr = str.replace(/\s/gi,"").replace(/[_*():/\-,.]/gi, "").toLowerCase();
  var last = newStr.length - 1;
  var count = newStr.length/2;
  for (var i = 0; i < count; i++) {
    if (newStr[i] != newStr[last - i]) {
        return false;
      }
  }
  return true;
}

console.time("ES5-1");

// Test cases:
palindrome("eye") // should return a boolean.
palindrome("eye") // should return true.
palindrome("_eye") // should return true.
palindrome("race car") // should return true.
palindrome("not a palindrome") // should return false.
palindrome("A man, a plan, a canal. Panama") // should return true.
palindrome("never odd or even") // should return true.
palindrome("nope") // should return false.
palindrome("almostomla") // should return false.
palindrome("My age is 0, 0 si ega ym.") // should return true.
palindrome("1 eye for of 1 eye.") // should return false.
palindrome("0_0 (: /-\ :) 0-0") // should return true.
palindrome("five|\_/|four") // should return false.

console.timeEnd("ES5-1");

// ES6-1

function palindrome(str) {
  let newStr = str.replace(/\s/gi,"").replace(/[_*():/\-,.]/gi, "").toLowerCase();
  let last = newStr.length - 1
  let count = newStr.length/2
  for (var i = 0; i < count; i++) {
    if (newStr[i] != newStr[last - i]) {
        return false
      }
  }
  return true;
}

console.time("ES6-1")

// Test cases:
palindrome("eye") // should return a boolean.
palindrome("eye") // should return true.
palindrome("_eye") // should return true.
palindrome("race car") // should return true.
palindrome("not a palindrome") // should return false.
palindrome("A man, a plan, a canal. Panama") // should return true.
palindrome("never odd or even") // should return true.
palindrome("nope") // should return false.
palindrome("almostomla") // should return false.
palindrome("My age is 0, 0 si ega ym.") // should return true.
palindrome("1 eye for of 1 eye.") // should return false.
palindrome("0_0 (: /-\ :) 0-0") // should return true.
palindrome("five|\_/|four") // should return false.

console.timeEnd("ES6-1")


// ES5-2
// Changes: remove reusable local variable "last"
// Result: Higher time complexity

function palindrome(str) {
  var newStr = str.replace(/\s/gi,"").replace(/[_*():/\-,.]/gi, "").toLowerCase();
  var count = newStr.length/2;
  for (var i = 0; i < count; i++) {
    if (newStr[i] != newStr[newStr.length - 1 - i]) {
        return false;
      }
  }
  return true;
}

console.time("ES5-2");

// Test cases:
palindrome("eye") // should return a boolean.
palindrome("eye") // should return true.
palindrome("_eye") // should return true.
palindrome("race car") // should return true.
palindrome("not a palindrome") // should return false.
palindrome("A man, a plan, a canal. Panama") // should return true.
palindrome("never odd or even") // should return true.
palindrome("nope") // should return false.
palindrome("almostomla") // should return false.
palindrome("My age is 0, 0 si ega ym.") // should return true.
palindrome("1 eye for of 1 eye.") // should return false.
palindrome("0_0 (: /-\ :) 0-0") // should return true.
palindrome("five|\_/|four") // should return false.

console.timeEnd("ES5-2");


// ES5-3
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}

console.time("ES5-3");

// Test cases:
palindrome("eye"); // should return a boolean.
palindrome("eye"); // should return true.
palindrome("_eye"); // should return true.
palindrome("race car"); // should return true.
palindrome("not a palindrome"); // should return false.
palindrome("A man, a plan, a canal. Panama"); // should return true.
palindrome("never odd or even"); // should return true.
palindrome("nope"); // should return false.
palindrome("almostomla"); // should return false.
palindrome("My age is 0, 0 si ega ym."); // should return true.
palindrome("1 eye for of 1 eye."); // should return false.
palindrome("0_0 (: /-\ :) 0-0"); // should return true.
palindrome("five|\_/|four"); // should return false.

console.timeEnd("ES5-3");

// ES6-3
function palindrome(str) {
  let re = /[\W_]/g; // alternative: let re = /[^a-z0-9]/g;
  let lowRegStr = str.toLowerCase().replace(re,"");
  let reversedStr = lowRegStr.split("").reverse().join("");
  return reversedStr === lowRegStr;
}

console.time("ES6-3")

// Test cases:
palindrome("eye") // should return a boolean.
palindrome("eye") // should return true.
palindrome("_eye") // should return true.
palindrome("race car") // should return true.
palindrome("not a palindrome") // should return false.
palindrome("A man, a plan, a canal. Panama") // should return true.
palindrome("never odd or even") // should return true.
palindrome("nope") // should return false.
palindrome("almostomla") // should return false.
palindrome("My age is 0, 0 si ega ym.") // should return true.
palindrome("1 eye for of 1 eye.") // should return false.
palindrome("0_0 (: /-\ :) 0-0") // should return true.
palindrome("five|\_/|four") // should return false.

console.timeEnd("ES6-3");