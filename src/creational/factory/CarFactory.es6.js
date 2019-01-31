const carModels = {
  ferrari: () => new Car('ferrari', 108000, 320),
  mercedes: () => new Car('mercedes', 111000, 240),
  default: type => {
    throw new TypeError(`Fail to create a new ${type}`);
  },
};

class CarFactory {
  create(type) {
    return (carModels[type] || carModels.default)(type);
  }
}

class Car {
  constructor(model, price, maxSpeed) {
    this.model = model;
    this.price = price;
    this.maxSpeed = maxSpeed;
  }
}

export { CarFactory };
