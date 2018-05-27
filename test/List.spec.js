import { expect } from 'chai'
import List from '../src/behavioral/iterator/List'

describe('behavioral->iterator: List', () => {
  it('sanity', () => {
    const numbers = new List([1, 2, 3])

    expect(numbers.next()).to.equal(1)
    expect(numbers.next()).to.equal(2)
    expect(numbers.next()).to.equal(3)
    expect(numbers.hasNext()).to.false
  })
})
