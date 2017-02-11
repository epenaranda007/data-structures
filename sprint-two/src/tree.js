var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  newTree.parent = null;
  newTree.children = [];
  newTree = _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  var child = Tree(value);
  child.parent = this;
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

treeMethods.addChild = function(value) {

};

/*
 * Complexity: What is the time complexity of the above functions?
  addChild: constant O(1)
  contains: Linear
 */

/*
verify that it exist using constains function
  if it doesnt return function
  if it does exist
    
*/