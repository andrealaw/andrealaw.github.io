/**
 * 
 * Find out the execution time of a Fibonacci sequence of length n
 * 
 * From fastest to slowest: 3 2 1 
 * 
 * Source of practice
 * freecodecamp: https://www.freecodecamp.org/
 * 
 * Approaches:
 * Approach 1: 0.08203125ms        with 2 functions + for loop
 * Approach 2: 0.005126953125ms    recursion
 * Approach 3: 0.003173828125ms    arr.push in a for loop
 * Approach 4: 0ms                 O(n) with one for loop
 * 
 * Written by: Andrea Law
 * 
 */

// Approach 1

function fibArray(n) {
 
  let fibMemo = new Map();
 
  function fib(n) {
    if (fibMemo.has(n)) return fibMemo.get(n);
    if (n <= 1) return 1;
    const result = fib(n - 1) + fib(n - 2);
    fibMemo.set(n, result);
    return result;
  }
 
  let arr = [];
  for (let x=0; x<n; x++) {
    arr.push(fib(x));
  }
  return arr;
}

console.time("Approach 1");
fibArray(10);
console.timeEnd("Approach 1");

// Approach 2

function fib(n) {
  if (n <= 1) return 1;
  return fib(n - 1) + fib(n - 2);
}
 
function fibArray(n) {
  let arr = [];
  for (let x=0; x<n; x++) {
    arr.push(fib(x));
  }
  return arr;
}

console.time("Approach 2");
fibArray(10);
console.timeEnd("Approach 2");

//  Approach 3

function fibArray(n) {
  let arr = [];
  for (let x=0; x<n; x++) {
    arr.push(
      x < 2 ? 1 : arr[x - 1] + arr[x - 2]
    );
  }
  return arr;
}

console.time("Approach 3");
fibArray(10);
console.timeEnd("Approach 3");

// Approach 4

function getfibNumbers(n) {
    
    // edge cases:
    if (n < 0) {
     	throw new Error("Negative number cannot generate fibonacci numbers.");   
    }
    
    var fibNumbers = []

    for (var i = 0; i < n; i++) {
    	if (i === 0 || i === 1) {
    		fibNumbers[i] = 1;
    	} else {
    		fibNumbers[i] = fibNumbers[i - 2] + fibNumbers[i - 1];
    	}

    }
    return fibNumbers;
}

console.time("Appoach 4");
console.log(getfibNumbers(5));
console.timeEnd("Approach 4");