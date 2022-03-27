function f_plus(a, b) {
    return a + b;
}

function f_dif(a, b) {
    return a - b;
}


function f_mult(a, b) {
    return a * b;
}


function f_div(a, b) {
    return a / b;
}

function mathOperation(a, b, txt) {
    switch (txt) {
        case 'plus':
            return f_plus(a, b);
        case 'dif':
            return f_dif(a, b);
        case 'mult':
            return f_mult(a, b);
        case 'div':
            return f_div(a, b);
        default:
            return "undefined";
    }

}

var a = 2;
var b = 4;
console.log(mathOperation(a, b, "mult"));
