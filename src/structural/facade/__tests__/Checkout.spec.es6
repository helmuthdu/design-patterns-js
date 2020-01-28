import { expect } from 'chai';
import { Checkout } from '../Checkout.es6';

describe('structural->facade: Checkout.es6', () => {
  it('should calculate checkout total', () => {
    const checkout = new Checkout();
    const result = checkout.calc(100);
    expect(result).to.equal(189.5);
  });
});
