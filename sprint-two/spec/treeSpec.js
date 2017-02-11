describe('tree', function() {
  var tree;

  beforeEach(function() {
    tree = Tree(0); //added value
  });

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
    expect(tree.addChild).to.be.a('function');
    expect(tree.contains).to.be.a('function');
    expect(tree.hasOwnProperty('value')).to.equal(true);
  });

  it('should add children to the tree', function() {
    tree.addChild(5);
    expect(tree.children[0].value).to.equal(5);
  });

  it('should return true for a value that the tree contains', function() {
    tree.addChild(5);
    expect(tree.contains(5)).to.equal(true);
  });

  it('should return false for a value that was not added', function() {
    tree.addChild(5);
    expect(tree.contains(6)).to.equal(false);
  });

  it('should be able to add children to a tree\'s child', function() {
    tree.addChild(5);
    tree.children[0].addChild(6);
    expect(tree.children[0].children[0].value).to.equal(6);
  });

  it('should correctly detect nested children', function() {
    tree.addChild(5);
    tree.addChild(6);
    tree.children[0].addChild(7);
    tree.children[1].addChild(8);
    expect(tree.contains(7)).to.equal(true);
    expect(tree.contains(8)).to.equal(true);
  });
  // Add extra tests here
  it('Add\'l: should detect correct number of children after adding multiple children', function() {
    tree.addChild(5);
    tree.addChild(622);
    tree.addChild(79272);
    tree.addChild(2452222);
    tree.addChild(32098226);

    expect(tree.children.length).to.equal(5);
  });

  it('Adv: Children should have proper parent', function() {
    tree.addChild(5);
    expect(tree.children[0].parent).to.equal(tree);
  });

  it('Adv: the root of the tree should have no parent', function() {
    tree.addChild(5);
    expect(tree.parent).to.equal(null);
  });

  it('Adv: testing getTree (assuming all trees have unique values)', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].addChild(5);
    var gotTree = tree.getTree(3);
    var gotOtherTree = tree.getTree(5);
    console.log(gotTree);
    expect(gotTree.value).to.equal(3);
    expect(gotOtherTree.value).to.equal(5);

  });

  it('Adv: testing removeFromParent (assuming all trees have unique values)', function() {
    tree.addChild(1);
    tree.addChild(2);
    tree.addChild(3);
    tree.children[0].addChild(4);
    tree.children[0].addChild(5);
    
    var removedChild = tree.removeFromParent(1);

    expect(removedChild.parent).to.equal(null);
    expect(tree.contains(1)).to.equal(false);
    expect(tree.contains(4)).to.equal(false);
    expect(tree.contains(5)).to.equal(false);

  });

});
