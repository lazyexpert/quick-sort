const expect = require('chai').expect;

const quickSort = require('./index');

describe('Quick Sort', function() {
  it('should not fail with empty or one-element array', function(done) {
    try {
      quickSort([]);
      quickSort([1]);
      done();
    } catch(e) {
      console.error(e);
    }    
  });

  it('should sort array with even elements count', function() {
    const arr = quickSort([3, 2, 1, 4]);
    
    expect(arr).to.deep.equal([1, 2, 3, 4]);
  });

  it('should sort small array', function() {
    const arr = quickSort([3, 2, 1]);

    expect(arr).to.deep.equal([1, 2, 3]);
  });

  it('should sort small array', function() {
    const arr = quickSort([4, 5, 3, 2, 1]);

    expect(arr).to.deep.equal([1, 2, 3, 4, 5]);
  });

  it('should sort big array', function() {
    const arr = quickSort([3, 2, 1, 5, 4, 7, 6, 0, 9, 8]);

    expect(arr).to.deep.equal([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});
