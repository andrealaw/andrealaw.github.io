/** 
 * Source: http://www.geeksforgeeks.org/write-a-recursive-function-to-print-reverse-of-a-linked-list/
 * 
 * Time complexity: O(n) linear
 * Space complexity: O(1)
*/

// JavaScript program to print reverse of a linked list
var LinkedList = function(){

  this.head = null; // head of list

  /* Linked list Node */
  function Node(data){
    this.data = data;
    this.next = null;
  }

  /* Utility Functions */
  /* Insert a new node in front of the list */
  this.push = function(data){
    var newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode; // build from back to front
  };
};

/* Function to print reverse of linked list */
function printReverse(nodeHead){
  if (nodeHead === null) return;

  // print list of head node
  printReverse(nodeHead.next);

  // After everything else is printed
  console.log(nodeHead.data);
}

/* Create a linked list for testing the above methods */
var lList = new LinkedList();
lList.push(4);
lList.push(3);
lList.push(2);
lList.push(1);

printReverse(lList.head);
/* This code is contributed by Andrea Law */
