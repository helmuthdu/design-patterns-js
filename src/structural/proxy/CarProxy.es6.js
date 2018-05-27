class Car {
  drive () {
    return 'driving'
  }
}

class CarProxy {
  constructor (driver) {
    this.driver = driver
    this.drive = function () {
      if (driver.age < 18) return 'too young to drive'
      return new Car().drive()
    }
  }
}

class Driver {
  constructor (age) {
    this.age = age
  }
}

export { Car, CarProxy, Driver }
