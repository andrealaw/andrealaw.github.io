/**
 * Return the length of the longest word in the provided sentence.
 * 
 * Your response should be a number.
 * 
 * Execution time:
 * ES5-1: 0.0751953125ms
 * ES6-1: 0.085693359375ms
 * 
 * ES5-2: 0.08203125ms
 * 
 * Fastest to slowest:
 * ES5-3    reduce()
 * ES5-2    sort()
 * ES5-1    for loop
 * 
 * Source of practice
 * freecodecamp: https://www.freecodecamp.org/
 * 
 * Written by: Andrea Law
 */

// ES5-1

function findLongestWord(str) {
  var arr = str.split(" ");
  var longest = arr[0].length;
  for (var i = 1; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

console.time("ES5-1");

findLongestWord("The quick brown fox jumped over the lazy dog");

console.timeEnd("ES5-1");

// ES6-1

function findLongestWord(str) {
  let arr = str.split(" ");
  let longest = arr[0].length;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest) {
      longest = arr[i].length;
    }
  }
  return longest;
}

console.time("ES6-1");

findLongestWord("The quick brown fox jumped over the lazy dog");

console.timeEnd("ES6-1");


// ES5-2

function findLongestWord(str) {
  var longestWord = str.split(' ').sort(function(a, b) { return b.length - a.length; });
  return longestWord[0].length;
}

console.time("ES5-2");

findLongestWord("The quick brown fox jumped over the lazy dog");

console.timeEnd("ES5-2");

// ES5-3

function findLongestWord(str) {
  var longestWord = str.split(' ').reduce(function(longest, currentWord) {
    return currentWord.length > longest.length ? currentWord : longest;
  }, "");
  return longestWord.length;
}

console.time("ES5-3");

findLongestWord("The quick brown fox jumped over the lazy dog");

console.timeEnd("ES5-3");