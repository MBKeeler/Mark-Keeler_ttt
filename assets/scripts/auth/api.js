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
  console.log('signOut called')
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const changePassWord = function (data) {
  console.log('signOut called')
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
const createGame = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// save game
const saveGame = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.user.token,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// get game info

const showGame = function (data) {
  console.log('data is ', data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.user.token,
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
  saveGame,
  showGame
}
