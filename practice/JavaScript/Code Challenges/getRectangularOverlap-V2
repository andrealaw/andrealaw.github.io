/*

getRectangularOverlap-V2

Time complexity: O(1)
Space complexity: O(1)

Solved by: Andrea Law
Date: 22 Aug 2017

*/

function getRangesOverlap(start1, length1, start2, length2) {
  var highestStartPoint = Math.max(start1, left2);
  var lowestEndPoint = Math.min(start1 + length1, start2 + length2);

  if (highestStartPoint >= lowestEndPoint) {
    return { startPoint: null, overlapLength: null};
  }

  var overlapLength = lowestEndPoint - highestStartPoint;

  return { startPoint: highestStartPoint, overlapLength: overlapLength };

}

function getRectangularOverlap(rectangle1, rectangle2) {
  
  // check if x-axis and y-axis are overlapping each other
  // return null if not overlap
  // return new x and width / new y and height of overlapped rectangle
  var isXOverlap = getRangesOverlap(rectangle1.leftX, rectangle1.width, rectangle2.leftX, rectangle2.width);
  var isYOverlap = getRangesOverlap(rectangle1.bottomY, rectangle1.height, rectangle2.bottomY, rectangle2.height);
  
  if (isXOverlap.overlapLength === null || isYOverlap.overlapLength === null) {
    return {
      leftX: null,
      bottomY: null,
      width: null,
      height: null,
    };
  } 
  
  return {
    leftX: isXOverlap.startPoint,
    bottomY: isYOverlap.startPoint,
    width: isXOverlap.overlapLength,
    height: isYOverlap.overlapLength,
  };
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