let table = document.querySelector('#table')

let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

for (let i = 0; i < arr.length; i++) {
    let tr = document.createElement('tr')
    for (let j = 0; j < arr[i].length; j++) {
        let td = document.createElement('td')
        td.textContent = (+arr[i][j])**2
        tr.appendChild(td)
    }
    table.appendChild(tr)
}