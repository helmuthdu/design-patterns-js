import { expect } from 'chai'
import { Airplane, TrafficTower } from '../src/behavioral/mediator/TrafficTower'

describe('behavioral->mediator: TrafficTower', () => {
  it('sanity', () => {
    const trafficTower = new TrafficTower()
    const airplanes = [10, 15, 55].map(
      value => new Airplane(value, trafficTower))

    expect(airplanes[0].requestPositions()).to.deep.equals([10, 15, 55])
  })
})
