// Question: https://www.youtube.com/watch?v=NKoHjWl2m8Y&list=PLqM7alHXFySHaz3_xpl-8tvYU9JGQwiEg
// two pointers for start and end
// create a window

// input: an array of integers
// output: sub array
// edge cases: empty array, negative numbers, no results
// Complexity: O(n) time and O(1) space
function getSubarr(arr, sum){
    let minSum;
    let minStart, minEnd;
    let p1 = 0;
    let p2 = 0;
    let tempSum;

    // edge cases
    if (arr.length === 0){
        return "Empty array. No outputs.";
    }

    while (p2 < arr.length){
        
        // console.log(`tempSum = ${tempSum}`);
        // console.log(`minSum = ${minSum}`);

        // Track tempSum
        if (tempSum == undefined){

            tempSum = arr[p1];
        
        } else {
        
            tempSum += arr[p2];
        
        }

        // Compare and update minSum
        while (tempSum > sum && p1 < p2){

            if (tempSum === sum + 1){

                minSum = tempSum;
                minStart = p1;
                minEnd = p2;
    
                break;
    
            }

            if (minSum == undefined || tempSum < minSum){

                minSum = tempSum;
                minStart = p1;
                minEnd = p2;

            }
            
            if (p1 < p2){

                tempSum -= arr[p1];
                p1++;

                // stop until tempSum is smaller than minSum again
            }

        }
        
        p2++;

    }

    if (minSum == undefined){
        return `No subarray has a sum over ${sum}`;
    } else {
        return arr.slice(minStart, minEnd+1);
    }

}

// Test cases:

// let arr = [1,4,45,6,0,19]; 
// console.log(getSubarr(arr, 51)); // return [4,45,6]

// arr = [52]; 
// console.log(getSubarr(arr, 51)); // return [52]

// arr = []; 
// console.log(getSubarr(arr, 51)); // return []

// arr = [100]; 
// console.log(getSubarr(arr, 51)); // return [100]