import { expect } from 'chai';
import { DroidFactory } from '../DroidFactory';

describe('creational->abstract-factory: DroidFactory', () => {
  it('should create a battle droid', () => {
    expect(DroidFactory.create('battle').info()).to.equal('B1, Battle Droid');
  });

  it('should create a pilot droid', () => {
    expect(DroidFactory.create('pilot').info()).to.equal('Rx24, Pilot Droid');
  });

  it('should create a skeleton droid', () => {
    expect(() => DroidFactory.create('jedi')).to.throw();
  });
});
