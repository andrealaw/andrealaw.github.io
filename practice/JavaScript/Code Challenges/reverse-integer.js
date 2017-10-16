/*

Source: https://leetcode.com/problems/reverse-integer/description/

Questions:
Reverse digits of an integer.
Example1: x = 123, return 321
Example2: x = -123, return -321

Note: The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.



Learnt:
-Negative integer cannot be converted to String with toString
-use a boolean to store the status
-signed integer = unsigned integer / 2
-signed integer = negative to 0 to positive
-unsigned integer = 0 to positive only
-32-bit signed = Math.pow(2,32) / 2 (range for both negative and positive values)

*/

var reverse = function(x) {
    var isNegative = false;
    if (x < 0){
        isNegative = true;
        x = Math.abs(x);
    }
    
    var arrOfInt = x.toString();
    var reversedInt = "";
    for (var i = arrOfInt.length - 1; i >= 0; i--){
        reversedInt = reversedInt + arrOfInt.charAt(i);
    }
    reversedInt = Number(reversedInt);

    var limit = Math.pow(2,32) / 2;
    if (Math.abs(reversedInt) > limit){
        return 0;
    }
    
    if (isNegative){
        reversedInt *= -1;
    }
    return reversedInt;
};

reverse(123); // 321
reverse(-123); // -321