import { expect } from 'chai';
import { Person } from '../Person.es6';

describe('creational->singleton: Person.es6', () => {
  it('sanity', () => {
    const johnDoe = new Person();
    const maryKay = new Person();

    expect(johnDoe).to.equal(maryKay);
    // eslint-disable-next-line no-unused-expressions
    expect(johnDoe === maryKay).to.be.true;
  });
});
