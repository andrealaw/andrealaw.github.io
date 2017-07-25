/*

No repeats please
Written by: Andrea Law for a freecodecamp challenge


Requirement: 

Return the number of total permutations of the provided string that don't have repeated consecutive letters. Assume that all characters in the provided string are each unique.
For example, aab should return 2 because it has 6 total permutations (aab, aab, aba, aba, baa, baa), but only 2 of them (aba and aba) don't have the same letter (in this case a) repeating.


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

function permAlone(str) {
  var output = [];
  
  function perm(initial, text) {

    if (text === "") {
      output.push(initial + text);
    } else {
      for (var i = 0; i < text.length; i++) { 
        perm(initial + text.charAt(i), text.substr(0,i) + text.substr(i+1, text.length)); 
      }

    }
  }
  
  function countPerm(arr) {
    return arr.filter(function(element, array, index) {
      for (var i = 0; i < element.length; i++) {
        if (element.charAt(i) === element.charAt(i+1)) {
          return false;
        }
      }
      return true;
    });
  }

  perm("", str);
  
  return countPerm(output).length;
}

// Test cases

permAlone("aab"); // should return a number.
permAlone("aab"); // should return 2.
permAlone("aaa"); // should return 0.
permAlone("aabb"); // should return 8.
permAlone("abcdefa"); // should return 3600.
permAlone("abfdefa"); // should return 2640.
permAlone("zzzzzzzz"); // should return 0.
permAlone("a"); // should return 1.
permAlone("aaab"); // should return 0.
permAlone("aaabb"); // should return 12.