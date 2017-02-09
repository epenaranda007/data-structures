var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    list[value] = node;
    
    // nothing in the list
    if (list.head === null && list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      list.tail = node;
      list.head.next = node;
    }

    // if there stuff in the list
    
  };

  list.removeHead = function() {
    var remVal = list.head.value;
    var remHead = list.head;
    
    delete list.head;

    list.head = remHead.next;

    return remVal;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else if (node.next === null) {
      return false;
    } else {
      var nextNode = node.next;
      return list.contains(target, nextNode);     
    }
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
