import { expect } from 'chai'
import List from '../src/behavioral/iterator/List.es6'

describe('behavioral->iterator: List.es6', () => {
  it('should iterate over list', () => {
    const numbers = new List([1, 2, 3])

    expect(numbers.next()).to.equal(1)
    expect(numbers.next()).to.equal(2)
    expect(numbers.next()).to.equal(3)
    // eslint-disable-next-line no-unused-expressions
    expect(numbers.hasNext()).to.false
  })
})
