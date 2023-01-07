let counterValue = 0;
const btnDecrement = document.querySelector('[data-action="decrement"]')
const btnIncrement = document.querySelector('[data-action="increment"]')
const spanRef=document.querySelector('#value')

btnDecrement.addEventListener('click', onBtnDecrementClicked);
btnIncrement.addEventListener('click', onBtnIncrementClicked);

function onBtnDecrementClicked(event) {
    spanRef.textContent= counterValue -= 1;
}

function onBtnIncrementClicked(event) {
    spanRef.textContent= counterValue += 1;
}