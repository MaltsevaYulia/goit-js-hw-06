function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  divBox: document.querySelector('#boxes')
}

refs.input.addEventListener('input', onInputChange);
refs.buttonCreate.addEventListener('click', createBoxes);
refs.buttonDestroy.addEventListener('click', destroyBoxes);

function onInputChange(event) {
  // // console.log(Number(refs.input.value));
  // const amount = Number(event.currentTarget.value);
  // return amount

}

function createBoxes(amount) {
  
  const elements=[]
  for (let i = 0; i < refs.input.value; i++) {

    let element = document.createElement('div');
    element.style.width=30+i*10+'px'
    element.style.height=30+i*10+'px'
    element.style.backgroundColor = getRandomHexColor()
    elements.push(element)
    refs.divBox.append(...elements);
  }
}

function destroyBoxes() {
  const divBoxElements = document.querySelectorAll('#boxes div')

  divBoxElements.forEach(element => {
    element.remove()
  });
  
}