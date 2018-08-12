const getDays = require('../modules/getDays')

describe('getDays', () => {
  it('should return a number', () => {
    const days = getDays()
    expect(days).toBeType('number')
  })
})
