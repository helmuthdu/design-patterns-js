import { expect } from 'chai';
import { Jedi, JediAdapter, Soldier } from '../JediAdapter.es6.js';

describe('structural->adapter: JediAdapter.es6', () => {
  it('should create a soldier and a jedi', () => {
    const stormtrooper = new Soldier(1);
    const yoda = new JediAdapter(new Jedi(10));
    expect(yoda.attack()).to.equal(stormtrooper.attack() * 1000);
  });
});
