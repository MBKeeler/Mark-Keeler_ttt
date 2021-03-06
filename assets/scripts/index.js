'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
// const gameLogic = require('./gameLogic')
const events = require('./auth/events')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
$(() => {
  events.addHandlers()
})

$(() => {
  $('.box_grid').on('click', events.clickSector)
  $('.box_grid').on('click', function () {
  //  console.log('Logging events from index.js: ', events)
  })
})
