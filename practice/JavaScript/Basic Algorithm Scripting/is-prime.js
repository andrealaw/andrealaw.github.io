/**
 * Check if a number is prime.
 * 
 * The smallest prime number is 2.
 * 
 */

// ES5-1
function isPrime(num) {
    if (num < 2) {
        return false;
    }
    for (let i = 2; i < sqrt(num); i++) {
        if (num % i == 0) {
            return false;
        }
    }
    return true;
}
isPrime(0);
isPrime(73);
isPrime(100);
