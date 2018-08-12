const getText = require('../modules/getText')

describe('getText', () => {
  it('should return a Promise with a string', () => {
    const promise = getText('hi')
    expect(promise).resolves.toBeType('string')
  })
})
