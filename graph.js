class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  // this function accepts a Node instance and adds it to the nodes property on the graph
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  // this function accepts an array of Node instances and adds them to the nodes property on the graph
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.addVertex(vertex);
    }
  }

  // this function accepts two vertices and updates their adjacent values to include the other vertex
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  // this function accepts two vertices and updates their adjacent values to remove the other vertex
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  // this function accepts a vertex and removes it from the nodes property, it also updates any adjacency lists that include that vertex
  removeVertex(vertex) {
    this.nodes.delete(vertex);
  }

  // this function returns an array of Node values using DFS
  depthFirstSearch(start) {
    let array = [];
    let stack = [start];
    let seen = new Set();

    while (stack.length > 0) {
      let start = stack.pop();

      if (!seen.has(start)) {
        array.push(start.value);
        seen.add(start);
        for (let node of start.adjacent) {
          stack.push(node);
        }
      }
    }

    return (array);
  }

  // this function returns an array of Node values using BFS
  breadthFirstSearch(start) {
    let array = [];
    let queue = [start];
    let seen = new Set();

    while (queue.length > 0) {
      let start = queue.shift();

      if (!seen.has(start)) {
        array.push(start.value);
        seen.add(start);
        for (let node of start.adjacent) {
          queue.push(node);
        }
      }
    }

    return (array);
  }
}

module.exports = {Graph, Node}
