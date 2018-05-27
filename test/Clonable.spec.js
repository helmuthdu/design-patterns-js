import { expect } from 'chai'
import { Clonable } from '../src/creational/prototype/Clonable'

describe('creational->prototype: Clonable', () => {
  it('should create a clone', () => {
    const clonable = new Clonable('me')
    const clone = clonable.clone()
    expect(clone.name).to.equal('me')
    expect(clone).to.be.instanceOf(Clonable)
    // eslint-disable-next-line no-unused-expressions
    expect(clone === clonable).to.be.false
  })
})
