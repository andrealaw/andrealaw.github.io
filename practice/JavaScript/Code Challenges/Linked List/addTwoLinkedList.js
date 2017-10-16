/*

Source: https://leetcode.com/problems/add-two-numbers/description/
Solved by: Andrea Law with JavaScript

Question:
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8

Edge cases and sample inputs:
1.linked lists with unequal lengths
2.empty linked lists as inputs
3.integer overflow, e.g. 9 + 8 > 10

Expected output

Learnt:
-be careful of typos, e.g. val vs value
-avoid error of “cannot find property of null”
-Must use Math.floor() to turn decimal numbers into integers

Time complexity : O(max(m, n)). Assume that m and n represents the length of list1 and list2
Space complexity : O(max(m, n)) + 1

*/ 

function ListNode(value){
  this.val = value;
  this.next = null;
}

function addTwoNumbers(list1, list2){
  var rootNode = new ListNode(0);
  var node1 = list1;
  var node2 = list2;
  var currentNode = rootNode;
  var carry = 0;
  while (node1 !== null || node2 !== null){
    var value1 = (node1 !== null) ? node1.val : 0;
    var value2 = (node2 !== null) ? node2.val : 0;
    
    var sum = carry + value1 + value2;
    currentNode.val = Math.floor(sum % 10);
    carry = Math.floor(sum / 10);
    
    // update current nodes
    if (node1 !== null) node1 = node1.next;
    if (node2 !== null) node2 = node2.next;
    if (node1 === null && node2 === null && carry === 0){
      currentNode.next = null;
      return rootNode;
    } 
    currentNode.next = new ListNode(carry);
    currentNode = currentNode.next;
  }
//  if (carry > 0){
//    currentNode.next = new ListNode(carry);
//  }
  return rootNode;
}

// When one list is longer than the other.
var l1 = new ListNode(3);
l1.next = new ListNode(4);
l1.next.next = new ListNode(2);
var l2 = new ListNode(4);
l2.next = new ListNode(6);
l2.next.next = new ListNode(5);

addTwoNumbers(l1, l2);

// When one list is null, which means an empty list.
var l1 = new ListNode();
var l2 = new ListNode(0);
l2.next = new ListNode(1);

addTwoNumbers(l1, l2);

var l1 = new ListNode(5);
var l2 = new ListNode(5);
addTwoNumbers(l1, l2);