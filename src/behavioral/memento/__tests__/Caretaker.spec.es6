import { expect } from 'chai';
import { Caretaker, Dictionary } from '../Caretaker.es6';

describe('behavioral->memento: Caretaker.es6', () => {
  it('should create a list of words', () => {
    const caretaker = new Caretaker();
    caretaker.addMemento(Dictionary.create('hello'));
    caretaker.addMemento(Dictionary.create('hello world'));
    caretaker.addMemento(Dictionary.create('hello world !!!'));

    const result = Dictionary.restore(caretaker.getMemento(1));
    expect(result).to.equal('hello world');
  });
});
