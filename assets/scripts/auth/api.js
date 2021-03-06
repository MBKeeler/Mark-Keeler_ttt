'use strict'

const config = require('../config')
const store = require('../store')

// before using you must modify functions to conform to game api
// pass on to events.js
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}

const signOut = function () {
  // console.log('signOut called')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassWord = function (data) {
//  console.log('signOut called')
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// create game
const createGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// save update game
const updateGame = function (gameData) {
//  console.log('gmaeData is ', gameData)
  return $.ajax({
    url: config.apiOrigin + 'games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: gameData
  })
}

// get game info
const getGameStats = function (data) {
  // console.log('getGameStats data is ', data)
  return $.ajax({
    url: config.apiOrigin + 'games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassWord,
  createGame,
  updateGame,
  getGameStats
}
