let a = document.querySelectorAll('a')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    a.forEach(elem => {
        if (elem.href.startsWith('https://')) {
            elem.textContent += '-->'
        }
    })
})
