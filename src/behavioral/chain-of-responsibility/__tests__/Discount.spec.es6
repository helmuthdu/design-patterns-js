import { expect } from 'chai';
import { Discount, ShoppingCart } from '../Discount.es6';

describe('behavioral->chain-of-responsibility: ShoppingCart.es6', () => {
  let shoppingCart;
  let discount;

  beforeEach(() => {
    discount = new Discount();
    shoppingCart = new ShoppingCart();
  });

  it(' > $ 500', () => {
    shoppingCart.addProduct({ price: 999 });

    const totalDiscount = discount.calculate(shoppingCart.products);

    expect(totalDiscount).to.equal(0.1);
  });

  it('more than 3 products', () => {
    shoppingCart.addProduct({ price: 100 });
    shoppingCart.addProduct({ price: 100 });
    shoppingCart.addProduct({ price: 100 });
    shoppingCart.addProduct({ price: 100 });

    const resp = discount.calculate(shoppingCart.products);

    expect(resp).to.equal(0.05);
  });

  it('more than 3 products and > $ 500 ', () => {
    shoppingCart.addProduct({ price: 200 });
    shoppingCart.addProduct({ price: 100 });
    shoppingCart.addProduct({ price: 100 });
    shoppingCart.addProduct({ price: 100 });

    const resp = discount.calculate(shoppingCart.products);

    expect(resp.toFixed(2)).to.equal('0.15');
  });
});
