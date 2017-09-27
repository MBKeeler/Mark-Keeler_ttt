// game turn tracker

// create basic array for test purposes
let gameBoard = ['*', '*', '*', '*', '*', '*', '*', '*', '*']

// game over logic
// while each element of gameBoard[] has an "*" continue the game,
// check for winner
// return false for '*' in elements or true for no "*" OR true for a winner
const emptySectors = function (element, array) {
  return element === '*'
}

const checkGameContinues = function () {
  gameBoard.some(emptySectors)
}
// create stub of check winner function.
const checkWinner = function (array) {
  console.log('checkWinner() has this array: ', array) // just checks to make sure function is called
  if (array[0] && array[1] && array[2] === 'x') { // begin row by row check
    console.log('X is the winner')
  } else if (array[0] && array[1] && array[2] === 'o') {
    console.log('O is the winner')
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
  return true
}
