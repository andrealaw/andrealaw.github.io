/*
Time complexity: O(n^2);
*/
function foundSum(arr, target, i){
  // edge cases
  if (arr.length <= 2){
    throw new Error("Need at least 2 integers to get a pair!");
  }

  // loop through the sorted array from the front and 
  // the back at the same time
  var found = false;
  var p1 = 0;
  var p2 = arr.length - 1;
  var sum;
  while (p2 > p1){
    console.log(p1 + " " + p2);
    if (p1 === i){
      p1++;
      continue;
    }
    if (p2 === i){
      p2--;
      continue;
    }

    sum = arr[p1] + arr[p2];
    if (sum === target){
      found = true;
      break;
    }
    if (sum > target) p2--;
    if (sum < target) p1++;
  }
  return found;
}

function foundThreeIntegersSumTo0(arr){
  if (arr.length <= 3){
    throw new Error("Need at least 3 integers!");
  }

  var found;
  for (var i = 0; i < arr.length; i++){
    var target = arr[i];
    found = foundSum(arr, target, i);
    
    if (found){
      break;
    }
  }

  return found;
}