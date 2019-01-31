import { expect } from 'chai';
import { Checkout } from '../Checkout.js';

describe('structural->facade: Checkout', () => {
  it('should calculate checkout total', () => {
    const checkout = new Checkout();
    const result = checkout.calc(100);
    expect(result).to.equal(189.5);
  });
});
