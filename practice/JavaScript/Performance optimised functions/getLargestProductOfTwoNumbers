/*

Given a list of numbers, put with + - * / with any two numbers, find the maximum value you can get.

Time complexity:    O(n)
Space complexity:   O(1)

*/

function getLargestProductOfTwo(arr) {

    if (arr.length < 0) {
        throw new Error ("At least 2 integers are required to proceed.");
    }

    var largestProduct = arr[0] + arr[1];
    for (var i = 1; i < arr.length; i++) {
        var pre = arr[i - 1];
        var cur = arr[i];
        var sumVal = pre + cur;
        var minusVal = pre - cur;
        var timesVal = pre * cur;
        var divideVal1 = pre / cur;
        var divideVal2 = cur / pre;
        var largestVal = Math.max(
            sumVal, minusVal, timesVal, divideVal1, divideVal2
        );

        if (largestVal > largestProduct) {
            largestProduct = largestVal;
        }
    }

    console.log(largestProduct);
}

getLargestProductOfTwo([1,2,3]);        // 6
getLargestProductOfTwo([]);             // NaN
getLargestProductOfTwo([16,4,5,2]);     // 64