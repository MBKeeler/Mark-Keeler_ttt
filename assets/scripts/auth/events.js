'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const gameLogic = require('./gameLogic')

// Authentication handlers

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('sign-up', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// for sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('sign-in', data)
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// for signOut

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignOut: ', data)
  console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// code for Game UI handlers
// let's just get the grid to update
const clickSector = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('sector-click', data)
  sector = document.getElementById(sectorID)
  $(sectorID).click(function () {
    gameLogic.updateBoard(data)
  })
}


// handler definitions and module exports

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#sector-click div').on('click', clickSector)
}

module.exports = {
  addHandlers
}
