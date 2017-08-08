/**
 * 
 * Find out the execution time of basic algebra 
 * 
 * from fastest to slowest: Addition OR Division, Subtraction, Multiplication
 * 
 * Written by Andrea Law
 * 
 */

function addition(a, b) {
    return a + b
}

console.time("addition");

addition(4, 4);

console.timeEnd("addition");

function subtraction(a, b) {
    return a - b
}

console.time("subtraction");

subtraction(4, 4);

console.timeEnd("subtraction");

//

function multiplication(a, b) {
    return a * b
}

console.time("multiplication");

multiplication(4, 4);

console.timeEnd("multiplication");

//

function division(a, b) {
    return a / b
}

console.time("division");

division(4, 4);

console.timeEnd("division");