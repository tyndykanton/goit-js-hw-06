const categoryEl = document.querySelectorAll('.item')
console.log('Number of categories', categoryEl.length);

const categoryList = categoryEl.forEach((element) => {
    console.log('Category:', element.firstElementChild.textContent);
    console.log('Element:', element.querySelectorAll('li').length);
})