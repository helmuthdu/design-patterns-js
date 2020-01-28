import { expect } from 'chai';
import { BonusVisitor, Developer, Manager } from '../Employee.es6';

describe('behavioral->visitor: Employee.ex6', () => {
  it('should calculate the right bonus for each employee', () => {
    const employees = [];

    const john = new Developer(4000);
    const maria = new Developer(4000);
    const christian = new Manager(10000);

    employees.push(john);
    employees.push(maria);
    employees.push(christian);

    employees.forEach(e => {
      e.accept(BonusVisitor);
    });

    expect(john.bonus).to.equal(4000);
    expect(christian.bonus).to.equal(20000);
  });
});
