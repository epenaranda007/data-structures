describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.remove('Mel Gibson');
    expect(set.contains('Mel Gibson')).to.equal(false);
  });

  //Addtional Tests
  it('Add\'l: should return true if set contains a value', function() {
    set.add('The Predator');
    expect(set.contains('The Predator')).to.equal(true);
  });

  it('Add\'l: should return false if set does not contains a value', function() {
    set.add('The Predator');
    set.add('The Alien');
    set.remove('The Alien');
    expect(set.contains('The Alien')).to.equal(false);
  });

  //Advanced Tests

  it('Adv: should be able to handle strings and numbers', function() {
    set.add(1);
    set.add('1');
    set.remove('The Alien');
    expect(set.contains('The Alien')).to.equal(false);
    expect(set.contains(1)).to.equal(true);
    expect(set.contains('1')).to.equal(true);
  });

  it('Adv: should be able to handle objects of any type', function() {
    set.add(1);
    set.add('string');
    set.add(undefined);
    set.add(null);
    set.add(true);
    var obj = {1: 3};
    var arr = [6, 7];
    set.add(obj);
    set.add(arr);

    expect(set.contains(1)).to.equal(true);
    expect(set.contains('string')).to.equal(true);
    expect(set.contains(undefined)).to.equal(false);
    expect(set.contains(null)).to.equal(false);
    expect(set.contains(true)).to.equal(true);
    expect(set.contains(obj)).to.eql(true);
    expect(set.contains(arr)).to.eql(true);
  });

});
