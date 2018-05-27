const carModels = {
  ferrari: () => new Car('ferrari', 108000, 320),
  mercedes: () => new Car('mercedes', 111000, 240),
  default: (type) => {
    throw new TypeError(`Fail to create a new ${type}`)
  }
}

function CarFactory () {
}

CarFactory.prototype.create = function (type) {
  return (carModels[type] || carModels.default)(type)
}

function Car (model, price, maxSpeed) {
  this.model = model
  this.price = price
  this.maxSpeed = maxSpeed
}

module.exports = { CarFactory }
