let elem = document.querySelector('#elem')
elem.addEventListener('click', () => {
    let text = elem.textContent
    let parent = elem.parentElement

    let input = document.createElement('input')
    input.value = text

    input.addEventListener('blur', () => {
        elem.textContent = input.value
        input.remove()
    })

    elem.textContent = ''
    parent.appendChild(input)
})