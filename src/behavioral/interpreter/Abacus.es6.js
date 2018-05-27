class AbacusSum {
  constructor (left, right) {
    this.left = left
    this.right = right
  }

  interpret () {
    return this.left.interpret() + this.right.interpret()
  }
}

class AbacusMin {
  constructor (left, right) {
    this.left = left
    this.right = right
  }

  interpret () {
    return this.left.interpret() - this.right.interpret()
  }
}

class AbacusValue {
  constructor (val) {
    this.val = val
  }

  interpret () {
    return this.val
  }
}

export { AbacusValue, AbacusMin, AbacusSum }
