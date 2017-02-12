var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    var node = Node(value);
    list[value] = node;
    
    if (list.head === null && list.tail === null) {
      list.tail = node;
      list.head = node;
    } else {
      node.previous = list.tail;
      list.tail.next = node;
      list.tail = node; 
    } 
  };

  list.removeHead = function() {
    var remHead = list.head;
    delete list.head;
    list.head = remHead.next;
    // list.head.previous = null;

    return remHead.value;
  };

  list.contains = function(target, node) {
    node = node || list.head;
    if (node.value === target) {
      return true;
    } else if (!node.next) {
      return false;
    } else {
      var nextNode = node.next;
      return list.contains(target, nextNode);     
    }
  };

  list.addToHead = function(value) {
    var node = Node(value);
    node.next = list.head;
    list.head.previous = node;
    list.head = node;
    //list.next = //prev
  };

  list.removeTail = function(value) {

  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;
  node.previous = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
    addToTail - constant
    removeHead - constant
    contains - linear
 */
