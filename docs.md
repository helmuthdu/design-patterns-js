# Design Patterns JS

**[Behavioral](#behavioral)**
* [Chain Of Responsability](#chain-of-responsability)



## behavioral
### Chain Of Responsability
##### Discount.es6.js
```Javascript
class ShoppingCart {
  constructor () {
    this.products = []
  }

  addProduct (product) {
    this.products.push(product)
  }
}

class Discount {
  calculate (products) {
    const quantityDiscount = new QuantityDiscount()
    const priceDiscount = new PriceDiscount()
    const noDiscount = new NoDiscount()

    quantityDiscount.setNext(priceDiscount)
    priceDiscount.setNext(noDiscount)

    return quantityDiscount.exec(products)
  }
}

class QuantityDiscount {
  constructor () {
    this.next = null
  }

  setNext (fn) {
    this.next = fn
  }

  exec (products) {
    const result = products.length > 3 ? 0.05 : 0

    return result + this.next.exec(products)
  }
}

class PriceDiscount {
  constructor () {
    this.next = null
  }

  setNext (fn) {
    this.next = fn
  }

  exec (products) {
    let result = 0
    const total = products.reduce((a, b) => a + b.price, 0)

    if (total >= 500) {
      result = 0.1
    }

    return result + this.next.exec(products)
  }
}

class NoDiscount {
  exec () {
    return 0
  }
}

export { ShoppingCart, Discount }

```
##### Discount.js
```Javascript
function ShoppingCart () {
  this.products = []
}

ShoppingCart.prototype.addProduct = function (product) {
  this.products.push(product)
}

function Discount () {
}

Discount.prototype.calculate = function (products) {
  const quantityDiscount = new QuantityDiscount()
  const priceDiscount = new PriceDiscount()
  const noDiscount = new NoDiscount()

  quantityDiscount.setNext(priceDiscount)
  priceDiscount.setNext(noDiscount)

  return quantityDiscount.exec(products)
}

function QuantityDiscount () {
  this.next = null
}

QuantityDiscount.prototype.setNext = function (fn) {
  this.next = fn
}

QuantityDiscount.prototype.exec = function (products) {
  const result = products.length > 3 ? 0.05 : 0

  return result + this.next.exec(products)
}

function PriceDiscount () {
  this.next = null
}

PriceDiscount.prototype.setNext = function (fn) {
  this.next = fn
}

PriceDiscount.prototype.exec = function (products) {
  let result = 0
  const total = products.reduce((a, b) => a + b.price, 0)

  if (total >= 500) result = 0.1

  return result + this.next.exec(products)
}

function NoDiscount () {
}

NoDiscount.prototype.exec = function () {
  return 0
}

module.exports = { ShoppingCart, Discount }

```



