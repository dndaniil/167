let elems = document.querySelectorAll('#parent li')

for (let elem of elems) {
    let remove = document.createElement('a')
    remove.href = ''
    remove.textContent = 'remove'

    remove.addEventListener('click', (e) => {
        e.preventDefault()
        elem.remove()
    })

    elem.appendChild(remove)
}

let tableElems = document.querySelectorAll('#table tr')

for (let elem of tableElems) {
    let remove = document.createElement('a')
    remove.href = ''
    remove.textContent = 'remove'

    remove.addEventListener('click', (e) => {
        e.preventDefault()
        elem.remove()
    })

    let td = document.createElement('td')
    td.appendChild(remove)
    elem.appendChild(td)
}