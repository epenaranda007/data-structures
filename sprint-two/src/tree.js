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
//assumes tree has unique values
treeMethods.removeFromParent = function(value) {
  //traverse looking for the value
    //value node, use the node
  var child = this.getTree(value);
    //save the parent of the value node
  var parent = child.parent;
      //iterate thru the parents children to look for the value node
  for (var i = 0; i < parent.children.length; i++) {
    var ch = parent.children[i];
    if (child.value === ch.value) {
      parent.children.splice(i, 1); //splice the value node
      break;
    }
  }
  //set the parent property of value node to null
  child.parent = null;
  // return value node
  return child;

};

treeMethods.getTree = function (value, node) {
  var node = node | this;
  if (this.value === value) {
    return this;
  } else if (this.children.length > 0) {
    for (var i = 0; i < this.children.length; i++) {
      node = node || this.children[i].getTree(value);
    }
  }
  return node;
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