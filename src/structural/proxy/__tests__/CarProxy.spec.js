import { expect } from 'chai';
import { CarProxy, Driver } from '../CarProxy';

describe('structural->proxy: CarProxy', () => {
  it('should start driving', () => {
    const driver = new Driver(28);
    const car = new CarProxy(driver);
    expect(car.drive()).to.equal('driving');
  });

  it('should not allow under age to drive', () => {
    const kid = new Driver(10);
    const car = new CarProxy(kid);
    expect(car.drive()).to.equal('too young to drive');
  });
});
