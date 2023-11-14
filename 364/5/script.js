let input = document.querySelector('#input')
let input1 = document.querySelectorAll('.input')

input.addEventListener('blur', ()=> {
    let arr = input.value.split(' ')
    let index = 0;
    for (const elem of arr) {
        input1[index].value = elem
        index++
    }
})
