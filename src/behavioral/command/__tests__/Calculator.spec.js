import { expect } from 'chai';
import { AddCommand, Calculator, DivisionCommand, MultiplyCommand, SubtractCommand } from '../Calculator';

describe('behavioral->command: Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  it('should do an addition operation', () => {
    const addCommand = new AddCommand(100);
    calculator.execute(addCommand);

    expect(calculator.getCurrentValue()).to.be.equal(100);
  });

  it('should do an subtraction operation', () => {
    const subtractCommand = new SubtractCommand(100);
    calculator.execute(subtractCommand);

    expect(calculator.getCurrentValue()).to.be.equal(-100);
  });

  it('should do an multiplication operation', () => {
    const addCommand = new AddCommand(100);
    const multiplyCommand = new MultiplyCommand(3);

    calculator.execute(addCommand);
    calculator.execute(multiplyCommand);

    expect(calculator.getCurrentValue()).to.be.equal(300);
  });

  it('should do an division operation', () => {
    const addCommand = new AddCommand(100);
    const divisionCommand = new DivisionCommand(5);

    calculator.execute(addCommand);
    calculator.execute(divisionCommand);

    expect(calculator.getCurrentValue()).to.be.equal(20);
  });

  it('should undo an operation', () => {
    const addCommand = new AddCommand(100);
    const divisionCommand = new DivisionCommand(5);

    calculator.execute(addCommand);
    calculator.execute(divisionCommand);

    calculator.undo();

    expect(calculator.getCurrentValue()).to.be.equal(100);
  });
});
