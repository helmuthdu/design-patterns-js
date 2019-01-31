import { expect } from 'chai';
import { AbacusMin, AbacusSum, AbacusValue } from '../Abacus';

describe('behavioral->interpreter: Abacus', () => {
  it('should perform a math operation', () => {
    const result = new AbacusSum(new AbacusValue(100), new AbacusMin(new AbacusValue(100), new AbacusValue(50)));
    expect(result.interpret()).to.equal(150);
  });
});
