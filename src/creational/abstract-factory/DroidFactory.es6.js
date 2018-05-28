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

class Droid {
  name = ''
  type = ''

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
