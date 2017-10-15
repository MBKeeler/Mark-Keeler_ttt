'use strict'

const store = require('../store')

// begin authentication relate functions
const signUpSuccess = function (data) {
  // console.log(data)
  $('#message3').show().html('You have signed up <span style="color:#00ff00">successfully</span>. Now login to play.')
  $('#sign-up').fadeOut()
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message3').show().html('Sign up has <span style="color:#ff0000">failed</span>. Please try again.')
}

const signInSuccess = function (data) {
  // console.log(data)
  $('#message3').html('You have signed in <span style="color:green">successfully</span>')
  $('#sign-in').hide()
  $('#sign-up').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#create-game').show()
  $('#get-stats').show()
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message3').show().html('Sign In <span style="color:#ff0000">failed</span>. Please try again')
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message').html('You have signed out <span style="color:green">successfully</span>')
  $('#sign-in').show()
  $('#sign-up').show()
  $('#change-password').hide()
  $('#sign-out').hide()
  $('#get-stats').hide()
  $('.gameBoard').hide()
  $('#message3').empty().hide()
  $('#message4').empty().hide()
  $('#create-game').hide()
  $('#stats-display').empty().hide()
  $(':input', '#sign-in').val('')
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message3').html('Sign Out  <span style="color:#ff0000">Failed</span>')
}

const changePWSuccess = function () {
  $('#message3').show().html('You have <span style="color:green">successfully</span> changed your password')
  $(':input', '#change-password').val('')
}

const changePWFailure = function (error) {
  console.error(error)
  $('#message3').html('Change of Password  <span style="color:#ff0000">Failed</span>. Please try again.')
}

// begin game logic messages
const displayGameTurn = function (turn) {
  $('#message3a').html(turn)
}

const sectorIsOccupied = function () {
  // console.log('Sector is occupied')
  $('#message').html('<span style="color:#ff0000">Sector Already Occupied</span> Try Another Sector')
}

const boardFull = function () {
  $('#message').html('<span style="color:#ff0000">Board is full with no winner</span> Click Create a New Game to start again.')
  $('create-game').show()
}

// create/save/get game
const createGameSuccess = function (data) {
  // console.log('gameCreate success')
  $('.gameBoard').fadeIn(2000)
  $('.box_grid').empty()
  $('#message3').html('Game successfully  <span style="color:green">created</span>')
  store.game = data.game
  $('#create-game').hide()
  $('#message4').show()
  $('#message3a').show()
  $('#message').empty()
  $('#message2').empty()
  $('stats-display').empty().hide()
}

const createGameFailure = function () {
// put game message here
  $('#message3').html('Create game  <span style="color:#ff0000">failed</span>')
}

const updateGameSuccess = function () {
  $('#message3').html('Game successfully  <span style="color:green">updated</span>')
}

const updateGameFailure = function () {
  $('#message3').html('Update game  <span style="color:#ff0000">failed</span>')
}

const showGameSuccess = function () {
  $('.gameBoard').fadeIn(2500)
  $('#message3').html('Game successfully  <span style="color:green">loaded</span>')
}

const showGameFailure = function () {
  $('#message3').html('Game  <span style="color:#ff0000">failed</span> to load')
}

const showGameStatsSuccess = function (object) {
  //console.log('showGameStats', object)
  //console.log('games played: ', object.games.length)
  $('#stats-display').show().html('Total Number of Games Played is: ' + object.games.length)
}

const showGameStatsFailure = function () {
  $('#stats-display').html('Game statistics <span style="color:#ff0000">failed</span> to load')
}

// begin game board event funcitons
const displayToken = function (cell, playerValue) {
  // console.log('displayToken Called')
  if (playerValue === 'o') {
    $(cell).html('<a href="https://imgur.com/unoLQ1V"><img src="https://i.imgur.com/unoLQ1V.jpg" title="source: imgur.com" class="gameTokenO"  alt=“Tie Figther” width=“100” height=“100”/></a>')
    // $('#message').show().html('Sector is now under your control!  Well done captain O.</span>')
  } else {
    $(cell).html('<a href="https://imgur.com/z7sreVd"><img src="https://i.imgur.com/z7sreVd.jpg" title="source: imgur.com" class="gameTokenX" alt=“Xwing” width="100" height="110"/></a>')
    // $('#message').show().html('Sector is now under your control!  Well done captain X.</span>')
  }
}

const displayWinnner = function (playerValue) {
//  console.log('displayWinnner was called')
  if (playerValue === 'o') {
    $('#message').show().html('The game is over.')
    $('#message2').html('<h4><span style="color:green">Player O</span> is the winner! </h4>')
    $('.gameBoard').fadeOut(2500)
    $('#create-game').show()
  } else {
    $('#message').show().html('The game is over.')
    $('#message2').html('<h4><span style="color:green">Player X</span> is the winner!</h4>').fadeOut(4000)
    $('.gameBoard').fadeOut(2500)
    $('#create-game').show()
  }
}

const displayGameOver = function () {
  // console.log('displayGameOver was called')
  $('#message').html('There are no more sectors to conquer and no winner.')
  $('#message2').html('<span style="color:#ff0000>Game Over!</span>')
  $('.box_grid').fadeOut(2500)
}

const resetBoard = function () {
  // console.log('ui.js resetBoard called')
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
  updateGameSuccess,
  updateGameFailure,
  showGameSuccess,
  showGameFailure,
  showGameStatsSuccess,
  showGameStatsFailure,
  displayGameTurn,
  sectorIsOccupied,
  boardFull,
  displayToken,
  displayWinnner,
  displayGameOver,
  resetBoard,
  showScore
}
