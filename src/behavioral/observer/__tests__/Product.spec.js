import { expect } from 'chai';
import { Fees, Product, Profit } from '../Product';

describe('behavioral->observer: Product', () => {
  it('should calculate product fees and profit', () => {
    const product = new Product();
    const fees = new Fees();
    const profit = new Profit();
    product.register(fees);
    product.register(profit);

    product.setBasePrice(100);
    product.unregister(fees);
    product.setBasePrice(50);
    expect(product.price).to.equal(100);
  });
});
