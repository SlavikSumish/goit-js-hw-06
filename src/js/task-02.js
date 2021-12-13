const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const navEl = document.querySelector('#ingredients');

const element = ingredients.map(ingredient => {
  const navItemEl = document.createElement('li'); 
  navItemEl.textContent = ingredient;
  navItemEl.classList.add('item');
  return navItemEl;
});

navEl.append(...element);


// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент < li >. 
// Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul.ingredients.


