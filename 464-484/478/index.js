let elems = document.querySelectorAll('#parent p')

for (let elem of elems) {
    let span = document.createElement('span')
    span.textContent = elem.textContent
    elem.textContent = ''
    elem.appendChild(span)
}

for (let elem of elems) {
    let span = elem.querySelector('span')

    span.addEventListener('click', function func() {
        let input = document.createElement('input')
        input.value = span.textContent

        span.textContent = ''
        span.appendChild(input)

        input.addEventListener('blur', () => {
            span.textContent = input.value

            span.addEventListener('click', func)
        })
        span.removeEventListener('click', func)
    })

    let remove = document.createElement('a')
    remove.href = ''
    remove.textContent = 'remove'

    remove.addEventListener('click', (e) => {
        e.preventDefault()
        elem.remove()
    })

    elem.appendChild(remove)
}
