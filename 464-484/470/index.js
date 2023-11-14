let table = document.querySelector('#table')
let button = document.querySelector('#button')

button.addEventListener('click', () => {

    let firstTr = table.querySelector('tr')
    let tdsLength = firstTr.querySelectorAll('td').length

    let tr = document.createElement('tr')
    table.appendChild(tr)

    for (let i = 0; i < tdsLength; i++) {
        let td = document.createElement('td')
        tr.appendChild(td)
    }

    let trs = table.querySelectorAll('tr')

    for (let line of trs) {
        let td = document.createElement('td')
        line.appendChild(td)
    }
})

