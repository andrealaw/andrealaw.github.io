/*
Time complexity: O(n);
*/
function foundSum(arr, target){
  // edge cases
  if (arr.length <= 1){
    throw new Error("Need at least 2 integers to get a pair!");
  }

  // loop through the sorted array from the front and 
  // the back at the same time
  var p1 = 0;
  var p2 = arr.length - 1;
  var sum;
  while (p2 > p1){
    console.log(p1 + " " + p2);
    sum = arr[p1] + arr[p2];
    if (sum === target) return true;

    if (sum > target) p2--;
    if (sum < target) p1++;
  }
  return false;
}

var arr = [1, 2, 4, 7, 11, 15];
var target = 15;
foundSum(arr, target); // Found
target = 10;
foundSum(arr, target); // Cannot found