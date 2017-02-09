var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  // newTree.children = null;  // fix me
  newTree.children = [];
  newTree = _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target, node) {
  var found = false;
  node = node || this;
  if (node.value === target) {
    return true;
  } else if (node.children.length > 0) {
    for (var i = 0; i < node.children.length; i++) {
      if (found) {
        break;
      }

      found = found || node.contains(target, node.children[i]);
    }
  }
  return found;
};



/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant O(1)
  contains: Linear
 */
