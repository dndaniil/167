let input = document.querySelectorAll('.input');
let button = document.querySelector('#button')
let p = document.querySelector('p')
let sumElem = 0;
let func = ()=> {
    for (let elem of input) {
        console.log(elem)
        sumElem += +elem.value
    }
    p.textContent += sumElem
}
button.addEventListener('click', func)