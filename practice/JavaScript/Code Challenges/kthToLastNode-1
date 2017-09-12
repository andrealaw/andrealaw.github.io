/*

Solved by: Andrea Law
Date: 21 Aug 2017

*/
function kthToLastNode(k, head) {
  
  if (k < 1) {
    throw new Error("Impossible to find less than first to last node: ", k);
  }

  // get the length of the list
  var listLength = 1;
  var currentNode = head;

  // traverse the whole list
  while (currentNode.next) {
    listLength++;
    currentNode = currentNode.next;
  }

  // if k is greater than the length of the list
  // return an Error
  if (k > listLength) {
    throw new Error("k is larger than the length of the list: k = ", k);
  }

  // return kth node to the last node
  var howFarToGo = listLength - k;

  currentNode = head;
  for (var i = 0; i < howFarToGo; i++) {
    currentNode = currentNode.next;
  }

  return currentNode;

}