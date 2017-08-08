/**
 * 
 * Check if a string (first argument, str) ends with the given target string (second argument, target).
 * 
 * Approaches:
 * ES5-1    substr()
 * ES5-2    endsWith()
 * ES5-3    if () with ==
 * ES5-4    if () with ===
 * 
 * Execution time:
 * ES5-1: 0.0302734375ms
 * ES5-2: 0.005859375ms
 * ES5-3: 0.001953125ms
 * ES5-4: 0.051025390625ms
 * 
 * Fastest:
 * ES5-2 with endsWith()
 * 
 * Written by: Andrea Law
 */

// ES5-1
function confirmEnding(str, target) {
  return str.substr(str.length - target.length, target.length) === target;
}
console.time("ES5-1");
confirmEnding("Bastian", "n");
console.timeEnd("ES5-1");

// ES5-2
function confirmEnding(str, target) {
  return str.endsWith(target);
}
console.time("ES5-2");
confirmEnding("Bastian", "n");
console.timeEnd("ES5-2");

// ES5-3
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(0 - target.length, str.length - 1) == target) {
    return true;
  }
  return false;
}
console.time("ES5-3");
confirmEnding("Bastian", "n");
console.timeEnd("ES5-3");

// ES5-4
function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  if (str.substr(0 - target.length, str.length - 1) === target) {
    return true;
  }
  return false;
}
console.time("ES5-4");
confirmEnding("Bastian", "n");
console.timeEnd("ES5-4");