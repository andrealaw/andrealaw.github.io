/*

Inventory Update
Written by: Andrea Law for a freecodecamp challenge


Requirement: 

Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.
Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.


Source of practice
freecodecamp: https://www.freecodecamp.org/

*/

function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
    
  // update inventory level of current items
  arr1.forEach(function(item1) {
      arr2.forEach(function(item2, index) {
        if (item1[1] === item2[1]) {
          item1[0] += item2[0];
          arr2.splice(index, 1); // remove counted items from arr2
        }
      });
    });
  
  // add new items to the array
  if (arr2.length > 0) {
    arr2.forEach(function(item2) {
      arr1.push(item2);
    });
  }
  
  // sort the array by item name
  arr1.sort(function(a,b) {
    if (a[1] < b[1]) {
      return -1;
    }
    if (a[1] > b[1]) {
      return 1;
    }
  });
  
  return arr1;
}

// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

// Test cases

updateInventory(curInv, newInv);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length;// should return an array with a length of 6.
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);// should return [[88, "Bowling Ball"], [2, "Dirty Sock"], [3, "Hair Pin"], [3, "Half-Eaten Apple"], [5, "Microphone"], [7, "Toothpaste"]]

