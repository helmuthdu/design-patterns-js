# Design Patterns JS

**[Behavioral](#behavioral)**
* [Chain Of Responsibility](#chain-of-responsibility)
* [Command](#command)
* [Interpreter](#interpreter)
* [Iterator](#iterator)
* [Mediator](#mediator)
* [Memento](#memento)
* [Observer](#observer)
* [State](#state)
* [Strategy](#strategy)
* [Template](#template)
* [Visitor](#visitor)

**[Creational](#creational)**
* [Abstract Factory](#abstract-factory)
* [Builder](#builder)
* [Factory](#factory)
* [Prototype](#prototype)
* [Singleton](#singleton)

**[Structural](#structural)**
* [Adapter](#adapter)
* [Bridge](#bridge)
* [Composite](#composite)
* [Decorator](#decorator)
* [Facade](#facade)
* [Flyweight](#flyweight)
* [Proxy](#proxy)



## behavioral
### Chain Of Responsibility
##### Discount.es6
```Javascript
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    this.products.push(product);
  }
}

class Discount {
  calculate(products) {
    const quantityDiscount = new QuantityDiscount();
    const priceDiscount = new PriceDiscount();
    const noDiscount = new NoDiscount();

    quantityDiscount.setNext(priceDiscount);
    priceDiscount.setNext(noDiscount);

    return quantityDiscount.exec(products);
  }
}

class QuantityDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    const result = products.length > 3 ? 0.05 : 0;

    return result + this.next.exec(products);
  }
}

class PriceDiscount {
  constructor() {
    this.next = null;
  }

  setNext(fn) {
    this.next = fn;
  }

  exec(products) {
    let result = 0;
    const total = products.reduce((a, b) => a + b.price, 0);

    if (total >= 500) {
      result = 0.1;
    }

    return result + this.next.exec(products);
  }
}

class NoDiscount {
  exec() {
    return 0;
  }
}

export { ShoppingCart, Discount };

```
##### Discount.js
```Javascript
function ShoppingCart() {
  this.products = [];
}

ShoppingCart.prototype.addProduct = function(product) {
  this.products.push(product);
};

function Discount() {}

Discount.prototype.calculate = function(products) {
  const quantityDiscount = new QuantityDiscount();
  const priceDiscount = new PriceDiscount();
  const noDiscount = new NoDiscount();

  quantityDiscount.setNext(priceDiscount);
  priceDiscount.setNext(noDiscount);

  return quantityDiscount.exec(products);
};

function QuantityDiscount() {
  this.next = null;
}

QuantityDiscount.prototype.setNext = function(fn) {
  this.next = fn;
};

QuantityDiscount.prototype.exec = function(products) {
  const result = products.length > 3 ? 0.05 : 0;

  return result + this.next.exec(products);
};

function PriceDiscount() {
  this.next = null;
}

PriceDiscount.prototype.setNext = function(fn) {
  this.next = fn;
};

PriceDiscount.prototype.exec = function(products) {
  let result = 0;
  const total = products.reduce((a, b) => a + b.price, 0);

  if (total >= 500) result = 0.1;

  return result + this.next.exec(products);
};

function NoDiscount() {}

NoDiscount.prototype.exec = function() {
  return 0;
};

module.exports = { ShoppingCart, Discount };

```

### Command
##### Calculator.es6
```Javascript
const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => x / y;

class Calculate {
  constructor(execute, undo, value) {
    this.execute = execute;
    this.undo = undo;
    this.value = value;
  }
}

export class AddCommand extends Calculate {
  constructor(value) {
    super(addition, subtraction, value);
  }
}

export class SubtractCommand extends Calculate {
  constructor(value) {
    super(subtraction, addition, value);
  }
}

export class MultiplyCommand extends Calculate {
  constructor(value) {
    super(multiplication, division, value);
  }
}

export class DivisionCommand extends Calculate {
  constructor(value) {
    super(division, multiplication, value);
  }
}

export class Calculator {
  current = 0;
  commands = [];

  execute(command) {
    this.current = command.execute(this.current, command.value);
    this.commands.push(command);
  }

  undo() {
    const command = this.commands.pop();
    this.current = command.undo(this.current, command.value);
  }

  getCurrentValue() {
    return this.current;
  }
}

```
##### Calculator.js
```Javascript
const addition = (x, y) => x + y;
const subtraction = (x, y) => x - y;
const multiplication = (x, y) => x * y;
const division = (x, y) => x / y;

const Calculate = function(execute, undo, value) {
  this.execute = execute;
  this.undo = undo;
  this.value = value;
};

const AddCommand = function(value) {
  return new Calculate(addition, subtraction, value);
};

const SubtractCommand = function(value) {
  return new Calculate(subtraction, addition, value);
};

const MultiplyCommand = function(value) {
  return new Calculate(multiplication, division, value);
};

const DivisionCommand = function(value) {
  return new Calculate(division, multiplication, value);
};

const Calculator = function() {
  let current = 0;
  const commands = [];

  return {
    execute: function(command) {
      current = command.execute(current, command.value);
      commands.push(command);
    },

    undo: function() {
      const command = commands.pop();
      current = command.undo(current, command.value);
    },

    getCurrentValue: function() {
      return current;
    },
  };
};

module.exports = {
  AddCommand,
  Calculator,
  DivisionCommand,
  MultiplyCommand,
  SubtractCommand,
};

```
##### Cockpit.es6
```Javascript
class Cockpit {
  constructor(command) {
    this.command = command;
  }

  execute() {
    this.command.execute();
  }
}

class Turbine {
  constructor() {
    this.state = false;
    this.speed = 0;
  }

  on() {
    this.state = true;
    this.speed = 100;
  }

  off() {
    this.state = false;
    this.speed = 0;
  }
}

class OnCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.on();
  }
}

class OffCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    this.turbine.off();
  }
}

class SpeedUpCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    if (!this.turbine.state) return;

    this.turbine.speed += 100;
  }
}

class SpeedDownCommand {
  constructor(turbine) {
    this.turbine = turbine;
  }

  execute() {
    if (!this.turbine.state) return;

    this.turbine.speed -= 100;
  }
}

export { Cockpit, Turbine, OnCommand, OffCommand, SpeedUpCommand, SpeedDownCommand };

```
##### Cockpit.js
```Javascript
function Cockpit(command) {
  this.command = command;
}

Cockpit.prototype.execute = function() {
  this.command.execute();
};

function Turbine() {
  this.speed = 0;
  this.state = false;
}

Turbine.prototype.on = function() {
  this.state = true;
  this.speed = 100;
};

Turbine.prototype.off = function() {
  this.speed = 0;
  this.state = false;
};

Turbine.prototype.speedDown = function() {
  if (!this.state) return;

  this.speed -= 100;
};

Turbine.prototype.speedUp = function() {
  if (!this.state) return;

  this.speed += 100;
};

function OnCommand(turbine) {
  this.turbine = turbine;
}

OnCommand.prototype.execute = function() {
  this.turbine.on();
};

function OffCommand(turbine) {
  this.turbine = turbine;
}

OffCommand.prototype.execute = function() {
  this.turbine.off();
};

function SpeedUpCommand(turbine) {
  this.turbine = turbine;
}

SpeedUpCommand.prototype.execute = function() {
  this.turbine.speedUp();
};

function SpeedDownCommand(turbine) {
  this.turbine = turbine;
}

SpeedDownCommand.prototype.execute = function() {
  this.turbine.speedDown();
};

module.exports = {
  Cockpit,
  Turbine,
  OnCommand,
  OffCommand,
  SpeedUpCommand,
  SpeedDownCommand,
};

```

### Interpreter
##### Abacus.es6
```Javascript
class AbacusSum {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() + this.right.interpret();
  }
}

class AbacusMin {
  constructor(left, right) {
    this.left = left;
    this.right = right;
  }

  interpret() {
    return this.left.interpret() - this.right.interpret();
  }
}

class AbacusValue {
  constructor(val) {
    this.val = val;
  }

  interpret() {
    return this.val;
  }
}

export { AbacusValue, AbacusMin, AbacusSum };

```
##### Abacus.js
```Javascript
function AbacusSum(left, right) {
  this.left = left;
  this.right = right;
}

AbacusSum.prototype.interpret = function() {
  return this.left.interpret() + this.right.interpret();
};

function AbacusMin(left, right) {
  this.left = left;
  this.right = right;
}

AbacusMin.prototype.interpret = function() {
  return this.left.interpret() - this.right.interpret();
};

function AbacusValue(val) {
  this.val = val;
}

AbacusValue.prototype.interpret = function() {
  return this.val;
};

module.exports = { AbacusValue, AbacusMin, AbacusSum };

```

### Iterator
##### List.es6
```Javascript
class List {
  constructor(el) {
    this.index = 0;
    this.elements = el;
  }

  next() {
    return this.elements[this.index++];
  }

  hasNext() {
    return this.index < this.elements.length;
  }
}

export default List;

```
##### List.js
```Javascript
function List(el) {
  this.index = 0;
  this.elements = el;
}

List.prototype = {
  next() {
    return this.elements[this.index++];
  },
  hasNext() {
    return this.index < this.elements.length;
  },
};

module.exports = List;

```

### Mediator
##### TrafficTower.es6
```Javascript
class TrafficTower {
  constructor() {
    this.airplanes = [];
  }

  requestPositions() {
    return this.airplanes.map(airplane => airplane.position);
  }
}

class Airplane {
  constructor(position, trafficTower) {
    this.position = position;
    this.trafficTower = trafficTower;
    this.trafficTower.airplanes.push(this);
  }

  requestPositions() {
    return this.trafficTower.requestPositions();
  }
}

export { TrafficTower, Airplane };

```
##### TrafficTower.js
```Javascript
function TrafficTower() {
  this.airplanes = [];
}

TrafficTower.prototype.requestPositions = function() {
  return this.airplanes.map(airplane => airplane.position);
};

function Airplane(position, trafficTower) {
  this.position = position;
  this.trafficTower = trafficTower;
  this.trafficTower.airplanes.push(this);
}

Airplane.prototype.requestPositions = function() {
  return this.trafficTower.requestPositions();
};

module.exports = { TrafficTower, Airplane };

```

### Memento
##### Caretaker.es6
```Javascript
class Memento {
  constructor(value) {
    this.value = value;
  }
}

const Dictionary = {
  create(val) {
    return new Memento(val);
  },
  restore(memento) {
    return memento.value;
  },
};

class Caretaker {
  constructor() {
    this.values = [];
  }

  addMemento(memento) {
    this.values.push(memento);
  }

  getMemento(index) {
    return this.values[index];
  }
}

export { Dictionary, Caretaker };

```
##### Caretaker.js
```Javascript
function Memento(value) {
  this.value = value;
}

const Dictionary = {
  create(val) {
    return new Memento(val);
  },
  restore(memento) {
    return memento.value;
  },
};

function Caretaker() {
  this.values = [];
}

Caretaker.prototype.addMemento = function(memento) {
  this.values.push(memento);
};

Caretaker.prototype.getMemento = function(index) {
  return this.values[index];
};

module.exports = { Dictionary, Caretaker };

```

### Observer
##### Product.es6
```Javascript
class Product {
  constructor() {
    this.price = 0;
    this.actions = [];
  }

  setBasePrice(val) {
    this.price = val;
    this.notifyAll();
  }

  register(observer) {
    this.actions.push(observer);
  }

  unregister(observer) {
    this.actions = this.actions.filter(el => el !== observer);
  }

  notifyAll() {
    return this.actions.forEach(el => {
      el.update(this);
    });
  }
}

class Fees {
  update(product) {
    product.price *= 1.2;
  }
}

class Profit {
  update(product) {
    product.price *= 2;
  }
}

export { Product, Fees, Profit };

```
##### Product.js
```Javascript
function Product() {
  this.price = 0;
  this.actions = [];
}

Product.prototype.setBasePrice = function(val) {
  this.price = val;
  this.notifyAll();
};

Product.prototype.register = function(observer) {
  this.actions.push(observer);
};

Product.prototype.unregister = function(observer) {
  this.actions = this.actions.filter(el => el !== observer);
};

Product.prototype.notifyAll = function() {
  return this.actions.forEach(el => {
    el.update(this);
  });
};

function Fees() {}

Fees.prototype.update = function(product) {
  product.price *= 1.2;
};

function Profit() {}

Profit.prototype.update = function(product) {
  product.price *= 2;
};

module.exports = { Product, Fees, Profit };

```

### State
##### Order.es6
```Javascript
class OrderStatus {
  constructor(name, nextStatus) {
    this.name = name;
    this.nextStatus = nextStatus;
  }

  next() {
    // eslint-disable-next-line new-cap
    return new this.nextStatus();
  }
}

class WaitingForPayment extends OrderStatus {
  constructor() {
    super('waitingForPayment', Shipping);
  }
}

class Shipping extends OrderStatus {
  constructor() {
    super('shipping', Delivered);
  }
}

class Delivered extends OrderStatus {
  constructor() {
    super('delivered', Delivered);
  }
}

class Order {
  constructor() {
    this.state = new WaitingForPayment();
  }

  nextState() {
    this.state = this.state.next();
  }
}

export default Order;

```
##### Order.js
```Javascript
function Order() {
  this.state = new WaitingForPayment();
}

Order.prototype.nextState = function() {
  this.state = this.state.next();
};

function WaitingForPayment() {
  this.name = 'waitingForPayment';
}

WaitingForPayment.prototype.next = function() {
  return new Shipping();
};

function Shipping() {
  this.name = 'shipping';
}

Shipping.prototype.next = function() {
  return new Delivered();
};

function Delivered() {
  this.name = 'delivered';
}

Delivered.prototype.next = function() {
  return this;
};

module.exports = Order;

```

### Strategy
##### ShoppingCart.es6
```Javascript
class ShoppingCart {
  constructor(discount) {
    this.discount = discount;
    this.amount = 0;
  }

  checkout() {
    return this.discount(this.amount);
  }

  setAmount(amount) {
    this.amount = amount;
  }
}

function guestStrategy(amount) {
  return amount;
}

function regularStrategy(amount) {
  return amount * 0.9;
}

function premiumStrategy(amount) {
  return amount * 0.8;
}

export { ShoppingCart, guestStrategy, regularStrategy, premiumStrategy };

```
##### ShoppingCart.js
```Javascript
function ShoppingCart(discount) {
  this.discount = discount;
  this.amount = 0;
}

ShoppingCart.prototype.setAmount = function(amount) {
  this.amount = amount;
};

ShoppingCart.prototype.checkout = function() {
  return this.discount(this.amount);
};

function guestStrategy(amount) {
  return amount;
}

function regularStrategy(amount) {
  return amount * 0.9;
}

function premiumStrategy(amount) {
  return amount * 0.8;
}

module.exports = {
  ShoppingCart,
  guestStrategy,
  regularStrategy,
  premiumStrategy,
};

```

### Template
##### Hello.es6
```Javascript
export class Hello {
  sayIt(value) {
    return this.formatText(value);
  }

  formatText(name) {
    return `Hello ${name}!`;
  }
}

export class Hallo extends Hello {
  formatText(name) {
    return `Hallo ${name}!`;
  }
}

export class Hola extends Hello {
  formatText(name) {
    return `¡Hola ${name}!`;
  }
}

```
##### Hello.js
```Javascript
function Hello() {}

Hello.prototype.sayIt = function(name) {
  return this.formatText(name);
};

Hello.prototype.formatText = function(name) {
  return `Hello ${name}!`;
};

function Hallo() {}

Hallo.prototype = Object.create(Hello.prototype);

Hallo.prototype.formatText = function(name) {
  return `Hallo ${name}!`;
};

function Hola() {}

Hola.prototype = Object.create(Hello.prototype);

Hola.prototype.formatText = function(name) {
  return `¡Hola ${name}!`;
};

module.exports = { Hallo, Hello, Hola };

```

### Visitor
##### Employee.es6
```Javascript
function BonusVisitor(employee) {
  if (employee instanceof Manager) {
    employee.bonus = employee.salary * 2;
  } else if (employee instanceof Developer) {
    employee.bonus = employee.salary;
  }
}

class Employee {
  bonus = 0;
  salary = 0;

  constructor(salary) {
    this.salary = salary;
  }

  accept(visitor) {
    visitor(this);
  }
}

class Manager extends Employee {}

class Developer extends Employee {}

export { Developer, Manager, BonusVisitor };

```
##### Employee.js
```Javascript
function BonusVisitor(employee) {
  if (employee instanceof Manager) {
    employee.bonus = employee.salary * 2;
  }
  if (employee instanceof Developer) {
    employee.bonus = employee.salary;
  }
}

function Employee(salary) {
  this.bonus = 0;
  this.salary = salary;
}

Employee.prototype.accept = function(visitor) {
  visitor(this);
};

function Manager(salary) {
  Employee.call(this, salary);
}

Manager.prototype = Object.create(Employee.prototype);

function Developer(salary) {
  Employee.call(this, salary);
}

Developer.prototype = Object.create(Employee.prototype);

module.exports = {
  Developer,
  Manager,
  BonusVisitor,
};

```


## creational
### Abstract Factory
##### DroidFactory.es6
```Javascript
const createDroid = {
  battle: () => new B1(),
  pilot: () => new Rx24(),
  default: () => {
    throw new TypeError('Unknown Droid Type');
  },
};

const DroidFactory = {
  create(type) {
    return (createDroid[type] || createDroid.default)();
  },
};

class Droid {
  name = '';
  type = '';

  info() {
    return `${this.name}, ${this.type} Droid`;
  }
}

class B1 extends Droid {
  name = 'B1';
  type = 'Battle';
}

class Rx24 extends Droid {
  name = 'Rx24';
  type = 'Pilot';
}

export { DroidFactory };

```
##### DroidFactory.js
```Javascript
const createDroid = {
  battle: () => new B1(),
  pilot: () => new Rx24(),
  default: () => {
    throw new TypeError('Unknown Droid Type');
  },
};

const DroidFactory = {
  create(type) {
    return (createDroid[type] || createDroid.default)();
  },
};

function Droid() {}

Droid.prototype.info = function() {
  return `${this.name}, ${this.type} Droid`;
};

function B1() {
  this.name = 'B1';
  this.type = 'Battle';
}

B1.prototype = Object.create(Droid.prototype);

function Rx24() {
  this.name = 'Rx24';
  this.type = 'Pilot';
}

Rx24.prototype = Object.create(Droid.prototype);

module.exports = { DroidFactory };

```

### Builder
##### RequestBuilder.es6
```Javascript
class Request {
  constructor() {
    this.url = '';
    this.method = '';
    this.payload = {};
  }
}

class RequestBuilder {
  constructor() {
    this.request = new Request();
  }

  forUrl(url) {
    this.request.url = url;
    return this;
  }

  useMethod(method) {
    this.request.method = method;
    return this;
  }

  payload(payload) {
    this.request.payload = payload;
    return this;
  }

  build() {
    return this.request;
  }
}

export { RequestBuilder };

```
##### RequestBuilder.js
```Javascript
function Request() {
  this.url = '';
  this.method = '';
  this.payload = {};
}

function RequestBuilder() {
  this.request = new Request();
}

RequestBuilder.prototype.forUrl = function(url) {
  this.request.url = url;
  return this;
};

RequestBuilder.prototype.useMethod = function(method) {
  this.request.method = method;
  return this;
};

RequestBuilder.prototype.payload = function(payload) {
  this.request.payload = payload;
  return this;
};

RequestBuilder.prototype.build = function() {
  return this.request;
};

module.exports = { RequestBuilder };

```

### Factory
##### CarFactory.es6
```Javascript
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

```
##### CarFactory.js
```Javascript
const carModels = {
  ferrari: () => new Car('ferrari', 108000, 320),
  mercedes: () => new Car('mercedes', 111000, 240),
  default: type => {
    throw new TypeError(`Fail to create a new ${type}`);
  },
};

function CarFactory() {}

CarFactory.prototype.create = function(type) {
  return (carModels[type] || carModels.default)(type);
};

function Car(model, price, maxSpeed) {
  this.model = model;
  this.price = price;
  this.maxSpeed = maxSpeed;
}

module.exports = { CarFactory };

```

### Prototype
##### Clonable.es6
```Javascript
class Clonable {
  constructor(name) {
    this.name = name;
  }

  clone() {
    return new Clonable(this.name);
  }
}

export { Clonable };

```
##### Clonable.js
```Javascript
function Clonable(name) {
  this.name = name;
}

Clonable.prototype.clone = function() {
  return new Clonable(this.name);
};

module.exports = { Clonable };

```

### Singleton
##### Person.es6
```Javascript
class Person {
  static instance = undefined;

  constructor() {
    if (typeof Person.instance === 'object') {
      return Person.instance;
    }
    Person.instance = this;
    return this;
  }
}

export { Person };

```
##### Person.js
```Javascript
function Person() {
  if (typeof Person.instance === 'object') {
    return Person.instance;
  }

  Person.instance = this;

  return this;
}

module.exports = { Person };

```


## structural
### Adapter
##### JediAdapter.es6
```Javascript
class Soldier {
  constructor(level) {
    this.level = level;
  }

  attack() {
    return this.level * 1;
  }
}

class Jedi {
  constructor(level) {
    this.level = level;
  }

  attackWithSaber() {
    return this.level * 100;
  }
}

class JediAdapter {
  constructor(jedi) {
    this.jedi = jedi;
  }

  attack() {
    return this.jedi.attackWithSaber();
  }
}

export { Soldier, Jedi, JediAdapter };

```
##### JediAdapter.js
```Javascript
function Soldier(lvl) {
  this.lvl = lvl;
}

Soldier.prototype.attack = function() {
  return this.lvl * 1;
};

function Jedi(lvl) {
  this.lvl = lvl;
}

Jedi.prototype.attackWithSaber = function() {
  return this.lvl * 100;
};

function JediAdapter(jedi) {
  this.jedi = jedi;
}

JediAdapter.prototype.attack = function() {
  return this.jedi.attackWithSaber();
};

module.exports = { Soldier, Jedi, JediAdapter };

```

### Bridge
##### Printers.es6
```Javascript
class Printer {
  constructor(ink) {
    this.ink = ink;
  }
}

class EpsonPrinter extends Printer {
  print() {
    return `Printer: Epson, Ink: ${this.ink.get()}`;
  }
}

class HPPrinter extends Printer {
  print() {
    return `Printer: HP, Ink: ${this.ink.get()}`;
  }
}

class Ink {
  constructor(type) {
    this.type = type;
  }

  get() {
    return this.type;
  }
}

class AcrylicInk extends Ink {
  constructor() {
    super('acrylic-based');
  }
}

class AlcoholInk extends Ink {
  constructor() {
    super('alcohol-based');
  }
}

export { EpsonPrinter, HPPrinter, AcrylicInk, AlcoholInk };

```
##### Printers.js
```Javascript
function Printer(ink) {
  this.ink = ink;
}

function EpsonPrinter(ink) {
  Printer.call(this, ink);
}

EpsonPrinter.prototype.print = function() {
  return `Printer: Epson, Ink: ${this.ink.get()}`;
};

function HPPrinter(ink) {
  Printer.call(this, ink);
}

HPPrinter.prototype.print = function() {
  return `Printer: HP, Ink: ${this.ink.get()}`;
};

function Ink(type) {
  this.type = type;
}

Ink.prototype.get = function() {
  return this.type;
};

function AcrylicInk() {
  Ink.call(this, 'acrylic-based');
}

AcrylicInk.prototype = Object.create(Ink.prototype);

function AlcoholInk() {
  Ink.call(this, 'alcohol-based');
}

AlcoholInk.prototype = Object.create(Ink.prototype);

module.exports = { EpsonPrinter, HPPrinter, AcrylicInk, AlcoholInk };

```

### Composite
##### Computer.es6
```Javascript
// Equipment
class Equipment {
  name = '';
  price = 0;

  getPrice() {
    return this.price;
  }

  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
}

// --- composite ---
class Composite extends Equipment {
  constructor() {
    super();
    this.equipments = [];
  }

  add(equipment) {
    this.equipments.push(equipment);
  }

  getPrice() {
    return this.equipments.map(equipment => equipment.getPrice()).reduce((a, b) => a + b);
  }
}

class Cabinet extends Composite {
  constructor() {
    super();
    this.setName('cabinet');
  }
}

// --- leafs ---
class VideoCard extends Equipment {
  constructor() {
    super();
    this.setName('Video Card');
    this.price = 300;
  }
}

class HardDrive extends Equipment {
  constructor() {
    super();
    this.setName('Hard Drive');
    this.price = 250;
  }
}

class Memory extends Equipment {
  constructor() {
    super();
    this.setName('Memory');
    this.price = 280;
  }
}

export { Cabinet, VideoCard, HardDrive, Memory };

```
##### Computer.js
```Javascript
function Equipment() {
  this.price = 0;
}

Equipment.prototype.getPrice = function() {
  return this.price;
};

Equipment.prototype.getName = function() {
  return this.name;
};

// composition
function Composite() {
  this.equipments = [];
}

Composite.prototype = Object.create(Equipment.prototype);

Composite.prototype.add = function(equipment) {
  this.equipments.push(equipment);
};

Composite.prototype.getPrice = function() {
  return this.equipments.map(equipment => equipment.getPrice()).reduce((a, b) => a + b);
};

function Cabinet() {
  Composite.call(this);
  this.name = 'Cabinet';
}

Cabinet.prototype = Object.create(Composite.prototype);

// -- leafs
function VideoCard() {
  this.name = 'Video Card';
  this.price = 300;
}

VideoCard.prototype = Object.create(Equipment.prototype);

function HardDrive() {
  this.name = 'Hard Drive';
  this.price = 250;
}

HardDrive.prototype = Object.create(Equipment.prototype);

function Memory() {
  this.name = 'Memory';
  this.price = 280;
}

Memory.prototype = Object.create(Equipment.prototype);

module.exports = { Cabinet, VideoCard, HardDrive, Memory };

```

### Decorator
##### PastaDecorator.es6
```Javascript
class Pasta {
  constructor() {
    this.price = 0;
  }

  getPrice() {
    return this.price;
  }
}

class Penne extends Pasta {
  constructor() {
    super();
    this.price = 8;
  }
}

class PastaDecorator extends Pasta {
  constructor(pasta) {
    super();
    this.pasta = pasta;
  }

  getPrice() {
    return this.pasta.getPrice();
  }
}

class SauceDecorator extends PastaDecorator {
  getPrice() {
    return super.getPrice() + 5;
  }
}

class CheeseDecorator extends PastaDecorator {
  getPrice() {
    return super.getPrice() + 3;
  }
}

export { Penne, SauceDecorator, CheeseDecorator };

```
##### PastaDecorator.js
```Javascript
function Pasta() {
  this.price = 0;
}

Pasta.prototype.getPrice = function() {
  return this.price;
};

function Penne() {
  this.price = 8;
}

Penne.prototype = Object.create(Pasta.prototype);

function SauceDecorator(pasta) {
  this.pasta = pasta;
}

SauceDecorator.prototype.getPrice = function() {
  return this.pasta.getPrice() + 5;
};

function CheeseDecorator(pasta) {
  this.pasta = pasta;
}

CheeseDecorator.prototype.getPrice = function() {
  return this.pasta.getPrice() + 3;
};

module.exports = { Penne, SauceDecorator, CheeseDecorator };

```

### Facade
##### Checkout.es6
```Javascript
class Checkout {
  constructor() {
    this.discount = new Discount();
    this.shipping = new Shipping();
    this.fees = new Fees();
  }

  calc(price) {
    price = this.discount.calc(price);
    price += this.fees.calc(price);
    price += this.shipping.calc();
    return price;
  }
}

class Discount {
  calc(value) {
    return value * 0.9;
  }
}

class Shipping {
  calc() {
    return 5;
  }
}

class Fees {
  calc(value) {
    return value * 1.05;
  }
}

export { Checkout };

```
##### Checkout.js
```Javascript
function Checkout() {}

Checkout.prototype.calc = function(price) {
  price = discount(price);
  price += fees(price);
  price += shipping();
  return price;
};

function discount(value) {
  return value * 0.9;
}

function shipping() {
  return 5;
}

function fees(value) {
  return value * 1.05;
}

module.exports = { Checkout };

```

### Flyweight
##### ColorFactory.es6
```Javascript
function Color(name) {
  this.name = name;
}

const colorFactory = {
  colors: {},
  create(name) {
    const color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);
    return this.colors[name];
  },
};

export { colorFactory };

```
##### ColorFactory.js
```Javascript
function Color(name) {
  this.name = name;
}

const colorFactory = {
  colors: {},
  create(name) {
    const color = this.colors[name];
    if (color) return color;

    this.colors[name] = new Color(name);
    return this.colors[name];
  },
};

module.exports = { colorFactory };

```

### Proxy
##### CarProxy.es6
```Javascript
class Car {
  drive() {
    return 'driving';
  }
}

class CarProxy {
  constructor(driver) {
    this.driver = driver;
    this.drive = function() {
      if (driver.age < 18) return 'too young to drive';
      return new Car().drive();
    };
  }
}

class Driver {
  constructor(age) {
    this.age = age;
  }
}

export { Car, CarProxy, Driver };

```
##### CarProxy.js
```Javascript
function Car() {}

Car.prototype.drive = function() {
  return 'driving';
};

function CarProxy(driver) {
  this.driver = driver;
  this.drive = function() {
    if (driver.age < 18) return 'too young to drive';
    return new Car().drive();
  };
}

function Driver(age) {
  this.age = age;
}

module.exports = { Car, CarProxy, Driver };

```



