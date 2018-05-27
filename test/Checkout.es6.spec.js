import { expect } from 'chai'
import { Checkout } from '../src/structural/facade/Checkout.es6.js'

describe('structural->facade: Checkout.es6', () => {
  it('should calculate checkout total', () => {
    const checkout = new Checkout()
    const result = checkout.calc(100)
    expect(result).to.equal(189.5)
  })
})
