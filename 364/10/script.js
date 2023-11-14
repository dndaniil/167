let input = document.querySelector('#input')

input.addEventListener('blur', ()=> {
    let arr = input.value.split('')
    for (let elem of arr) {
        if (elem == "3") {
            input.value = "Число содержит цифру 3";
        } else input.value = "Число не содержит цифру 3";
    }
})
