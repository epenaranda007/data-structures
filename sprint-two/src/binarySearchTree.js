var BinarySearchTree = function(value) {
  var bstObj = Object.create(bstMethods);
  bstObj.value = value;
  bstObj.left = null;
  bstObj.right = null;

  return bstObj;
};

var bstMethods = {};

bstMethods.insert = function(value) {
  var node = new BinarySearchTree(value);
  if (node.value < this.value) {
    if (!this.left) {
      this.left = node;
    } else {
      this.left.insert(value);
    }
  } else if (node.value > this.value) {
    if (!this.right) {
      this.right = node;
    } else {
      this.right.insert(value);
    }
  }
};

bstMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.left && value < this.value) {
    return this.left.contains(value);
  } else if (this.right && value > this.value) {
    return this.right.contains(value);
  }
  return false;
};

bstMethods.depthFirstLog = function(cb) {
  cb(this.value);
  if (this.left) {
    this.left.depthFirstLog(cb);
  }
  if (this.right) {
    this.right.depthFirstLog(cb);
  }
};

bstMethods.breadthFirstLog = function(cb) {
  var valuesArray = [this.value];
  var result = [];
  var context = this;

  var fetchNodes = function(contxt) {
    var left = [];
    var right = [];
    var queue = [];
    //debugger;

    if (contxt.left) { //contxt && contxt.left
      left.push(contxt.left.value);
    }
    if (contxt.right) { //contxt && contxt.right
      right.push(contxt.right.value);
    }

    queue = left.concat(right); 

    if (contxt.left) { //contxt && contxt.left
      var leftFetch = fetchNodes(contxt.left);
      if (leftFetch) {  
        left.push(leftFetch);
      }
    }
    if (contxt.right) { //contxt && contxt.right
      var rightFetch = fetchNodes(contxt.right);
      if (rightFetch) {  
        right.push(rightFetch);
      }
    }
    
    queue = left.concat(right); 
    
    if (queue.length > 0) { return queue; }
    return;

  };
  //debugger;
  valuesArray = valuesArray.concat(fetchNodes(context));
  //debugger;
  //console.log(result);
  //_.flatten(collection, true);
  var currArrayLength = valuesArray.length;
  var counter = 0;
  var index = 0;
  while (counter < currArrayLength) { //debugger;
    if (!Array.isArray(valuesArray[index])) {
      result.push(valuesArray.splice(index, 1)[0]);
    } else {
      index++;
    }
    counter++;
    if (counter === currArrayLength) {
      counter = 0;
      valuesArray = _.flatten(valuesArray, true);
      currArrayLength = valuesArray.length;
      index = 0;
    }
  }
  //debugger;
  console.log(result);
  for (var i = 0; i < result.length; i++) {
    cb(result[i]);
  }
};


/*
 * Complexity: What is the time complexity of the above functions?
 insert: O(log n)
 contains: O(log n)
 depthFirstLog: O(n) 
*/

