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
