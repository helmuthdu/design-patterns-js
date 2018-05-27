function Equipment () {
  this.price = 0
}

Equipment.prototype.getPrice = function () {
  return this.price
}

Equipment.prototype.getName = function () {
  return this.name
}

// composition
function Composite () {
  this.equipments = []
}

Composite.prototype = Object.create(Equipment.prototype)

Composite.prototype.add = function (equipment) {
  this.equipments.push(equipment)
}

Composite.prototype.getPrice = function () {
  return this.equipments
    .map(equipment => equipment.getPrice())
    .reduce((a, b) => a + b)
}

function Cabinet () {
  Composite.call(this)
  this.name = 'Cabinet'
}

Cabinet.prototype = Object.create(Composite.prototype)

// -- leafs
function VideoCard () {
  this.name = 'Video Card'
  this.price = 300
}

VideoCard.prototype = Object.create(Equipment.prototype)

function HardDrive () {
  this.name = 'Hard Drive'
  this.price = 250
}

HardDrive.prototype = Object.create(Equipment.prototype)

function Memory () {
  this.name = 'Memory'
  this.price = 280
}

Memory.prototype = Object.create(Equipment.prototype)

module.exports = { Cabinet, VideoCard, HardDrive, Memory }
