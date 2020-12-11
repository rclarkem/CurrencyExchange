const currencyEleOne = document.querySelector('#currency-one');
const currencyEleTwo = document.querySelector('#currency-two');
const amountOne = document.querySelector('#amount-one');
const amountTwo = document.querySelector('#amount-two');
const rate = document.querySelector('#rate');
const swap = document.querySelector('#swap');

console.log(rate);

function calculate() {
  const currency_one = currencyEleOne.value;
  const currency_two = currencyEleTwo.value;
  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then((response) => response.json())
    .then((response) => {
      const rateOfSecond = response.rates[currency_two];
      amountTwo.value = (amountOne.value * rateOfSecond).toFixed(2);
      rate.innerText = `1 ${currency_one} = ${rateOfSecond} ${currency_two} `;
    });
}

currencyEleOne.addEventListener('change', calculate);
amountOne.addEventListener('input', calculate);
currencyEleTwo.addEventListener('change', calculate);
amountTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
  const temp = currencyEleOne.value;
  currencyEleOne.value = currencyEleTwo.value;
  currencyEleTwo.value = temp;
  calculate();
});

calculate();
