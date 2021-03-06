/*

isBinaryTree primarily cares about 
whether a binary tree is superbalanced
where the depths between leaves are no more than one

Time complexity: O(n) worst case
Space complexity: O(n)

Solved by: Andrea Law
Date: 17 Aug 2017

*/
function isBinaryTree(rootNode) {
  
  // a variable with no nodes
  if (!rootNode) {
    return true;
  }

  // track number of depths
  var depths = [];

  // track number of nodes + level of depths
  var nodes = [];
  nodes.push([rootNode, 0]);

  // check each node while nodes is not empty
  while (nodes.length) {
    
    console.log("nodes: ", nodes);
    console.log("depths: ", depths);
    var currentNodePair = nodes.pop();
    var currentNode = currentNodePair[0];
    var currentDepth = currentNodePair[1];

    // if a leaf node is found, compare depths
    if (!currentNode.left && !currentNode.right) {
      if (depths.indexOf(currentDepth) < 0) {
        depths.push(currentDepth);

        if ((depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
          return false;
        }
      }
    }

    // else add new nodes to nodes with depth ++ 
    else {
      if (currentNode.left) {
        nodes.push([currentNode.left, currentDepth + 1]);
      }

      if (currentNode.right) {
        nodes.push([currentNode.right, currentDepth + 1]);
      }
    }

  }

  return true;
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

var noLeafNode;
console.log(isBinaryTree(noLeafNode)); // true

var node0 = new BinaryTreeNode(10);
console.log(isBinaryTree(node0)); // true

var node2 = new BinaryTreeNode(10);
var node3 = new BinaryTreeNode(10);
node0.left = node2;
node0.right = node3;
console.log(isBinaryTree(node0)); // true

var node4 = new BinaryTreeNode();
var node5 = new BinaryTreeNode();
var node6 = new BinaryTreeNode();
var node7 = new BinaryTreeNode();
node2.left = node4;
node4.left = node5;
node5.left = node6;
node6.left = node7;
console.log(isBinaryTree(node0)); // false
console.log("Node0: ", node0);

