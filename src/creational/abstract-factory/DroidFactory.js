const createDroid = {
  battle: () => new B1(),
  pilot: () => new Rx24(),
  default: () => {
    throw new TypeError('Unknown Droid Type')
  }
}

const DroidFactory = {
  create (type) {
    return (createDroid[type] || createDroid.default)()
  }
}

function Droid () {
}

Droid.prototype.info = function () {
  return `${this.name}, ${this.type} Droid`
}

function B1 () {
  this.name = 'B1'
  this.type = 'Battle'
}

B1.prototype = Object.create(Droid.prototype)

function Rx24 () {
  this.name = 'Rx24'
  this.type = 'Pilot'
}

Rx24.prototype = Object.create(Droid.prototype)

module.exports = { DroidFactory }
