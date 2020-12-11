const currencyEleOne = document.querySelector('#currency-one');
const currencyEleTwo = document.querySelector('#currency-two');
const amountOne = document.querySelector('#amount-one');
const amountTwo = document.querySelector('#amount-two');
const rate = document.querySelector('#rate');
const swap = document.querySelector('#swap');

function calculate() {
  const currency_one = currencyEleOne.value;
  const currency_two = currencyEleTwo.value;
  console.log(currency_one);
  console.log(currency_two);
}

currencyEleOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyEleTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);
