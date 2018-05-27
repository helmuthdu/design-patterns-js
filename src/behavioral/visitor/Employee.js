function BonusVisitor (employee) {
  if (employee instanceof Manager) {
    employee.bonus = employee.salary * 2
  }
  if (employee instanceof Developer) {
    employee.bonus = employee.salary
  }
}

function Employee (salary) {
  this.bonus = 0
  this.salary = salary
}

Employee.prototype.accept = function (visitor) {
  visitor(this)
}

function Manager (salary) {
  Employee.call(this, salary)
}

Manager.prototype = Object.create(Employee.prototype)

function Developer (salary) {
  Employee.call(this, salary)
}

Developer.prototype = Object.create(Employee.prototype)

module.exports = {
  Developer, Manager, BonusVisitor
}
