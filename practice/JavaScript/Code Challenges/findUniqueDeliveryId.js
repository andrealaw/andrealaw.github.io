/*

Solved by: Andrea Law
Date: 21 Aug 2017

*/function findUniqueDeliveryId(deliveryIds) {

  var uniqueDeliveryId = 0;

  deliveryIds.forEach(function(deliveryId) {
    uniqueDeliveryId ^= deliveryId;
  });

  return uniqueDeliveryId;
}

/**
Time complexity: O(n)
Space complexity: O(1)
*/

// test cases:
console.log(findUniqueDeliveryId([1,2,3,4,5,4,3,2,1])); // 5
//console.log(findUniqueDeliveryId[1,2,3,2,3,1]); // undefined
console.log(findUniqueDeliveryId([1,1])); // 0