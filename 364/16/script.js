let input = document.getElementById('input')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')


minus.onclick = () => {
    if (+input.value !== 0) {
        input.value = +input.value - 1
    }
}
plus.onclick = () => {
    input.value = +input.value + 1
}