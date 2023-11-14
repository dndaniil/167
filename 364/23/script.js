let input1 = document.getElementById('input1')
let input2 = document.getElementById('input2')
let input3 = document.getElementById('input3')
let button = document.getElementById('button')
let result = document.getElementById('result')

function solution(a, b, c) {
    let d = b**2 - 4*a*c

    console.log(d)

    if (d >= 0) {
        return {
            x1: (-b + d**0.5) / (2*a),
            x2: (-b - d**0.5) / (2*a)
        }
    }
    else {
        return false
    }
}

button.onclick = () => {
    let num1 = +input1.value
    let num2 = +input2.value
    let num3 = +input3.value
    let sol = solution(num1, num2, num3)
    result.textContent = sol.x1 + '    ' + sol.x2
}