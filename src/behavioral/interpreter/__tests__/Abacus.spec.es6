import { expect } from 'chai';
import { AbacusMin, AbacusSum, AbacusValue } from '../Abacus.es6';

describe('behavioral->interpreter: Abacus.es6', () => {
  it('should perform a math operation', () => {
    const result = new AbacusSum(new AbacusValue(100), new AbacusMin(new AbacusValue(100), new AbacusValue(50)));
    expect(result.interpret()).to.equal(150);
  });
});
