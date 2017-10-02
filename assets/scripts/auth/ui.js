'use strict'

const store = require('../store')

// modify these functions to conform with ttt game api
const signUpSuccess = function (data) {
  console.log(data)
  $('#message').html('You have signed up <span style="color:#00ff00">successfully</span>')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').html('Sign up has <span style="color:#ff0000">failed</span>')
}

// modify these functions to conform with ttt game api
const signInSuccess = function (data) {
  console.log(data)
  $('#message').html('You have signed in <span style="color:green">successfully</span>')
  // we have to store the user data or header somwhere.  sto we will put it in ../store.js
  store.user = data.user
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').html('Sign In <span style="color:#ff0000">failed</span>')
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message').html('You have signed out <span style="color:green">successfully</span>')
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').html('Sign Out  <span style="color:#ff0000">Failed</span>')
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
    $(cell).html('<a href="https://imgur.com/unoLQ1V"><img src="https://i.imgur.com/unoLQ1V.jpg" title="source: imgur.com"  alt=“Tie Figther” width=“100” height=“100”/></a>')
    $('#message').html('Sector is now under your control!  Well done captain O.</span>')
  } else {
    $(cell).html('<a href="https://imgur.com/z7sreVd"><img src="https://i.imgur.com/z7sreVd.jpg" title="source: imgur.com" alt=“Xwing” width="100" height="110"/></a>')
    $('#message').html('Sector is now under your control!  Well done captain X.</span>')
  }
}

const displayWinnner = function (playerValue) {
//  console.log('displayWinnner was called')
  if (playerValue === 'o') {
    $('#message').html('The game is over.')
    $('#message2').html('<h4><span style="color:green">Player O</span> is the winner!</h4>')
    $('.box_grid').fadeOut(2500)
  } else {
    $('#message').html('The game is over.')
    $('#message2').html('<h4><span style="color:green">Player X</span> is the winner!</h4>')
    $('.box_grid').fadeOut(2500)
  }
}

const displayGameOver = function () {
  // console.log('displayGameOver was called')
  $('#message').html('There are no more sectors to conquer and no winner.')
  $('#message2').html('<span style="color:#ff0000>Game Over!</span>')
  $('.box_grid').fadeOut(2500)
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  displayGameTurn,
  sectorIsOccupied,
  displayToken,
  displayWinnner,
  displayGameOver
}
