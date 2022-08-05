const adiveId = document.getElementById("adviceId");
const advice = document.getElementById("advice");
const buttonDice = document.getElementById("buttonDice");

let adviceData = null;

const url = "https://api.adviceslip.com/advice";

async function dice() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            adiveId.textContent = data.slip.id;
            advice.textContent = data.slip.advice;
            // console.log(data.slip)
        })
}

dice()

buttonDice.onclick = function () {
    dice()
}
