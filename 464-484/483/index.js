let tds = document.querySelectorAll('#table td')

let color = 'color1'
console.log(tds)


for (let td of tds) {

    td.addEventListener('click', () => {

        if (color === 'color1') {
            td.classList.remove(color)
            color = 'color2'
            td.classList.add(color)
        } else {
            td.classList.remove(color)
            color = 'color1'
            td.classList.add(color)
        }


    })
}