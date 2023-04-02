let a = +prompt('a?', '');
console.log(a) // string
a = +a
console.log(a) // number
switch(a) {
    case 0:
        a == 0;
        alert(0);
        break;
    case 1:
        a == 1;
        alert(1);
        break;
    case 2:
        a == 2 || a == 3;
        alert('2,3');
}
