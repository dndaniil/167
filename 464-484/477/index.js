let elems = document.querySelectorAll('#parent li');

for (let elem of elems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input')
        input.value = elem.textContent

        elem.textContent = ''
        elem.appendChild(input)

        input.addEventListener('blur', () => {
            elem.textContent = input.value

            elem.addEventListener('click', func)
        })
        elem.removeEventListener('click', func)
    })
}



let tableElems = document.querySelectorAll('table tr td');

for (let elem of tableElems) {
    elem.addEventListener('click', function func() {
        let input = document.createElement('input');
        input.value = elem.textContent;

        elem.textContent = '';
        elem.appendChild(input);

        input.addEventListener('blur', () => {
            elem.textContent = input.value;

            elem.addEventListener('click', func);
        });

        elem.removeEventListener('click', func);
    });
}