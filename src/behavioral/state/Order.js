function Order() {
  this.state = new WaitingForPayment();
}

Order.prototype.nextState = function() {
  this.state = this.state.next();
};

function WaitingForPayment() {
  this.name = 'waitingForPayment';
}

WaitingForPayment.prototype.next = function() {
  return new Shipping();
};

function Shipping() {
  this.name = 'shipping';
}

Shipping.prototype.next = function() {
  return new Delivered();
};

function Delivered() {
  this.name = 'delivered';
}

Delivered.prototype.next = function() {
  return this;
};

module.exports = Order;
