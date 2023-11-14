let p = document.querySelector('#elem')
let remove = document.querySelector('#remove')

remove.addEventListener('click', (e) => {
    p.remove()
    e.preventDefault()
})
