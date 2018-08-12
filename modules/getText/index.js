const path = require('path')
const asciiArt = require('ascii-art')
asciiArt.Figlet.fontPath = path.join(__dirname, '..', '..', 'fonts/')

const getText = (text) => {
  return new Promise((resolve, reject) => {
    asciiArt.font(text, 'standard', 'black_bg+bold+bright_magenta', resolve)
  })
}

module.exports = getText
