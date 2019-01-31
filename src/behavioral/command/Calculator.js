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
