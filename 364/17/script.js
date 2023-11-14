let elems = document.querySelectorAll('.test')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    elems.forEach(elem => {
        let str = elem.textContent.substring(0, 15)

        elem.textContent = str + '...'

    })
})