function Product() {
  this.price = 0;
  this.actions = [];
}

Product.prototype.setBasePrice = function(val) {
  this.price = val;
  this.notifyAll();
};

Product.prototype.register = function(observer) {
  this.actions.push(observer);
};

Product.prototype.unregister = function(observer) {
  this.actions = this.actions.filter(el => el !== observer);
};

Product.prototype.notifyAll = function() {
  return this.actions.forEach(el => {
    el.update(this);
  });
};

function Fees() {}

Fees.prototype.update = function(product) {
  product.price *= 1.2;
};

function Profit() {}

Profit.prototype.update = function(product) {
  product.price *= 2;
};

module.exports = { Product, Fees, Profit };
