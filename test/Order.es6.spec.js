import { expect } from 'chai'
import Order from '../src/behavioral/state/Order.es6.js'

describe('behavioral->state: Order.es6', () => {
  it('should change order status', () => {
    const order = new Order()
    expect(order.state.name).to.equal('waitingForPayment')
    order.nextState()
    expect(order.state.name).to.equal('shipping')
    order.nextState()
    expect(order.state.name).to.equal('delivered')
  })
})
