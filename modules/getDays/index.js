const ONE_DAY = 24 * 60 * 60 * 1000

const YEAR = typeof process.env.YEAR === 'string' ? parseInt(process.env.YEAR, 10) : new Date().getFullYear()
const MONTH = typeof process.env.MONTH === 'string' ? parseInt(process.env.MONTH, 10) : 11
const DAY = typeof process.env.DAY === 'string' ? parseInt(process.env.DAY, 10) : 30

const getDays = () => {
  const firstDate = new Date()
  const secondDate = new Date(YEAR, MONTH, DAY)
  return Math.floor(Math.abs((firstDate.getTime() - secondDate.getTime()) / ONE_DAY))
}

module.exports = getDays
