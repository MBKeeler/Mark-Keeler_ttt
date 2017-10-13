'use strict'

const store = require('../store')

// modify these functions to conform with ttt game api
const signUpSuccess = function (data) {
  console.log(data)
  $('#message3').html('You have signed up <span style="color:#00ff00">successfully</span>')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message3').html('Sign up has <span style="color:#ff0000">failed</span>')
}

// modify these functions to conform with ttt game api
const signInSuccess = function (data) {
  console.log(data)
  $('#message3').html('You have signed in <span style="color:green">successfully</span>')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message3').html('Sign In <span style="color:#ff0000">failed</span>')
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message3').html('You have signed out <span style="color:green">successfully</span>')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message3').html('Sign Out  <span style="color:#ff0000">Failed</span>')
}
const changePWSuccess = function () {
  $('#message3').html('You have <span style="color:green">successfully</span> changed your password')
  // need to clear memory of the user information which includes token and auth header
}

const changePWFailure = function (error) {
  console.error(error)
  $('#message3').html('Change of Password  <span style="color:#ff0000">Failed</span>')
}

// begin game logic messages
const displayGameTurn = function (turn) {
  $('#message3a').html(turn)
}

const sectorIsOccupied = function () {
  console.log('Sector is occupied')
  $('#message').html('<span style="color:#ff0000">Sector Already Occupied</span> Try Another Sector')
}

// create/save/get game
const createGameSuccess = function (data) {
  // show gameBoard
  store.game = data.game
}

const createGameFailure = function () {
// put game message here
}

const updateGame = function () {

}

const displayToken = function (cell, playerValue) {
  if (playerValue === 'o') {
    $(cell).html('<a href="https://imgur.com/unoLQ1V"><img src="https://i.imgur.com/unoLQ1V.jpg" title="source: imgur.com" class="gameTokenO"  alt=“Tie Figther” width=“100” height=“100”/></a>')
    $('#message').html('Sector is now under your control!  Well done captain O.</span>')
  } else {
    $(cell).html('<a href="https://imgur.com/z7sreVd"><img src="https://i.imgur.com/z7sreVd.jpg" title="source: imgur.com" class="gameTokenX" alt=“Xwing” width="100" height="110"/></a>')
    $('#message').html('Sector is now under your control!  Well done captain X.</span>')
  }
}

const displayWinnner = function (playerValue) {
//  console.log('displayWinnner was called')
  if (playerValue === 'o') {
    $('#message').html('The game is over.')
    $('#message2').html('<h4><span style="color:green">Player O</span> is the winner! </h4>')
    $('.box_grid').fadeOut(2500)
    $('#message2a').html('<form id="resetButton"><button type="submit" name="submit">Reset Game</button></form>').fadeIn(2000)
    $('#resetButton').on('submit', resetBoard)
  } else {
    $('#message').html('The game is over.')
    $('#message2').html('<h4><span style="color:green">Player X</span> is the winner!</h4>')
    $('.box_grid').fadeOut(2500)
    $('#message2a').html('<form id="resetButton"><button type="submit" name="submit">Reset Game</button></form>').fadeIn(2000)
  }
}

const displayGameOver = function () {
  // console.log('displayGameOver was called')
  $('#message').html('There are no more sectors to conquer and no winner.')
  $('#message2').html('<span style="color:#ff0000>Game Over!</span>')
  $('.box_grid').fadeOut(2500)
}

const resetBoard = function () {
  console.log('ui.js resetBoard called')
  $('.box_grid').fadeIn(2500)
  $('.box_grid').empty()
}

const showScore = function (xScore, oScore) {
  $('#message3b').html(xScore)
  $('#message3c').html(oScore)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePWSuccess,
  changePWFailure,
  createGameSuccess,
  createGameFailure,
  displayGameTurn,
  sectorIsOccupied,
  displayToken,
  displayWinnner,
  displayGameOver,
  resetBoard,
  showScore
}
