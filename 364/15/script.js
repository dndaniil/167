let input = document.getElementById('input')
let result = document.getElementById('result')

input.addEventListener('blur', () => {
    let days = ['чт', 'пятница', 'сб', 'вс', 'пн', 'вт', 'ср'];
    let [day, month, year] = input.value.split('.')
    let date = new Date(year, month, day, 0, 0, 0)
    result.textContent = days[date.getDay()]
})
