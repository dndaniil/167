let input = document.getElementById('input')
let button = document.getElementById('button')

function change(str) {
    return str.split('')
        .sort(() => Math.random() - 0.5)
        .join('')
}

button.onclick = () => {
    input.value = change(input.value)
}