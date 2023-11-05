const numberBank = [];
const odds = [];
const evens = [];

const form = document.querySelector("form");
const input = document.querySelector("input");
const sortOneButton = document.querySelector(".sortOne");
const sortAllButton = document.querySelector(".sortAll");

function addNumberToBank(e) {
  e.preventDefault();
  const number = Number(input.value);
  numberBank.push(number);
  input.value = "";
  render();
}
form.addEventListener("submit", addNumberToBank);

function sortOne() {
  const number = numberBank.pop();
  if (number % 2 === 0) {
    evens.push(number);
  } else {
    odds.push(number);
  }
  render();
}

function sortAll() {
  while (numberBank.length > 0) {
    sortOne();
  }
}

const numberBankEl = document.querySelector("#numberBank output");
const oddsEl = document.querySelector("#odds output");
const evensEl = document.querySelector("#evens output");

function render() {
  numberBankEl.textContent = numberBank;
  oddsEl.textContent = odds;
  evensEl.textContent = evens;
}

sortOneButton.addEventListener("click", sortOne);
sortAllButton.addEventListener("click", sortAll);
