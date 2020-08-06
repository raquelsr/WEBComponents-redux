mocha.setup('bdd');

const assert = chai.assert;

describe('hello', () => {
  it('world', () => {
    assert.isTrue(true);
  });
});

mocha.run();