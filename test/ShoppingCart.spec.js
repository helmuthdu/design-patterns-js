import { expect } from 'chai'
import {
  guestStrategy,
  premiumStrategy,
  regularStrategy,
  ShoppingCart
} from '../src/behavioral/strategy/ShoppingCart'

describe('behavioral->strategy: ShoppingCart', () => {
  it('guest tests', () => {
    const guestCart = new ShoppingCart(guestStrategy)
    guestCart.setAmount(100)
    expect(guestCart.checkout()).to.equal(100)
  })

  it('regular tests', () => {
    const regularCart = new ShoppingCart(regularStrategy)
    regularCart.setAmount(100)
    expect(regularCart.checkout()).to.equal(90)
  })

  it('premium tests', () => {
    const premiumCart = new ShoppingCart(premiumStrategy)
    premiumCart.setAmount(100)
    expect(premiumCart.checkout()).to.equal(80)
  })
})
