class Memento {
  constructor (value) {
    this.value = value
  }
}

const Dictionary = {
  create (val) {
    return new Memento(val)
  },
  restore (memento) {
    return memento.value
  }
}

class Caretaker {
  constructor () {
    this.values = []
  }

  addMemento (memento) {
    this.values.push(memento)
  }

  getMemento (index) {
    return this.values[index]
  }
}

export { Dictionary, Caretaker }
