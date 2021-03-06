import { expect } from 'chai';
import { Hallo, Hello, Hola } from '../Hello';

describe('behavioral->template: Hello', () => {
  it('should say hello in different languages', () => {
    const hello = new Hello();
    const hallo = new Hallo();
    const hola = new Hola();

    expect(hello.sayIt('John Doe')).to.equal('Hello John Doe!');
    expect(hallo.sayIt('John Doe')).to.equal('Hallo John Doe!');
    expect(hola.sayIt('John Doe')).to.equal('¡Hola John Doe!');
  });
});
