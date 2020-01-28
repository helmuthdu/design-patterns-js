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
