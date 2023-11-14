let input = document.querySelector('#input');
let sum = 0;
let func = ()=> {
    for (let elem of input.value) {
        sum += +elem;
    }
    console.log(sum)
}
input.addEventListener('blur', func)
