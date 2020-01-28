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
