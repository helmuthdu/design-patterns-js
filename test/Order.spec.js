import { expect } from 'chai'
import Order from '../src/behavioral/state/Order'

describe('behavioral->state: Order', () => {
  it('should change order status', () => {
    const order = new Order()
    expect(order.state.name).to.equal('waitingForPayment')
    order.nextState()
    expect(order.state.name).to.equal('shipping')
    order.nextState()
    expect(order.state.name).to.equal('delivered')
    order.nextState()
    expect(order.state.name).to.equal('delivered')
  })
})
