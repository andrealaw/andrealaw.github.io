/**
 * 
 * Execution time:
 * ES5-1: 1.89794921875ms   <- while loop + push() and unshift() to 3 arrays
 * ES5-2: 0.3759765625ms    <- while loop + add elements by positions to 1 array
 */

// ES5-1

function mergeSortedArrays(firstArray, secondArray) {
    var n = firstArray.length + secondArray.length;
    var mergedArray = [];
    var i = 0;
    while (i < n) {
    	if (firstArray[0] < secondArray[0]) {
            mergedArray.push(firstArray[0]);
            firstArray.shift();
        } else {
            mergedArray.push(secondArray[0]);
            secondArray.shift();
        }
        i++;
    }
    return mergedArray;
}

console.time("ES5-1");
console.log(mergeSortedArrays([1,3,5,6,13],[1,2,7,8,20]));
console.timeEnd("ES5-1");

// ES5-2

function mergeSortedArrays(myArray, aliceArray) {
    
    var mergedArray = [];
    
    var myArrayIndex 		= 0;
    var aliceArrayIndex 	= 0;
    var currentArrayIndex	= 0;
    
    while (currentArrayIndex < (myArray.length + aliceArray.length)) {
    
        var isMyArrayExhausted = myArrayIndex >= myArray.length;
        var isAliceArrayExhausted = aliceArrayIndex >= aliceArray.length;
        
        // case: my array is not exhausted AND
        // 1) Alice's array is exhausted OR
        // 2) my array's current element has a smaller value
		if (!isMyArrayExhausted && (isAliceArrayExhausted || 
                                   myArray[myArrayIndex] < aliceArray[aliceArrayIndex])) {
            
            mergedArray[currentArrayIndex] = myArray[myArrayIndex];
            myArrayIndex++;
            
        } else {
        // case: Alice's array is next    
            mergedArray[currentArrayIndex] = aliceArray[aliceArrayIndex];
            aliceArrayIndex++;
            
       	}

		currentArrayIndex++;       
    }
    
    return mergedArray;
}

console.time("ES5-2");
console.log(mergeSortedArrays([1,3,5,6,13],[1,2,7,8,20]));
console.timeEnd("ES5-2");