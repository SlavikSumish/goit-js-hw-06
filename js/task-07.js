const refs = {
     sizeText: document.querySelector('#font-size-control'),
     styleText: document.querySelector('#text'),
};
refs.sizeText.addEventListener('input', function() {
    refs.styleText.style.fontSize = this.value + 'px';
});













// Напиши скрипт, который реагирует на изменение
//  значения input#font - size - control(событие input)
//   и изменяет инлайн - стиль span#text обновляя свойство font - size.
//   В результате при перетаскивании ползунка будет меняться размер текста.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>