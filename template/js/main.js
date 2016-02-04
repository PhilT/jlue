'use strict'

document.addEventListener('DOMContentLoaded', () => {
  var button = document.getElementById('button')
  button.addEventListener('click', () => {
    button.innerText = 'CLICKED!'
    window.setTimeout( () => {
      button.innerText = 'BUTTON'
    }, 5000)
  })
})
