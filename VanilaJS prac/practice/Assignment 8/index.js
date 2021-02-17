const playBtn = document.querySelector("#playBtn");
const guessNum = document.querySelector("#guessNum");

const clickedDiv = document.querySelector("#clickedDiv");
const winlost = document.querySelector("#winlost");

function createRandomNum() {
  const printNum = document.querySelector("#printNum");

  const randumNum = Math.floor(Math.random() * printNum.value);

  return randumNum;
}

function playGame() {
  const randumNum = createRandomNum();

  clickedDiv.innerHTML = `You chose: ${guessNum.value}, the machine chose: ${randumNum}`;

  if (parseInt(guessNum.value, 10) === randumNum) {
    winlost.innerHTML = `You win!!`;
  } else {
    winlost.innerHTML = `You lost!!`;
  }
}

function init() {
  playBtn.addEventListener("click", function () {
    if (guessNum.value !== "") {
      playGame();
    }
  });
}
init();

