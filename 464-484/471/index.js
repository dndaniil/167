let tds = document.querySelectorAll('#table td')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    for (let td of tds) {
        td.textContent = +td.textContent * 2
    }
})
