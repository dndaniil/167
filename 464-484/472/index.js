let ul = document.querySelector('#parent')
let button = document.querySelector('#button')
let liList = ul.querySelectorAll('li')

let count = 4

for (let li of liList) {
    li.addEventListener('click', () => {
        li.remove()
    })
}
button.addEventListener('click', () => {
    let li = document.createElement('li')
    li.addEventListener('click', () => {
        li.remove()
    })

    li.textContent = count
    count++

    ul.appendChild(li)
})
