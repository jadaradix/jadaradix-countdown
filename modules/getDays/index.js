const oneDay = 24 * 60 * 60 * 1000

const getDays = () => {
  const firstDate = new Date()
  const secondDate = new Date(new Date().getFullYear(), 11, 30) // year, month, day
  return Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime()) / oneDay))
}

module.exports = getDays
