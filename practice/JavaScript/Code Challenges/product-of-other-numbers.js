/*

Approach 1 with a brute force approach

Time complexity: O(n ^ 2)

Solved by: Andrea Law
Date: 6 Aug 2017

*/

function getProductsOfAllIntsExceptAtIndex (arr) {
    
    // edge cases:
    if (arr.length <= 0) {
    	throw new Error("Array has no value.");
    }
    
    var productArray = [];
    
    for (var i = 0; i < arr.length; i++) {
        productArray[i] = 1;
    	for (var j = 0; j < arr.length; j++) {
        	if (i !== j) {
            	productArray[i] *= arr[j];
            }
        }
    }
    
    return productArray;
}

// run your function through some test cases here
// remember: debugging is half the battle!
console.log(getProductsOfAllIntsExceptAtIndex ([1 ,7, 3, 4])); // [84, 12, 28, 21]
console.log(getProductsOfAllIntsExceptAtIndex ([1 ,7, 3, 0])); // [0, 0, 0, 21]
