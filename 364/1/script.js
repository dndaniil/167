let input = document.querySelector('#input')
let func = ()=> {
    p.textContent += input.value
}

input.addEventListener('blur', func)