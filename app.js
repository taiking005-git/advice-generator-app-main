const adiveId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const buttonDice = document.getElementById("buttonDice");

let adviceData = null;

const url = "https://api.adviceslip.com/advice";

async function dice() {
    buttonDice.innerHTML = `<i class="fa-solid fa-sync fa-spin"></i>`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            adiveId.textContent = data.slip.id;
            advice.textContent = data.slip.advice;
            buttonDice.innerHTML = `<img src="./images/icon-dice.svg" alt="dice" /> `
        })
}

dice()

buttonDice.onclick = function () {
    dice()
}
