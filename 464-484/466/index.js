let table = document.querySelector('#table')
let input1 = document.querySelector('#input1')
let input2 = document.querySelector('#input2')
let button = document.querySelector('#button')

button.addEventListener('click', () => {
    let row = +input1.value
    let col = +input2.value
    for (let i = 0; i < row; i++) {
        let tr = document.createElement('tr')
        for (let j = 0; j < col; j++) {
            let td = document.createElement('td')
            td.textContent = 'x'
            tr.appendChild(td)
        }
        table.appendChild(tr)
    }
})

