import { expect } from 'chai';
import { Person } from '../Person.js';

describe('creational->singleton: Person', () => {
  it('sanity', () => {
    const johnDoe = new Person();
    const maryKay = new Person();

    expect(johnDoe).to.equal(maryKay);
    // eslint-disable-next-line no-unused-expressions
    expect(johnDoe === maryKay).to.be.true;
  });
});
