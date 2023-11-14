let elems = document.querySelectorAll('p')

elems.forEach(elem => {
    elem.addEventListener('click', (elem)=> {
        elem.target.textContent = (+elem.target.textContent)**2
    })
})