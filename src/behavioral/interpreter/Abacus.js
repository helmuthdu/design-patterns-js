function AbacusSum(left, right) {
  this.left = left;
  this.right = right;
}

AbacusSum.prototype.interpret = function() {
  return this.left.interpret() + this.right.interpret();
};

function AbacusMin(left, right) {
  this.left = left;
  this.right = right;
}

AbacusMin.prototype.interpret = function() {
  return this.left.interpret() - this.right.interpret();
};

function AbacusValue(val) {
  this.val = val;
}

AbacusValue.prototype.interpret = function() {
  return this.val;
};

module.exports = { AbacusValue, AbacusMin, AbacusSum };
