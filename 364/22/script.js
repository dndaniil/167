let input = document.getElementById('input')
let button = document.getElementById('button')
let result = document.getElementById('result')

function fact(num) {
    if (num === 0) {
        return 1;
    }

    else {
        return num * fact(num - 1);
    }
}

button.onclick = () => {
    result.textContent = fact(+input.value)
}