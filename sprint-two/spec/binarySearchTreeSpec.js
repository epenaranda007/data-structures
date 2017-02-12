describe('binarySearchTree', function() {
  var binarySearchTree;

  beforeEach(function() {
    binarySearchTree = BinarySearchTree(5);
  });

  it('should have methods named "insert", "contains", and "depthFirstLog', function() {
    expect(binarySearchTree.insert).to.be.a('function');
    expect(binarySearchTree.contains).to.be.a('function');
    expect(binarySearchTree.depthFirstLog).to.be.a('function');
  });

  it('should insert values at the correct location in the tree', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(6);
    expect(binarySearchTree.left.right.value).to.equal(3);
    expect(binarySearchTree.right.left.value).to.equal(6);
  });

  it('should have a working "contains" method', function() {
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    expect(binarySearchTree.contains(7)).to.equal(true);
    expect(binarySearchTree.contains(8)).to.equal(false);
  });

  it('should execute a callback on every value in a tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(3);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 3]);
  });

  it('Addl: should execute cd depthwise for non-linear tree using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };
    binarySearchTree.insert(2);
    binarySearchTree.insert(8);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);
    binarySearchTree.depthFirstLog(func);
    expect(array).to.eql([5, 2, 1, 3, 8, 7, 9]);
  }); 

  // Add'l Test
  it('Add\'l: the end of the tree should have no children', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);

    expect(binarySearchTree.left.right.left).to.equal(null);
    expect(binarySearchTree.left.right.right).to.equal(null);
    expect(binarySearchTree.left.left.left.left).to.equal(null);
    expect(binarySearchTree.left.left.left.right).to.equal(null);

  });

  it('Add\'l: a tree can have one or two children', function() {
    binarySearchTree.insert(3);
    binarySearchTree.insert(2);
    binarySearchTree.insert(4);
    binarySearchTree.insert(1);
    binarySearchTree.insert(8);
    binarySearchTree.insert(9);

    expect(binarySearchTree.left.left.value).to.equal(2);
    expect(binarySearchTree.left.right.value).to.equal(4);
    expect(binarySearchTree.right.right.value).to.equal(9);
    expect(binarySearchTree.right.left).to.equal(null);

  });

  // Advanced Tests

  it('Adv: should execute cd depthwise for BT with both left and right using "depthFirstLog"', function() {
    var array = [];
    var func = function(value) { array.push(value); };

    binarySearchTree.insert(2);
    binarySearchTree.insert(1);
    binarySearchTree.insert(3);
    binarySearchTree.insert(8);
    binarySearchTree.insert(7);
    binarySearchTree.insert(9);

    binarySearchTree.breadthFirstLog(func);
    console.log(array);

    expect(array).to.eql([5, 2, 8, 1, 3, 7, 9]);

  });

  

});
