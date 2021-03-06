/*

Steps:
- instead of using a recursion, which has a risk of high call stack and stack overflow
- use a bottom-up approach
- start by making an array to store possible ways calculated for each value from smallest denominations to the largest
- initialise the array with zeros
- add 1 to waysOfChanges[0] as there is only one way to get 0 value

Dynamic programming + bottom-up approach

Time complexity: O(n)
Space complexity: O(n)

Solved by: Andrea Law
Date: 15 Aug 2017

*/
function getPossibleWaysOfChanges(value, denominations) {
  var waysOfChanges = [];

  for (var i = 0; i <= value; i++) {
    waysOfChanges[i] = 0;
  }

  waysOfChanges[0] = 1;

  denominations.forEach(function(coin) {
    for (var higherValue = coin; higherValue <= value; higherValue++) {
      //console.log(waysOfChanges);
      var remainder = higherValue - coin;
      waysOfChanges[higherValue] += waysOfChanges[remainder];
    }
  });
  //console.log(waysOfChanges);
  return waysOfChanges[value];

}

console.log(getPossibleWaysOfChanges(5,[1,2,5])); // 4
console.log(getPossibleWaysOfChanges(0,[1,2,5])); // 1