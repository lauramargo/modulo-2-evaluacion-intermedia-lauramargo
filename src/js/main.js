'use strict';

const write = document.querySelector(".js-main")
const btnTest = document.querySelector(".js-btn")
const pClue = document.querySelector(".js-clue")
const pTry = document.querySelector(".js-tryNumber")



function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

function compareNumber() {
    const writeValue = parseInt(write.value);

    if (randomNumber === writeValue) {
        pClue.innerHTML = 'Has ganado campeona'

    }
    else if (writeValue < randomNumber) {
        pClue.innerHTML = 'Demasiado bajo'

    }
    else {
        pClue.innerHTML = 'Demasiado alto'

    }
}

function countNumberTry() {
    counterTry = counterTry + 1;
    pTry.innerHTML = counterTry
}

function handleClick(ev) {
    ev.preventDefault();

    compareNumber();
    countNumberTry();

}
let counterTry = 0
const randomNumber = getRandomNumber(100);
console.log(randomNumber);
btnTest.addEventListener('click', handleClick);
