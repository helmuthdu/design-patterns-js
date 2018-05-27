import { expect } from 'chai'
import {
  CheeseDecorator,
  Penne,
  SauceDecorator
} from '../src/structural/decorator/PastaDecorator.es6.js'

describe('structural->decorator: PastaDecorator.es6', () => {
  it('should check pasta price with ingredients', () => {
    const penne = new Penne()
    const penneWithSauce = new SauceDecorator(penne)
    const penneWithSauceAndCheese = new CheeseDecorator(penneWithSauce)

    expect(penne.getPrice()).to.equal(8)
    expect(penneWithSauce.getPrice()).to.equal(13)
    expect(penneWithSauceAndCheese.getPrice()).to.equal(16)
  })
})
