var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.children = [];
  newTree = _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  this.children.push(child);
};

treeMethods.contains = function(target) {
  var found = false;
  if (this.value === target) {
    return true;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      if (found) {
        return found;
      }
      found = found || this.children[i].contains(target);
    }
  }

  return found;
};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant O(1)
  contains: Linear
 */
