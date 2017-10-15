'use strict'
const getFormFields = require(`../../../lib/get-form-fields`)
const store = require('../store')
const api = require('./api')
const ui = require('./ui')
const gameLogic = require('../gameLogic')
const events = require('../index')

// Authentication handlers

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
//  console.log('sign-up', data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// for sign in
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
//  console.log('sign-in', data)
//  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// for signOut

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log('onSignOut: ', data)
//  console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.signOutFailure)
}

// for change password
const onChangePassword = function (event) {
  event.preventDefault()
  console.log('change password ran!')

  const data = getFormFields(this)
  console.log(data)
  api.changePassWord(data)
    .then(ui.changePWSuccess)
    .catch(ui.changePWFailure)
}
// start code for game create/save/retrieve
const createGame = function (event) {
  event.preventDefault()
  // need ajax function to create game & will return data
  // with game property
  gameLogic.resetGame()
  api.createGame()
    .then(ui.createGameSuccess)
    .catch(ui.createGameFailure)
}

const saveGameState = function (event) {
  event.preventDefault()
//  console.log('saveGameState ran!')

  const data = getFormFields(this)
  api.changePassWord(data)
    .then(ui.saveGameSuccess)
    .catch(ui.saveGamFailure)
}

// code for Game UI handlers
// let's just get the grid to update
const clickSector = function (event) {
//  console.log('clickSector called')
  const boardCell = $(event.target).attr('id')
  event.preventDefault()
  // get the current turn
  const num = window.gameTurn
  console.log('gameTurn is ', num)
  // determine who's turn
  gameLogic.currentTurn(num)
  if (gameLogic.currentTurn(num) === true) {
  //  console.log(event.target, 'o')
    const sectorCheck = gameLogic.updateBoard(boardCell, 'o')
    if (sectorCheck === true) {
      // console.log('events.js', sectorCheck)
      // let gameData = updateGame object from API
      // api.updateGame(dataObject)
      // console.log('boardCell', boardCell)
      const gameData = {
        'game': {
          'cell': {
            'index': boardCell,
            'value': 'o'
          },
          'over': store.win
        }
      }

      api.updateGame(gameData)
      ui.displayToken(event.target, 'o')
    } else {
      ui.sectorIsOccupied()
    }
  } else {
    //  console.log(event.target, 'x')
    const sectorCheck = gameLogic.updateBoard(boardCell, 'x')
    if (sectorCheck === true) {
      // console.log('events.js', sectorCheck)
      // let data = updateGame object from API
      // api.updateGame(dataObject)
      // console.log('boardCell', boardCell)
      const gameData = {
        'game': {
          'cell': {
            'index': boardCell,
            'value': 'x'
          },
          'over': store.win
        }
      }
      api.updateGame(gameData)
      ui.displayToken(event.target, 'x')
    } else {
      // console.log('events.js', sectorCheck)
      ui.sectorIsOccupied()
    }
  }
}

// reset the game array and board
// const resetGameBoard = function (event) {
//   // console.log('reset game called')
//   event.preventDefault()
//   gameLogic.resetGame()
//   ui.resetBoard()
// }

const displayGameStats = function () {
  event.preventDefault()
  api.getGameStats()
    .then(ui.showGameStatsSuccess)
    .catch(ui.showGameStatsFailure)
}

// handler definitions and module exports

const addHandlers = function () {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#box_grid div').on('click', clickSector)
  // $('#resetButton').on('click', resetGameBoard)
  $('#create-game').on('click', createGame)
  $('#get-stats').on('click', displayGameStats)
}

module.exports = {
  addHandlers,
  clickSector,
  // resetGameBoard,
  saveGameState,
  displayGameStats
}
