let button = document.querySelector('#button')
let p = document.querySelectorAll('p')
button.onclick = () => {
    p.forEach((elem, id) => {
        elem.textContent += id+1
    })
}
