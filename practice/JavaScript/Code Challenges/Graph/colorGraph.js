/*

Graph coloring with O(N + M) time where 
N is the number of nodes and M is the number of edges(neighbors) per node.

Edge cases:
- nodes with no edges
- cycle
- loop

Solved by: Andrea Law
Date: 18 Aug 2017

*/

function colorGraph(graph, colors) {
  graph.forEach(function(node) {

    if (node.neighbors.has(node)) {
      throw new Error("Legal coloring impossible for node with loop: " + node.label);
    }

    var illegalColors = new Set();

    node.neighbors.forEach(function(neighbor) {
      if (neighbor.color !== null) {
        illegalColors.add(neighbor.color);
      }
    });

    for (var i = 0; i < colors.length; i++) {
      var color = colors[i];

      if (!illegalColors.has(color)) {
        node.color = color;
        break;
      }
    }

  });
}

function GraphNode(label) {
  this.label = label;
  this.neighbors = new Set();
  this.color = null;
}

var a = new GraphNode("a");
var b = new GraphNode("b");
var c = new GraphNode("c");

a.neighbors.add(b);
b.neighbors.add(a);
c.neighbors.add(b);
b.neighbors.add(c);

var graph = [a, b, c];

colorGraph(graph, ["red", "green", "blue"]);
console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);