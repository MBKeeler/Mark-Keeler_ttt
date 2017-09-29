'use strict'
const config = require('./config')
const store = require('./store')

// game turn tracker

const currentGameTurn = function (turn) {
  turn = turn + 1
  return turn
}

// create basic array for test purposes
let gameBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*']

// array to hold pathes to player game tokens
const gameTokens = ['../images/xwing.jpeg','../images/tiefighter.jpec']

// stub of create new game
const resetGame = function (array) {
  for (let i = 0; i < array.length; i++) {
    array[i] = '*'
    // need some jquery code to clear the board UI
  }
  gameBoard = array
}

const resetGameTurn = function () {
  turn = 1
  return turn
}

// update gameBoardArray
const updateBoard = function (index, value) {
  console.log(index)
  if (occupiedSector(gameBoard, index) === true) {
    $('#message').html('Sector Occupied <span style="color:red">Select Another Sector</span>')
  } else {
    gameBoard[index] = value
    $('#message').html('Sector is now under your control!  Well done captain.</span>')
    checkWinner(gameBoard)
    const turn = gameTurn()
    console.log('game turn is now set to: ', turn)
  }
}
// now update the UI with player token
// we need to pass the player's value (string x or o) and the div ID
const placeToken = function (value, id) {

}

// checks for any empty sectors
const emptySectors = function (element, index, array) {
  return element === '*'
}
const checkGameContinues = function () {
  gameBoard.some(emptySectors)
}

// check to see if sector is occupied

const occupiedSector = function (array, index) {
  console.log('occupiedSectors array is: ', array)
  console.log('occupiedSector index is:', index)
  if (array[index] === '*') {
    console.log('unoccupied')
    return false
  } else {
    console.log(index, ' is occupied')
    return true
  }
}

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
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[0] && array[1] && array[2] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[3] && array[4] && array[5] === 'x') {
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[3] && array[4] && array[5] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[6] && array[7] && array[8] === 'x') {
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[6] && array[7] && array[8] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[0] && array[3] && array[6] === 'x') { // begin column by column check
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[0] && array[3] && array[6] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[1] && array[4] && array[7] === 'x') {
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[1] && array[4] && array[7] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[2] && array[5] && array[8] === 'x') {
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[2] && array[5] && array[8] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[0] && array[4] && array[8] === 'x') { // begin diagonal check
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[0] && array[4] && array[8] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
    return true
  } else if (array[2] && array[4] && array[6] === 'x') {
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
    return true
  } else if (array[2] && array[4] && array[6] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
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
  currentGameTurn,
  gameBoard,
  occupiedSector,
  updateBoard,
  checkWinner,
  gameCreate,
  gameUpdate,
  gameRestore,
  currentTurn
}
