import { expect } from 'chai'
import { colorFactory } from '../src/structural/flyweight/ColorFactory'

describe('structural->flyweight: ColorFactory', () => {
  it('create a dictionary of unique colors', () => {
    colorFactory.create('RED')
    colorFactory.create('RED')
    colorFactory.create('RED')
    colorFactory.create('YELLOW')
    colorFactory.create('YELLOW')
    expect(Object.keys(colorFactory.colors)).to.have.lengthOf(2)
  })
})
