let input = document.querySelector('#input');
let p = document.querySelector('#p');
let button = document.querySelector('#button');

button.addEventListener('click', function func () {
    let arr = input.value.split('');
    let arrRev = arr;
    
    let res= arr === arrRev.reverse() ? p.textContent = 'Читается одинаково' : p.textContent = 'Читается не одинаково';
})
