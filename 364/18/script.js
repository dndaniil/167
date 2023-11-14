let a = document.querySelectorAll('a')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    a.forEach(elem => {
        elem.textContent += '('+ elem.href +')';
    })
})
