import { expect } from 'chai'
import {
  Cockpit,
  OffCommand,
  OnCommand,
  SpeedDownCommand,
  SpeedUpCommand,
  Turbine
} from '../src/behavioral/command/Cockpit.es6.js'

describe('behavioral->command: Cockpit.es6', () => {
  let turbine
  let cockpit

  beforeEach(() => {
    turbine = new Turbine()
  })

  it('should turn on', () => {
    const onCommand = new OnCommand(turbine)
    const cockpit = new Cockpit(onCommand)
    cockpit.execute()
    // eslint-disable-next-line no-unused-expressions
    expect(turbine.state).to.be.true
  })

  it('should turn off', () => {
    const offCommand = new OffCommand(turbine)
    const cockpit = new Cockpit(offCommand)
    cockpit.execute()
    // eslint-disable-next-line no-unused-expressions
    expect(turbine.state).to.be.false
  })

  it('should speed up', () => {
    const onCommand = new OnCommand(turbine)
    cockpit = new Cockpit(onCommand)
    cockpit.execute()

    const speedUp = new SpeedUpCommand(turbine)
    cockpit = new Cockpit(speedUp)
    cockpit.execute()

    expect(turbine.speed).to.equal(200)
  })

  it('should speed down', () => {
    const onCommand = new OnCommand(turbine)
    cockpit = new Cockpit(onCommand)
    cockpit.execute()

    const speedDown = new SpeedDownCommand(turbine)
    cockpit = new Cockpit(speedDown)
    cockpit.execute()

    expect(turbine.speed).to.equal(0)
  })

  it('should not change the speed', () => {
    const offCommand = new OffCommand(turbine)
    cockpit = new Cockpit(offCommand)
    cockpit.execute()

    const speedUp = new SpeedUpCommand(turbine)
    cockpit = new Cockpit(speedUp)
    cockpit.execute()

    const speedDown = new SpeedDownCommand(turbine)
    cockpit = new Cockpit(speedDown)
    cockpit.execute()

    expect(turbine.speed).to.equal(0)
  })
})
