const createDroid = {
  battle: () => new B1(),
  pilot: () => new Rx24(),
  default: () => new DroidSkeleton()
}

const DroidFactory = {
  create (type) {
    return (createDroid[type] || createDroid.default)(type)
  }
}

function DroidSkeleton () {
  this.name = 'Unknown'
  this.type = 'Skeleton'
}

DroidSkeleton.prototype.info = function () {
  return `${this.name}, ${this.type} Droid`
}

function B1 () {
  this.name = 'B1'
  this.type = 'Battle'
}

B1.prototype = Object.create(DroidSkeleton.prototype)

function Rx24 () {
  this.name = 'Rx24'
  this.type = 'Pilot'
}

Rx24.prototype = Object.create(DroidSkeleton.prototype)

module.exports = { DroidFactory }
