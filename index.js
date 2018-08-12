#!/usr/bin/env node

const countdown = require('./countdown.js')

countdown()
  .then(text => {
    console.log(text)
  })
