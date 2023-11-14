let elems = document.querySelectorAll('p')

for (let elem of elems) {
    let span = document.createElement('span')
    span.textContent = elem.textContent
    elem.textContent = ''
    elem.appendChild(span)
}

for (let elem of elems) {
    let span = elem.querySelector('span')

    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'line-through'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        span.style.textDecoration = 'line-through'
        a.remove()
    })

    elem.appendChild(a)
}

let rows = document.querySelectorAll('#table tr')

for (let elem of rows) {
    let td = document.createElement('td')

    let a = document.createElement('a')
    a.href = ''
    a.textContent = 'change-color'

    a.addEventListener('click', (e) => {
        e.preventDefault()
        let tds = elem.querySelectorAll('td')
        for (let tdElem of tds) {
            tdElem.classList.toggle('colored')
        }
    })

    td.appendChild(a)
    elem.appendChild(td)
}