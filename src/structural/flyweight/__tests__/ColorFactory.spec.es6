import { expect } from 'chai';
import { colorFactory } from '../ColorFactory.es6';

describe('structural->flyweight: ColorFactory.es6', () => {
  it('create a dictionary of unique colors', () => {
    colorFactory.create('RED');
    colorFactory.create('RED');
    colorFactory.create('RED');
    colorFactory.create('YELLOW');
    colorFactory.create('YELLOW');
    expect(Object.keys(colorFactory.colors)).to.have.lengthOf(2);
  });
});
