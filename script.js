"use strict";

let randomNumber = Math.floor(Math.random() * 20) + 1;
const startScore = 20;
document.querySelector(
  ".between"
).textContent = `(Between 1 and ${startScore})`;
let highestScore = 0;
let score = startScore;
document.querySelector(".score").textContent = startScore;
let userNumber;
const startMessage = "Start guessing...";
const TooLow = "📉Too LOW!!!";
const TooHigh = "📈Too HIGH!!!";
const lose = "👎You lOSE!!!";
const win = "🎉Correct number!!!";
const notHaveNumber = `You give me not a valid number😥 (please give me something between 1 and ${startScore})`;
const startColor = "#222";
const winColor = "#60b347";

const setMessage = message =>
  (document.querySelector(".message").textContent = message);

document.querySelector(".check").addEventListener("click", function () {
  userNumber = Number(document.querySelector(".guess").value);
  //   console.log(userNumber);
  if (userNumber > 1 && userNumber < startScore) {
    if (userNumber === randomNumber) {
      setMessage(win);
      document.body.style.backgroundColor = winColor;
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = randomNumber;
      if (highestScore < score) {
        document.querySelector(".highscore").textContent = score;
        highestScore = score;
      }
    } else if (Number(userNumber !== randomNumber && score !== 1)) {
      document.querySelector(".score").textContent = --score;
      randomNumber > userNumber ? setMessage(TooLow) : setMessage(TooHigh);
    } else {
      setMessage(lose);
      document.body.style.backgroundColor = "red";
    }
    userNumber = undefined;
  } else {
    setMessage(notHaveNumber);
  }
});

document.querySelector(".again").addEventListener("click", function () {
  setMessage(startMessage);
  document.querySelector(".score").textContent = startScore;
  document.body.style.backgroundColor = startColor;
  score = startScore;
  document.querySelector(".number").style.width = "15rem";
  randomNumber = Math.floor(Math.random() * 20) + 1;
});
