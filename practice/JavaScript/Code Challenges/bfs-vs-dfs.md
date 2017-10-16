There are two common ways to explore undirected graphs: 
depth-first search (DFS) and breadth-first search (BFS).

Breadth-first search is often compared with depth-first search.

# Breadth-first search (BFS)

## Advantages:
- A BFS will find the shortest path between the starting point and any other reachable node. A depth-first search will not necessarily find the shortest path.
## Disadvantages:
- A BFS on a binary tree generally requires more memory than a DFS.

Breadth-first search (BFS) is a method for exploring a tree or graph. In a BFS, you first explore all the nodes one step away, then all the nodes two steps away, etc.
Breadth-first search is like throwing a stone in the center of a pond. The nodes you explore "ripple out" from the starting point.

# Depth-first search (DFS)

## Advantages:
- Depth-first search on a binary tree generally requires less memory than breadth-first.
- Depth-first search can be easily implemented with recursion.

## Disadvantages:
- A DFS doesn't necessarily find the shortest path to a node, while breadth-first search does.

Depth-first search (DFS) is a method for exploring a tree or graph. In a DFS, you go as deep as possible down one path before backing up and trying a different one.
Depth-first search is like walking through a corn maze. You explore one path, hit a dead end, and go back and try a different one.
