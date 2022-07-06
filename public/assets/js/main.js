'use strict';

const write = document.querySelector(".js-main")
const btnTest = document.querySelector(".js-btn")
const pClue = document.querySelector(".js-clue")
const pTry = document.querySelector(".js-try")

const randomNumber = getRandomNumber(100);

function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

};
const changeText = () => {

    console.log(randomNumber);
    if (randomNumber === updateWrite()) {
        pClue.innerHTML = 'has ganado campeona'

    }
    else if (updateWrite() < randomNumber) {
        pClue.innerHTML = 'demasiado bajo'

    }
    else if (updateWrite() > randomNumber) {
        pClue.innerHTML = 'demasiado alto'

    }


};
const count_click = 0;
function count_click_add() {
    count_click += 1;
    pTry.innerHTML = count_click += 1;
}


function updateWrite() {
    const writeValue = write.value;
    return writeValue;
}

function handleClick(ev) {
    ev.preventDefault();
    updateWrite();
    updateTry();
    updateClue();
    changeText();

}

btnTest.addEventListener('click', handleClick);
//# sourceMappingURL=main.js.map
