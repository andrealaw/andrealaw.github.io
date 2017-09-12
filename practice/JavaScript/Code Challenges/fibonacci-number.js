/*
 * 
 * Write a function fib() that a takes an integer n and returns the nth fibonacci number.
 * 
 * Solved by: Andrea Law
 * Date: 4 Aug 2017
 */
function getFibonacciNumber(n) {
    
    // edge cases:
    if (n < 0) {
     	throw new Error("Negative number cannot generate fibonacci numbers.");   
    } else if (n === 0 || n === 1) {
        return n;
    }
    
    var prevPrev = 0;
    var prev = 1;
    var current;
    
    for (var i = 1; i < n; i++) {
    	current = prev + prev;
        prevPrev = prev;
        prev = current;
    }
    return current;
}

console.time("Approach 1");
console.log(getFibonacciNumber(5));
console.timeEnd("Approach 1");
