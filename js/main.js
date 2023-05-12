// Write your DOM code here!

const btnR = document.querySelector(`.red`)
const btnW = document.querySelector(`.white`)
const btnB = document.querySelector(`.blue`)
const btnY = document.querySelector(`.yellow`)
let body = document.querySelector('body')


btnR.addEventListener('click', ()=> {
    body.style.backgroundColor = 'red'
})

btnW.addEventListener('click', ()=> {
    body.style.backgroundColor = 'white'
})

btnB.addEventListener('click', ()=> {
    body.style.backgroundColor = 'blue'
})

btnY.addEventListener('click', ()=> {
    body.style.backgroundColor = 'yellow'
})
