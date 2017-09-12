/*

Solved by: Andrea Law
Date: 19 Aug 2017

*/

function isBinarySearchTree(treeNode) {
  var nodes = [];
  nodes.push({node: treeNode, lowerBound: -Infinity, upperBound: Infinity});

  while (nodes.length) {
    var nodeAndBounds = nodes.pop();
    var node = nodeAndBounds.node; 
    var lowerBound = nodeAndBounds.lowerBound;
    var upperBound = nodeAndBounds.upperBound;

    if (node.value <= lowerBound || node.value >= upperBound) {
      return false;
    }

    if (node.left) {
      nodes.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});
    }

    if (node.right) {
      nodes.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
    }
  }

  return true;
}

// test cases:

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

var a = new BinaryTreeNode(20);
a.insertLeft(10);
a.insertRight(25);
console.log(isBinarySearchTree(a)); // true

a.insertRight(15);
console.log(isBinarySearchTree(a)); // false