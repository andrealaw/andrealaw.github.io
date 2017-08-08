/**
 * 
 * Return the Largest Numbers in a array of arrays 
 * 
 * Approaches:
 * ES5-1    With a For Loop
 * ES5-2    With Built-In Functions — with map() and reduce()
 * ES5-3    With Built-In Functions — with map() and Math.max.apply()
 * 
 * Fastest to slowest:
 * map() + Math.max.apply
 * map() + reduce()
 * two for loops
 * 
 */

// ES5-1

function largestOfFour(arr) {
   var largestNumber = [0,0,0,0];
   for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
    for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
       if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
          largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
        }
    }
 }
 return largestNumber;
}

console.time("ES5-1");
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.timeEnd("ES5-1");

// ES5-2

function largest(arr) {
	return arr.map(function(el) {
		return el.reduce(function(pre, cur) {
			return cur > pre ? cur : pre;
		});
	});
}
console.time("2");
largest([[1,2,3,4],[5,7,3],[10,2,5]]);
console.timeEnd("2");

// ES5-3

function largest(arr) {
	return arr.map(function(el) {
		return Math.max.apply(null, el);
	});
}
console.time("3");
largest([[1,2,3,4],[5,7,3],[10,2,5]]);
console.timeEnd("3");