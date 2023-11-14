let table = document.querySelector('#table')

let employees = [
    {name: 'employee1', age: 30, salary: 400},
    {name: 'employee2', age: 31, salary: 500},
    {name: 'employee3', age: 32, salary: 600},
]

for (let emp of employees) {
    let tr = document.createElement('tr')

    let name = document.createElement('td')
    name.textContent = emp.name
    tr.appendChild(name)

    let age = document.createElement('td')
    age.textContent = emp.age
    age.addEventListener('click', () => {
        age.textContent = +age.textContent + 1
    })
    tr.appendChild(age)

    let salary = document.createElement('td')
    salary.textContent = emp.salary
    salary.addEventListener('click', () => {
        salary.textContent = Math.round(+salary.textContent * 1.1)
    })
    tr.appendChild(salary)

    table.appendChild(tr)
}