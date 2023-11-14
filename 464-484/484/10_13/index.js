let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
];

let body = document.querySelector('body')
let ul = document.createElement('ul')

body.appendChild(ul)
addInputs()

for (let emp of employees) {
    let li = document.createElement('li')
    for (let elem in emp) {

        let span = document.createElement('span')
        span.textContent = emp[elem]
        li.appendChild(span)

        span.addEventListener('click', func);
    }

    addRemoveAForTr(li)
    ul.appendChild(li)
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
    let li = document.createElement('li')

    for (let elem of elems) {
        let span = document.createElement('span')
        span.textContent = elem.value
        elem.value = ''
        li.appendChild(span)

        span.addEventListener('click', func);
    }

    addRemoveAForTr(li)
    ul.appendChild(li)
}

function addRemoveAForTr(li) {
    let span = document.createElement('span')

    let remove = document.createElement('a')
    remove.href = ''
    remove.textContent = 'remove'

    span.appendChild(remove)

    remove.addEventListener('click', (e) => {
        e.preventDefault()
        li.remove()
    })

    li.appendChild(span)
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