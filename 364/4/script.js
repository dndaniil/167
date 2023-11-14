let input = document.querySelector('#input')
let sum = 0;
input.addEventListener('blur', ()=> {
    let arr = input.value.split(",")
    for (let elem of arr){
        sum += +elem;
    }
    let ar = sum/arr.length
    console.log(ar)
})
