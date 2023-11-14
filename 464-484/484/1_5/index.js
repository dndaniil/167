let body = document.querySelector('body')
let ul = document.createElement('ul')
let arr = [1, 2, 3, 4, 5]

for (let elem of arr) {

    let li = document.createElement('li')
    let span = document.createElement('span')
    span.textContent = elem

    li.appendChild(span)
    span.addEventListener('click', func)
    addLineDecorationA(li)
    addRemoveForLiA(li)

    ul.appendChild(li)
}

body.appendChild(ul)
createInput()

function createInput() {
    let input = document.createElement('input')
    body.appendChild(input)
    input.addEventListener('blur', () => {

        let li = document.createElement('li')
        let span = document.createElement('span')

        span.textContent = input.value
        input.value = ''

        li.appendChild(span)
        span.addEventListener('click', func)
        addLineDecorationA(li)
        addRemoveForLiA(li)

        body.querySelector('ul')
            .appendChild(li)
    })
}

function addLineDecorationA(li) {
    let span = li.querySelector('span')

    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'line-through'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        span.classList.toggle('text-decoration')
    })

    li.appendChild(a)
}

function addRemoveForLiA(li) {
    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'remove'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        li.remove()
    })

    li.appendChild(a)
}

function func() {
    let input = document.createElement('input')
    input.value = this.textContent

    this.textContent = ''
    this.appendChild(input)

    input.addEventListener('blur', () => {
        this.textContent = input.value

        this.addEventListener('click', func)
    })
    this.removeEventListener('click', func)
}