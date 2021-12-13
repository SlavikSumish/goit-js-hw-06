const navElemItem = document.querySelectorAll('.item');
console.log('Number of categories:', navElemItem.length);

navElemItem.forEach(element => {
    const navElemTitle = element.querySelector('h2');
    const navElemNumb = element.querySelectorAll('li');

    console.log('Category:', navElemTitle.textContent);
    console.log('Elements:', navElemNumb.length);
});

