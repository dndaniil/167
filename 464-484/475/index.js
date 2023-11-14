let elem = document.querySelector('#elem')

elem.addEventListener('click', () => {
    let input = document.createElement('input')
    input.value = elem.textContent

    input.addEventListener('input', function() {
        elem.textContent = this.value
    })

    input.addEventListener('blur', function() {
        this.remove()
    })

    elem.parentElement.appendChild(input)
})
