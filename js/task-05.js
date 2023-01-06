const inputRef = document.querySelector('#name-input');
console.log("inputRef", inputRef);
const spanTextRef = document.querySelector('#name-output');

inputRef.addEventListener('input', onInputChange);
function onInputChange(event) {
    spanTextRef.textContent = event.currentTarget.value;
}