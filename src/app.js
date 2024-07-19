/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generarCarta();
  cuentaRegresiva();
  document
    .getElementById("generate-btn")
    .addEventListener("click", generarCarta);
};

function generarCarta() {
  const symbol = ["♦", "♥", "♠", "♣"];
  const number = [
    "A",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "J",
    "Q",
    "K"
  ];

  const randomNumber = number[Math.floor(Math.random() * number.length)];
  const randomSymbol = symbol[Math.floor(Math.random() * symbol.length)];

  document.getElementById("number").innerHTML = randomNumber;
  document.getElementById("top-symbol").innerHTML = randomSymbol;
  document.getElementById("bottom-symbol").innerHTML = randomSymbol;

  const isRedSuit = randomSymbol === "♥" || randomSymbol === "♦";
  document.getElementById("top-symbol").style.color = isRedSuit
    ? "red"
    : "black";
  document.getElementById("bottom-symbol").style.color = isRedSuit
    ? "red"
    : "black";
}

function cuentaRegresiva() {
  let countdown = 10;
  const countdownElement = document.getElementById("countdown");

  setInterval(() => {
    countdownElement.innerHTML = countdown;
    if (countdown === 0) {
      countdown = 10;
      generarCarta();
    } else {
      countdown--;
    }
  }, 1000);
}
