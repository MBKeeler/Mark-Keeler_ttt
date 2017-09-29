'use strict'
// game turn tracker
let turn = 1
// create basic array for test purposes
let gameBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*']

// update gameBoardArray
const updateBoard = function (index, value) {
  index = Number(index)
  console.log(index)
  gameBoard[index] = value
  $('#message').html('Sector is now under your control!  Well done captain.</span>')
}

const emptySectors = function (element, index, array) {
  return element === '*'
}
const checkGameContinues = function () {
  gameBoard.some(emptySectors)
}

// check to see if sector is occupied

const occupiedSector = function (array, index) {
  if (array[index] === '*') {
    console.log('unoccupied')
    return false
  } else if (array[index] === 'x') {
    console.log('occupied by: ', array[index])
    $('#message').html('Sector Occupied <span style="color:red">Select Another Sector</span>')
    return true
  } else if (array[index] === 'o') {
    console.log('occupied by: ', array[index])
    $('#message').html('Sector Occupied <span style="color:red">Select Another Sector</span>')
    return true
  }
}

// turn token
const currentTurn = function (turn) {
  if (turn % 2 === 0) {
    $('#message').html('Turn belongs to player <span style="color:green">O</span>')
    return true
  } else {
    $('#message').html('Turn belongs to player <span style="color:green">X</span>')
    return false
  }
//  turn = turn++
}

// create stub of check winner function.
const checkWinner = function (array) {
  console.log('checkWinner() has this array: ', array) // just checks to make sure function is called
  if (array[0] && array[1] && array[2] === 'x') { // begin row by row check
    console.log('X is the winner')
    $('#message').html('<span style="color:green">Player X</span> is the winner!')
  } else if (array[0] && array[1] && array[2] === 'o') {
    console.log('O is the winner')
    $('#message').html('<span style="color:green">Player O</span> is the winner!')
  } else if (array[3] && array[4] && array[5] === 'x') {
    console.log('X is the winner')
  } else if (array[3] && array[4] && array[5] === 'o') {
    console.log('O is the winner')
  } else if (array[6] && array[7] && array[8] === 'x') {
    console.log('X is the winner')
  } else if (array[6] && array[7] && array[8] === 'o') {
    console.log('O is the winner')
  } else if (array[0] && array[3] && array[6] === 'x') { // begin column by column check
    console.log('X is the winner')
  } else if (array[0] && array[3] && array[6] === 'o') {
    console.log('O is the winner')
  } else if (array[1] && array[4] && array[7] === 'x') {
    console.log('X is the winner')
  } else if (array[1] && array[4] && array[7] === 'o') {
    console.log('O is the winner')
  } else if (array[2] && array[5] && array[8] === 'x') {
    console.log('X is the winner')
  } else if (array[2] && array[5] && array[8] === 'o') {
    console.log('O is the winner')
  } else if (array[0] && array[4] && array[8] === 'x') { // begin diagonal check
    console.log('X is the winner')
  } else if (array[0] && array[4] && array[8] === 'o') {
    console.log('O is the winner')
  } else if (array[2] && array[4] && array[6] === 'x') {
    console.log('X is the winner')
  } else if (array[2] && array[4] && array[6] === 'o') {
    console.log('O is the winner')
  }
  return alert('')
}
