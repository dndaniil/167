let table = document.querySelector('#table')

let count = 2

for (let i = 0; i < 5; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < 5; j++) {
        let td = document.createElement('td')
        td.textContent = count
        count += 2
        tr.appendChild(td)
    }
    table.appendChild(tr)
}
