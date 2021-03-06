import { expect } from 'chai';
import { CheeseDecorator, Penne, SauceDecorator } from '../PastaDecorator.js';

describe('structural->decorator: PastaDecorator', () => {
  it('should check pasta price with ingredients', () => {
    const penne = new Penne();
    const penneWithSauce = new SauceDecorator(penne);
    const penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce);

    expect(penne.getPrice()).to.equal(8);
    expect(penneWithSauce.getPrice()).to.equal(13);
    expect(penneWithSauceAndCheese.getPrice()).to.equal(16);
  });
});
