/*

Symmetric Difference
Written by: Andrea Law for a freecodecamp challenge


Requirement: 

Create a function that takes two or more arrays 
and returns an array of the symmetric difference (△ or ⊕) of the provided arrays.

Given two sets (for example set A = {1, 2, 3} and set B = {2, 3, 4}), the mathematical term "symmetric difference" of two sets is the set of elements which are in either of the two sets, but not in both (A △ B = C = {1, 4}). For every additional symmetric difference you take (say on a set D = {2, 3}), you should get the set with elements which are in either of the two the sets but not both (C △ D = {1, 4} △ {2, 3} = {1, 2, 3, 4}).


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

function sym(args) {
  var arrays = Array.from(arguments);
  
  // remove duplicated elements in each array
  for (i = 0; i < arrays.length; i++) {
    arrays[i] = arrays[i].sort().filter(function(element, index, array) {
      return element != array[index - 1];
    });  
  }
  
  function getSym(arr1, arr2) {
    return arr1.concat(arr2).filter(function(element, index, array) {
      return array.indexOf(element) === array.lastIndexOf(element);
    }).sort();
  }
  
  var output = [];
  for (i = 1; i < arrays.length; i++) {
    if (i <= 1) {
      output = getSym(arrays[0], arrays[1]);
    } else {
      output = getSym(output, arrays[i]);
    }
    
  }
  
  return output;
}

// Test cases

sym([1, 2, 3], [5, 2, 1, 4]);// should return [3, 4, 5].
//sym([1, 2, 3], [5, 2, 1, 4]);// should contain only three elements.
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// should return [1, 4, 5]
//sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);// should contain only three elements.
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);// should return [1, 4, 5].
//sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);// should contain only three elements.
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// should return [2, 3, 4, 6, 7].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);// should contain only five elements.
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);// should return [1, 2, 4, 5, 6, 7, 8, 9].
//sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);// should contain only eight elements.
