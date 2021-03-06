'use strict'
const config = require('./config')
const store = require('./store')
const ui = require('./auth/ui.js')

// game turn tracker
window.gameTurn = 1

const currentGameTurn = function () {
  gameTurn++
  return gameTurn
}

// Our array for the Game board
let gameBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*']

// score containers
let playerXPoint = 0
let playerOPoint = 0
// score counter
const currentScore = function (player) {
  if (player === 'x') {
    playerXPoint = playerXPoint + 1
    // console.log('playerX: ', playerXPoint)
  } else {
    playerOPoint = playerOPoint + 1
    // console.log('playerO: ', playerOPoint)
  }
  ui.showScore(playerXPoint, playerOPoint)
}

// Reset the array when creating a new game
const resetGame = function () {
  // console.log('gamLogic gameReset Called')
  window.gameTurn = 1
  const array = gameBoard
  for (let i = 0; i < array.length; i++) {
    array[i] = '*'
  }
  gameBoard = array
}

// Check to see if sector is occupied
const occupiedSector = function (index) {
  const array = gameBoard
  // console.log('occupiedSectors array is: ', array)
  // console.log('occupiedSector index is:', index)
  if (array[index] === '*') {
    // console.log('unoccupied')
    return false
    // had to add this line because the event handler was picking up the player
    // image as a value and setting the index to undefined.  Originall I wanted
    // to set the player's image to a background image to avoid this problem
    // however background images proved to be a problem.
  } else if (array[index] === undefined) {
    return true
  } else {
    return true
  }
}

// Update gameBoardArray and primary logic in
const updateBoard = function (index, value) {
  // console.log('updateBoard index value ', index)
  const checkSector = occupiedSector(index)
  if (checkSector === false) {
    // console.log('we now assume sector is unoccupied and update the board', checkSector)
    gameBoard[index] = value
    // console.log('gameBoard index vlaue: ', value)
    ui.displayGameTurn(window.gameTurn)
    currentGameTurn()
    checkWinner(gameBoard)
    // currentGameTurn()
    return true
  } else {
    // console.log('we now know the sector is occcupied and we deliver a message', checkSector)
    return false
  }
}

// checks for any empty sectors - Not implemented
// const emptySectors = function (element) {
//   return element === '*'
// }
// const checkGameContinues = function () {
//   gameBoard.some(emptySectors)
// }

// Turn checker
const currentTurn = function (turn) {
  // console.log('currentTurn Called', turn)
  if (turn % 2 === 0) {
    $('#message5').html('Turn now belongs to player <span style="color:green">X</span>')
    return true
  } else {
    $('#message5').html('Turn now belongs to player <span style="color:green">O</span>')
    return false
  }
}

// Check winner function. First function written. Bloated code, but reliable
const checkWinner = function (array) {
  // console.log('checkWinner() has this array: ', array) // just checks to make sure function is called
  if (array[0] === 'x' && array[1] === 'x' && array[2] === 'x') { // begin row by row check
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[0] === 'o' && array[1] === 'o' && array[2] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (array[3] === 'x' && array[4] === 'x' && array[5] === 'x') {
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[3] === 'o' && array[4] === 'o' && array[5] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (array[6] === 'x' && array[7] === 'x' && array[8] === 'x') {
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[6] === 'o' && array[7] === 'o' && array[8] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (array[0] === 'x' && array[3] === 'x' && array[6] === 'x') { // begin column by column check
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[0] === 'o' && array[3] === 'o' && array[6] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (array[1] === 'x' && array[4] === 'x' && array[7] === 'x') {
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[1] === 'o' && array[4] === 'o' && array[7] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    return true
  } else if (array[2] === 'x' && array[5] === 'x' && array[8] === 'x') {
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[2] === 'o' && array[5] === 'o' && array[8] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (array[0] === 'x' && array[4] === 'x' && array[8] === 'x') { // begin diagonal check
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[0] === 'o' && array[4] === 'o' && array[8] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (array[2] === 'x' && array[4] === 'x' && array[6] === 'x') {
    // console.log('X is the winner')
    ui.displayWinnner('x')
    currentScore('x')
    store.win = true
    return true
  } else if (array[2] === 'o' && array[4] === 'o' && array[6] === 'o') {
    // console.log('O is the winner')
    ui.displayWinnner('o')
    currentScore('o')
    store.win = true
    return true
  } else if (window.gameTurn === 9) {
    // console.log('current game turn is: ', window.gameTurn)
    ui.boardFull()
    store.win = false
    return false
  } else {
    store.win = false
    return false
  }
}

module.exports = {
  gameTurn,
  gameBoard,
  resetGame,
  occupiedSector,
  //checkGameContinues,
  updateBoard,
  currentScore,
  checkWinner,
  currentTurn
}
