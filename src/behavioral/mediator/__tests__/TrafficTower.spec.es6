import { expect } from 'chai';
import { Airplane, TrafficTower } from '../TrafficTower.es6';

describe('behavioral->mediator: TrafficTower.es6', () => {
  it('should get position of all airplanes', () => {
    const trafficTower = new TrafficTower();
    const airplanes = [10, 15, 55].map(value => new Airplane(value, trafficTower));

    expect(airplanes[0].requestPositions()).to.deep.equals([10, 15, 55]);
  });
});
