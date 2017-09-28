'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./gameLogic')
const ui = require('./gameUi')

// let's just get the grid to update
const clickSector = function (sector) {
  sector = document.getElementById(sector)
  $(sector).click(function () {
    $(sector).attr('src', '../images/x.jpg')
  })
}

module.exports = {
  // addHandlers
}
