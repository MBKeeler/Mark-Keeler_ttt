'use strict'

const store = require('../store')

// modify these functions to conform with ttt game api
const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('You have signed up <span style="color:green">successfully</span>')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Sign up has <span style="color:red">failed</span>')
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
  $('#message').html('Sign In <span style="color:red">failed</span>')
}

const signOutSuccess = function () {
  // console.log(data)
  $('#message').html('You have signed out <span style="color:green">successfully</span>')
  // need to clear memory of the user information which includes token and auth header
  store.user = null
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').html('Sign Out  <span style="color:red">Failed</span>')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure
}
