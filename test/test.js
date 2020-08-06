import matchesCriteria from '../src/overview/entity/Filter.js';

mocha.setup('bdd');
const assert = chai.assert;

const webEvent = {
  eventName: "Web components",
  description: "Workshops",
  link: "http://github.workshop.com"
}

describe('overview.entity.Filter', function() {
  it('matchesCriteria_true_emptyEvent', function() {
    assert.isTrue(matchesCriteria({}));
  });

  it('matchesCriteria_true_webEvent_and_emptyFilter', function() {
    assert.isTrue(matchesCriteria(webEvent, ''));
  });

  it('matchesCriteria_true_webEvent_and_matchingFilter', function() {
    assert.isTrue(matchesCriteria(webEvent, 'http://github.workshop.com'));
  });
});

mocha.run();