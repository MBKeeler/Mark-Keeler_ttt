'use strict'

const store = require('../store')

// modify these functions to conform with ttt game api
const signUpSuccess = function (data) {
  console.log(data)
  $('#dialog').dialog()
  $('.modalMessage').html('You have signed up <span style="color:#00ff00">successfully</span>')
}

const signUpFailure = function (error) {
  console.error(error)
  $('.modalMessage').html('Sign up has <span style="color:#ff0000">failed</span>')
}

// modify these functions to conform with ttt game api
const signInSuccess = function (data) {
  console.log(data)
  $('#modalMessage').html('You have signed in <span style="color:green">successfully</span>')
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('.modalMessage').html('Sign In <span style="color:#ff0000">failed</span>')
}

const signOutSuccess = function () {
  // console.log(data)
  $('.modalMessage').html('You have signed out <span style="color:green">successfully</span>')
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('.modalMessage').html('Sign Out  <span style="color:#ff0000">Failed</span>')
}
const changePWSuccess = function (data) {
  console.log(data)
  $('.modalMessage').html('You have <span style="color:green">successfully</span> changed your password')
  // need to clear memory of the user information which includes token and auth header
  store.user = data.user
}

const changePWFailure = function (error) {
  console.error(error)
  $('.modalMessage').html('Change of Password  <span style="color:#ff0000">Failed</span>')
}

const changePasswordSuccess = function () {
  $('#message').text('Changed password successfully')
  console.log('changePassword success ran. and nothing was returned')
}

const changePasswordFailure = function (error) {
  $('#message').text('Error on change password')
  console.log('changePassword failure ran. error is :', error)
}

// begin game logic messages
const displayGameTurn = function (turn) {
  $('#message3a').html(turn)
}

const sectorIsOccupied = function () {
  console.log('Sector is occupied')
  $('#message').html('<span style="color:#ff0000">Sector Already Occupied</span> Try Another Sector')
}

// const displayToken = function (cell, playerValue) {
//   if (playerValue === 'o') {
//     $(cell).html('<img src="../assets/images/tiefighter.jpeg" alt="player O" height="100" width="110" align="middle">')
//   } else {
//     $(cell).html('<img src="../assets/images/xwing.jpeg" alt="player X" height="100" width="110" align="middle">')
//     $('#message').html('Sector is now under your control!  Well done captain X.</span>')
//   }
// }

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
  changePasswordSuccess,
  changePasswordFailure,
  displayGameTurn,
  sectorIsOccupied,
  displayToken,
  displayWinnner,
  displayGameOver,
  resetBoard,
  showScore
}
