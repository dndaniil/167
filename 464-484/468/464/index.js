let div = document.querySelector('#test');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let p = document.createElement('p');
    p.textContent = elem;
    p.addEventListener('click', () => {
        p.textContent = +p.textContent + 1
    })

    div.appendChild(p);
}