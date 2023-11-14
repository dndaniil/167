let elem = document.querySelector('#elem');
let show = document.querySelector('#show');

show.addEventListener('click', function() {
    elem.classList.toggle('hidden');
});