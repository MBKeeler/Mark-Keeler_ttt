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

// create basic array for test purposes
let gameBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*']

// stub of create new game
const resetGame = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = '*'
    // need some jquery code to clear the board UI
  }
  gameBoard = array
}

// check to see if sector is occupied

const occupiedSector = function (index) {
  const array = gameBoard
  console.log('occupiedSectors array is: ', array)
  console.log('occupiedSector index is:', index)
  if (array[index] === '*') {
    console.log('unoccupied')
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

// update gameBoardArray
const updateBoard = function (index, value) {
  console.log('updateBoard index value ', index)
  const checkSector = occupiedSector(index)
  if (checkSector === false) {
    console.log('we now assume sector is unoccupied and update the board', checkSector)
    gameBoard[index] = value
    checkWinner(gameBoard)
    currentGameTurn()
    // save game code here
    return true
  } else {
    console.log('we now know the sector is occcupied and we deliver a message', checkSector)
    return false
  }
}

// checks for any empty sectors
// const emptySectors = function (element, index, array) {
//   return element === '*'
// }
// const checkGameContinues = function () {
//   gameBoard.some(emptySectors)
// }

// turn checker
const currentTurn = function (turn) {
  if (turn % 2 === 0) {
    $('#message').html('Turn belongs to player <span style="color:green">O</span>')
    return true
  } else {
    $('#message').html('Turn belongs to player <span style="color:green">X</span>')
    return false
  }
}

// create stub of check winner function.
const checkWinner = function (array) {
  console.log('checkWinner() has this array: ', array) // just checks to make sure function is called
  if (array[0] && array[1] && array[2] === 'x') { // begin row by row check
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[0] && array[1] && array[2] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[3] && array[4] && array[5] === 'x') {
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[3] && array[4] && array[5] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[6] && array[7] && array[8] === 'x') {
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[6] && array[7] && array[8] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[0] && array[3] && array[6] === 'x') { // begin column by column check
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[0] && array[3] && array[6] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[1] && array[4] && array[7] === 'x') {
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[1] && array[4] && array[7] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[2] && array[5] && array[8] === 'x') {
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[2] && array[5] && array[8] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[0] && array[4] && array[8] === 'x') { // begin diagonal check
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[0] && array[4] && array[8] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else if (array[2] && array[4] && array[6] === 'x') {
    console.log('X is the winner')
    ui.displayWinnner('x')
    return true
  } else if (array[2] && array[4] && array[6] === 'o') {
    console.log('O is the winner')
    ui.displayWinnner('o')
    return true
  } else {
    return false
  }
}

// stub of game create server record
const gameCreate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    game: {
      id: store.game.id, // currently undefined
      cells: ['*', '*', '*', '*', '*', '*', '*', '*', '*'],
      over: false,
      player_x: {
        id: store.user.id,
        email: 'and@and.com'
      },
      player_o: null
    }
  })
}

// stub of game update
const gameUpdate = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.user.id,
    method: 'PATCH',
    data
  })
}

// stub of game restore
const gameRestore = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.user.id,
    method: 'GET',
    game
  })
}

module.exports = {
  gameTurn,
  gameBoard,
  occupiedSector,
  updateBoard,
  checkWinner,
  gameCreate,
  gameUpdate,
  gameRestore,
  currentTurn
}
