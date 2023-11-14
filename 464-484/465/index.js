let arr = ["q", "w", "e"]

let ul = document.querySelector("ul");

for (let i = 0; i < arr.length; i++) {
    let li = document.createElement("li");
    li.textContent = arr[i]

    li.addEventListener('click' , () => {
        console.log(li.textContent)
        if (li.textContent[li.textContent.length-1] !== '!') {
            li.textContent += '!'
        }
    })

    ul.appendChild(li);
}