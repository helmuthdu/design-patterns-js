export class Hello {
  sayIt (value) {
    return this.formatText(value)
  }

  formatText (name) {
    return `Hello ${name}!`
  }
}

export class Hallo extends Hello {
  formatText (name) {
    return `Hallo ${name}!`
  }
}

export class Hola extends Hello {
  formatText (name) {
    return `¡Hola ${name}!`
  }
}
