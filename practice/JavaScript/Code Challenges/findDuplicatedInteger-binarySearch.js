/*
O(1) space and O(n log n) time.

Solved by: Andrea Law
Date: 14 Aug 2017
*/
function findDuplicatedInteger(arr) {

  // Set floor and ceiling
  var floor = 1;
  var ceiling = arr.length - 1; // length = n + 1

  while (floor < ceiling) {
    // Get ranges
    var midpoint = Math.floor(floor + (ceiling - floor)/2);
    var lowerRangeFloor = floor;
    var lowerRangeCeiling = midpoint;
    var upperRangeFloor = midpoint + 1;
    var upperRangeCeiling = ceiling;

    // Count items in a range
    var numberOfItemsInRange = 0;
    arr.forEach(function(item) {
      if (item >= lowerRangeFloor && item <= lowerRangeCeiling) {
        numberOfItemsInRange += 1;
      }
    });

    // Get distinct integers
    var distinctIntegersInLowerRange = lowerRangeCeiling - lowerRangeFloor + 1;

    // Compare the numbers and update the ranges
    if (numberOfItemsInRange > distinctIntegersInLowerRange) {
      floor = lowerRangeFloor;
      ceiling = lowerRangeCeiling;
    } else {
      floor = upperRangeFloor;
      ceiling = upperRangeCeiling;
    }
  }

  // Return floor
  return floor;

}

console.log(findDuplicatedInteger([1,2,3,4,5,6,7,8,9,9,10])); // 9
console.log(findDuplicatedInteger([1,2,2,3,4,5,6,7,8,9])); // 2