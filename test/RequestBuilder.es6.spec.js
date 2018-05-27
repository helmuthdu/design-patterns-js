import { expect } from 'chai'
import { RequestBuilder } from '../src/creational/builder/RequestBuilder.es6.js'

describe('creational->builder: RequestBuilder.es6', () => {
  it('should build request params', () => {
    const requestBuilder = new RequestBuilder()
    const url = 'http://something/users'
    const method = 'GET'
    const request = requestBuilder.forUrl(url)
      .useMethod(method)
      .payload(null)
      .build()

    expect(request.method).to.equal(method)
    expect(request.url).to.equal(url)
    // eslint-disable-next-line no-unused-expressions
    expect(request.payload).to.be.null
  })
})
