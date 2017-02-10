

// Instantiate a new graph
var Graph = function() {
  this.container = {};

};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  var nod = {
    value: node,
    edges: {}
  };
  this.container[node] = nod;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  for (var key in this.container) {
    if (this.container[key].value === node) {
      return true;
    }
  }
  return false;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  for (var key in this.container) {
    var nodeEdges = this.container[key].edges;
    if (nodeEdges[node] !== undefined) {
      delete nodeEdges[node];
    } 
  }
  delete this.container[node];
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var fromHasEdge = false;
  var toHasEdge = false;
  if (this.container[fromNode] === undefined || this.container[toNode] === undefined) {
    return false;
  }

  if (this.container[fromNode].edges[toNode] !== undefined) {
    fromHasEdge = true;
  }
  if (this.container[toNode].edges[fromNode] !== undefined) {
    toHasEdge = true;
  }
  return fromHasEdge && toHasEdge;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  if (this.container[fromNode] !== undefined && this.container[toNode] !== undefined) {
    this.container[fromNode].edges[toNode] = fromNode;
    this.container[toNode].edges[fromNode] = toNode;
  }
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  delete this.container[fromNode].edges[toNode];
  delete this.container[toNode].edges[fromNode];
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  _.each(this.container, function(nodeObj) {
    cb(nodeObj.value);
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
    addNode: Constant
    contains: Linear
    removeNode: Linear
    hasEdge: Constant
    addEdge: Constant
    removeEdge: Constant
    forEachNode: Linear
 */


