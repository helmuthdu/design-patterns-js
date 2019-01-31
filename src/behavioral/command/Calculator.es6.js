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
