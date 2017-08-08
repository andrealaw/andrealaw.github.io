/**
 * Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
 * 
 * Test cases:
 * ["hello", "Hello"], // should return true because all of the letters in the second string are present in the first, ignoring case.
 * ["hello", "hey"] // should return false because the string "hello" does not contain a "y".
 * ["Alien", "line"], // should return true because all of the letters in "line" are present in "Alien".
 * 
 * Approaches:
 * ES6-1    indexOf()
 * 
 * Execution time:
 * ES5-1: 0.098876953125ms
 * 
 * Written by: Andrea Law
 */

// ES6-1

function mutation(arr) {
  let str = arr[0].toLowerCase();
  let charArry = arr[1].toLowerCase().split("");
  for (let i = 0; i < charArry.length; i++) {
    if (str.indexOf(charArry[i]) == -1) {
      return false;
    }
  }
  return true;
}
console.time("ES6-1");
mutation(["hello", "hey"]) // should return false.
// mutation(["hello", "Hello"]) // should return true.
// mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]) // should return true.
// mutation(["Mary", "Army"]) // should return true.
// mutation(["Mary", "Aarmy"]) // should return true.
// mutation(["Alien", "line"]) // should return true.
// mutation(["floor", "for"]) // should return true.
// mutation(["hello", "neo"]) // should return false.
// mutation(["voodoo", "no"]) // should return false.
console.timeEnd("ES6-1");

