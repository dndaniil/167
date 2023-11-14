let input = document.getElementById('input')
let button = document.getElementById('button')

function str(len) {
    chrs = 'abdehkmnpswxzABDEFGHKMNPQRSTWXZ';
    var str = '';
    for (var i = 0; i < len; i++) {
        var pos = Math.floor(Math.random() * chrs.length);
        str += chrs.substring(pos,pos+1);
    }
    return str;
}

button.onclick = () => {
    input.value = str(8)
}