/*

Question: There are 2 sorted arrays A and B of size n each. 
Write an algorithm to find the median of the array obtained 
after merging the above 2 arrays(i.e. array of length 2n). 

Time complexity: O(log(n))

Source: http://www.geeksforgeeks.org/median-of-two-sorted-arrays/
*/

function getMedian(arr1, arr2){
  
  if (arr1.length <= 0 && arr2.length <= 0){
    throw new Error("Need at least 1 integer to get the median.");
  }

  if (arr1.length === 1 && arr2.length === 1){
    return (arr1[0]+arr2[0])/2;
  }

  if (arr1.length === 2 && arr2.length === 2){
    return (Math.max(arr1[0], arr2[0]) + Math.min(arr1[1], arr2[1]))/2;
  }

  var i1 = Math.floor(arr1.length/2); // 5->2.5->2 ; 4->2
  var i2 = Math.floor(arr2.length/2);

  var m1 = arr1[i1];
  var m2 = arr2[i2];
  // console.log(m1);
  // console.log(m2);

  if (m1 === m2){
    return m1;
  }

  if (m1 > m2){
    arr1 = arr1.slice(0, i1);
    arr2 = arr2.slice(i2);
    return getMedian(arr1, arr2);
  }

  if (m1 < m2){
    arr1 = arr1.slice(i1);
    arr2 = arr2.slice(0, i2);
    return getMedian(arr1, arr2);
  }
}

var arr1 = [12,11,15,10,20];
var arr2 = [10,11,12,15,20];
getMedian(arr1, arr2); // 11.5

var arr1 = [12,11,15,10];
var arr2 = [10,11,12,15];
getMedian(arr1, arr2); // 11.5

var arr1 = [];
var arr2 = [];
getMedian(arr1, arr2); // Error
