const categories = document.querySelectorAll('#categories .item');

console.log('Number of categories:', categories.length);
const categoriesTitle = document.querySelectorAll('.item h2');

categoriesTitle.forEach(category => {
    console.log('Category:', category.textContent);

    console.log('Elements:',category.nextElementSibling.children.length);
    
});






