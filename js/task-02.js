const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const elements = ingredients.map(ingredient => {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item')
  itemEl.textContent = ingredient;
  // console.log(ingredient);
  return itemEl;
})
  console.log(elements);

const ingredientsList = document.querySelector('#ingredients');
console.log("ingredientsList", ingredientsList)
ingredientsList.append(...elements);
