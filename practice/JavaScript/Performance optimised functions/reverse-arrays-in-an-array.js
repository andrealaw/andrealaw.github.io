/**
 * 
 * Reverse arrays inside an array
 * 
 * Execution time:
 * ES5-1: 0.1162109375ms    // Two loops
 * ES5-2: 0.0859375ms       // One loop
 * ES6-1: 0.0849609375ms    // no big difference between ES5 and ES6 here
 * 
 * 
 * Source of practice
 * freecodecamp: https://www.freecodecamp.org/
 * 
 * Written by: Andrea Law
 */

function performOps(A){
    m= A.length
    n=A[0].length
    B=[]
    for(i = 0; i < m;i++){
        B.push(new Array(n));
        for(j=0;j< n;j++){
            B[i][n-1-j] = A[i][j]
        }
    }
    return B
}

console.time("ES5-1");
// return [[4,3,2,1],[8,7,6,5],[12,11,10,9]]
performOps([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
console.timeEnd("ES5-1");


// ES5-2

function performOps(A){
    var n = A.length;
    for(i = 0; i < n;i++){
        A[0] = A[0].reverse();
    }
    return A;
}

console.time("ES5-2");
// return [[4,3,2,1],[8,7,6,5],[12,11,10,9]]
performOps([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
console.timeEnd("ES5-2");


// ES6-1

function performOps(A){
    let n = A.length;
    for(let i = 0; i < n;i++){
        A[0] = A[0].reverse();
    }
    return A;
}

console.time("ES6-1");
// return [[4,3,2,1],[8,7,6,5],[12,11,10,9]]
performOps([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]]);
// console.log(A); // stay as the original
console.timeEnd("ES6-1");