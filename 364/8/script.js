let input = document.querySelector('#input')

input.addEventListener('blur', ()=> {
    let arr = input.value.split('.')
    console.log(arr.reverse().join('-'))
})
