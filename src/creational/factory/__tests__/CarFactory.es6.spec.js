import { expect } from 'chai';
import { CarFactory } from '../CarFactory.es6.js';

describe('creational->factory: CarFactory.es6', () => {
  it('should create a car', () => {
    const carFactory = new CarFactory();
    const ferrari = carFactory.create('ferrari');
    const mercedes = carFactory.create('mercedes');

    expect(ferrari.price).to.equal(108000);
    expect(mercedes.price).to.equal(111000);
    expect(ferrari.maxSpeed).to.equal(320);
    expect(mercedes.maxSpeed).to.equal(240);
  });

  it('should not create a car', () => {
    const carFactory = new CarFactory();
    expect(() => carFactory.create('bmw')).to.throw();
  });
});
