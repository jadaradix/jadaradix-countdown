const getDays = require('./modules/getDays')
const getText = require('./modules/getText')

const countdown = () => {
  const days = getDays()
  return getText(`${days} days left. NO SLACKING.`)
}

module.exports = countdown
