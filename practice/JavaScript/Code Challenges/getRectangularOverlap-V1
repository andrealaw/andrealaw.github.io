/*

getRectangularOverlap-V1

Time complexity: O(1)
Space complexity: O(1)

Solved by: Andrea Law
Date: 15 Aug 2017

*/

function getRectangularIntersection(rectangle1, rectangle2) {
  var rect1leftX = rectangle1.leftX;
  var rect1RightX = rect1leftX + rectangle1.width;
  var rect1BottomY = rectangle1.bottomY;
  var rect1TopY = rect1BottomY + rectangle1.height;
  
  var rect2leftX = rectangle2.leftX;
  var rect2RightX = rect2leftX + rectangle2.width;
  var rect2BottomY = rectangle2.bottomY;
  var rect2TopY = rect2BottomY + rectangle2.height;
  
  if (
      (
        ((rect2leftX >= rect1leftX) && (rect2leftX <= rect1RightX)) || ((rect2RightX >= rect1leftX) && (rect2RightX <= rect1RightX))
      ) && (
        ((rect2TopY >= rect1BottomY) && (rect2TopY <= rect1TopY)) || ((rect2BottomY >= rect1BottomY) && (rect2BottomY <= rect1TopY))
      )
    ){
    var intersection = {};
    intersection.leftX = Math.max(rect1leftX, rect2leftX);
    intersection.bottomY = Math.max(rect1BottomY, rect2BottomY);
    intersection.width = Math.min(rect1RightX, rect2RightX) - intersection.leftX;
    intersection.height = Math.min(rect1TopY, rect2TopY) - intersection.bottomY;
      
    return intersection; 
  }
}

var rect1 = {
  leftX: 0,
  bottomY: 0,
  width: 4,
  height: 4,
};

var rect2 = {
  leftX: 2,
  bottomY: 2,
  width: 4,
  height: 4,
};

console.log(getRectangularIntersection(rect1, rect2)); // 2, 2, 2, 2

rect2 = {
  leftX: 2,
  bottomY: -2,
  width: 4,
  height: 4,
};

console.log(getRectangularIntersection(rect1, rect2)); // 2, 0, 2, 2

rect2 = {
  leftX: -2,
  bottomY: -2,
  width: 4,
  height: 4,
};

console.log(getRectangularIntersection(rect1, rect2)); // 0, 0, 2, 2

rect2 = {
  leftX: -2,
  bottomY: 2,
  width: 4,
  height: 4,
};

console.log(getRectangularIntersection(rect1, rect2)); // 0, 2, 2, 2