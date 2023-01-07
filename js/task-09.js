function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnRef = document.querySelector('.change-color');
const spanRef = document.querySelector('.color');

btnRef.addEventListener('click', onBtnClicked);

function onBtnClicked() {
  spanRef.textContent = getRandomHexColor();
  document.body.style.backgroundColor=spanRef.textContent
}

