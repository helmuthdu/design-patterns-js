function Clonable (name) {
  this.name = name
}

Clonable.prototype.clone = function () {
  return new Clonable(this.name)
}

module.exports = { Clonable }
