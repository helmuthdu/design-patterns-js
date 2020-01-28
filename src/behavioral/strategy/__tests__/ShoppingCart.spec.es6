import { expect } from 'chai';
import { guestStrategy, premiumStrategy, regularStrategy, ShoppingCart } from '../ShoppingCart.es6';

describe('behavioral->strategy: ShoppingCart.es6', () => {
  it('should apply guest discount', () => {
    const guestCart = new ShoppingCart(guestStrategy);
    guestCart.setAmount(100);
    expect(guestCart.checkout()).to.equal(100);
  });

  it('should apply regular discount', () => {
    const regularCart = new ShoppingCart(regularStrategy);
    regularCart.setAmount(100);
    expect(regularCart.checkout()).to.equal(90);
  });

  it('should apply premium discount', () => {
    const premiumCart = new ShoppingCart(premiumStrategy);
    premiumCart.setAmount(100);
    expect(premiumCart.checkout()).to.equal(80);
  });
});
