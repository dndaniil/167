let elems = document.querySelectorAll('#parent li')

for (let elem of elems) {
    elem.addEventListener('click', () => {
        elem.classList.toggle('active')
    })
}