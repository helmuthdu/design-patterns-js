const createDroid = {
  battle: () => new B1(),
  pilot: () => new Rx24(),
  default: () => new Droid()
}

const DroidFactory = {
  create (type) {
    return (createDroid[type] || createDroid.default)(type)
  }
}

class Droid {
  name = 'Unknown'
  type = 'Skeleton'

  info () {
    return `${this.name}, ${this.type} Droid`
  }
}

class B1 extends Droid {
  name = 'B1'
  type = 'Battle'
}

class Rx24 extends Droid {
  name = 'Rx24'
  type = 'Pilot'
}

export { DroidFactory }
