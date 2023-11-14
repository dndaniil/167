let input = document.getElementById('input')
let button = document.getElementById('button')
let result = document.getElementById('result')

function to(num) {
    return (num - 32) / 1.8
}

button.onclick = () => {
    result.textContent = to(+input.value)
}