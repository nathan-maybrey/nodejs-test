const expect = require('chai').expect;
const XO = require('./xo.js');

describe('xo', () => {
  it('should return true when number of x and o is equal in string, and all lowercase', () => {
    const result = XO('xoxo');
    expect(result).to.equal(true);
  });

  it('should return true when number of x and o is equal in string, and mixed cases', () => {
    const result = XO('XoOXxo');
    expect(result).to.equal(true);
  });

  it('should return false when number of x and o is different in string, and mixed cases', () => {
    const result = XO('XoOooxo');
    expect(result).to.equal(false);
  });

  it('should return true when number of x and o is equal in string, and mixed characters', () => {
    const result = XO('ahxObzXo');
    expect(result).to.equal(true);
  });

  it('should return true when there are no x or o in string', () => {
    const result = XO('sgbwejseusi');
    expect(result).to.equal(true);
  });
});
