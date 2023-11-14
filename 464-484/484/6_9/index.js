let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

let body = document.querySelector('body')
let table = document.createElement('table')

body.appendChild(table)
addInputs()

for (let emp of employees) {
    let tr = document.createElement('tr')
    for (let elem in emp) {

        let td = document.createElement('td')
        td.textContent = emp[elem]
        tr.appendChild(td)

        td.addEventListener('click', func);
    }

    addRemoveAForTr(tr)
    table.appendChild(tr)
}

function addInputs() {

    for (let i = 0; i < 3; i++) {
        let input = document.createElement('input')
        input.style.width = '60px'
        body.appendChild(input)
    }
    let button = document.createElement('button')
    button.textContent = 'Create'
    body.appendChild(button)

    button.addEventListener('click', buttonOnClick)
}

function buttonOnClick() {

    let elems = document.querySelectorAll('input')
    let tr = document.createElement('tr')

    for (let elem of elems) {
        let td = document.createElement('td')
        td.textContent = elem.value
        elem.value = ''
        tr.appendChild(td)

        td.addEventListener('click', func);
    }

    addRemoveAForTr(tr)
    table.appendChild(tr)
}

function addRemoveAForTr(tr) {
    let td = document.createElement('td')

    let remove = document.createElement('a')
    remove.href = ''
    remove.textContent = 'remove'

    td.appendChild(remove)

    remove.addEventListener('click', (e) => {
        e.preventDefault()
        tr.remove()
    })

    tr.appendChild(td)
}

function func() {
    let input = document.createElement('input');
    input.value = this.textContent;

    this.textContent = '';
    this.appendChild(input);

    input.addEventListener('blur', () => {
        this.textContent = input.value;

        this.addEventListener('click', func);
    });

    this.removeEventListener('click', func);
}