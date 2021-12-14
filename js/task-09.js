

const button = document.querySelector('body');
const colorEL = document.querySelector('.color');

button.addEventListener('click', changeColor);

function changeColor() {
  button.style.backgroundColor = getRandomHexColor();
  colorEL.textContent = button.style.backgroundColor;
};


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}







// Напиши скрипт, который изменяет цвета фона элемента < body >
//   через инлайн стиль при клике на button.change - color
//    и выводит значение цвета в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>
// Для генерации случайного цвета используй функцию getRandomHexColor.