let input = document.querySelector('#input')

input.addEventListener('blur', ()=>{
    let arr = input.value.split(' ')
    let rr = ''
    for (const elem of arr) {
        rr += elem[0].toUpperCase() + elem.slice(1) + ' ' ;
    }
    input.value = rr;  
})
