function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  input: document.querySelector('input'),
  buttonCreate: document.querySelector('[data-create]'),
  buttonDestroy: document.querySelector('[data-destroy]'),
  divBox: document.querySelector('#boxes')
}
// console.log(refs.input);
// console.log(refs.buttonCreate);
// console.log(refs.buttonDestroy);
// console.log(refs.divBox);

refs.input.addEventListener('input', onInputChange);


function onInputChange(event) {
  // console.log(Number(event.currentTarget.value));;
  const amount = Number(event.currentTarget.value);
  
  return amount

}


refs.buttonCreate.addEventListener('click', createBoxes);

function createBoxes(amount) {
  const elements=[]
  for (let i = 0; i < 4; i++) {
    console.log(amount);

    let element = document.createElement('div');
    element.style.width=30+i*10+'px'
    element.style.height=30+i*10+'px'
    element.style.backgroundColor = getRandomHexColor()
    console.log(element);
    elements.push(element)
    refs.divBox.append(...elements);
    
  }
  
}