class OrderStatus {
  constructor (name, nextStatus) {
    this.name = name
    this.nextStatus = nextStatus
  }

  next () {
    // eslint-disable-next-line new-cap
    return new this.nextStatus()
  }
}

class WaitingForPayment extends OrderStatus {
  constructor () {
    super('waitingForPayment', Shipping)
  }
}

class Shipping extends OrderStatus {
  constructor () {
    super('shipping', Delivered)
  }
}

class Delivered extends OrderStatus {
  constructor () {
    super('delivered', Delivered)
  }
}

class Order {
  constructor () {
    this.state = new WaitingForPayment()
  }

  nextState () {
    this.state = this.state.next()
  }
}

export default Order
