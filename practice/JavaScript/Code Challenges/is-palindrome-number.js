// Approach 1
var isPalindrome = function(x) {
    if (x === undefined){
        return false;
    }
    x = x.toString();
    var p1 = 0;
    var p2 = x.length-1;
    while (p2 > p1){
        var n1 = x[p1];
        var n2 = x[p2];
        if (n1 !== n2){
            return false;
        }
        p1++;
        p2--;
    }
    
    return true;
};

// Approach 2
var isPalindrome = function(x) {
    // negative numbers are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)){
        return false;
    }
    
    var reversedNumber = 0;
    while (x > reversedNumber){
        reversedNumber = Math.floor(reversedNumber * 10 + x % 10);
        x = Math.floor(x/10);
    }
    return x === reversedNumber || x === Math.floor(reversedNumber/10);
};

// test cases for false
isPalindrome(-11); // negative numbers
isPalindrome(10); // special cases with 0s
isPalindrome(100); // special cases with 0s

// test cases for true
isPalindrome(0); // 
isPalindrome(11); // true
isPalindrome(121); // true
isPalindrome(1221); // true