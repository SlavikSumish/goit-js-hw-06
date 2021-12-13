const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
  
    formData.forEach((name, value) => {
        console.log('onFormSubmit -> name', name);
        console.log('onFormSubmit -> value', value);
        this.reset();
    });
    
}





// Напиши скрипт управления формой логина.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>
// 1 Обработка отправки формы form.login-form должна быть по событию submit.
// 2.При отправке формы страница не должна перезагружаться.
// 3.Если в форме есть незаполненные поля, выводи alert с предупреждением о том,
//     что все поля должны быть заполнены.
// 4.Если пользователь заполнил все поля и отправил форму,
//     собери значения полей в обьект, где имя поля будет именем свойства,
//     а значение поля - значением свойства.Для доступа к элементам
//          формы используй свойство elements.
// 5.Выведи обьект с введенными данными в консоль и очисти значения полей
//  формы методом reset.