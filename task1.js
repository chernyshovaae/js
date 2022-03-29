// С помощью цикла while вывести все простые числа в промежутке от 0 до 100.

var n = 100;
var k = 2;

function Fn(num) {
    for (var i = 2; i < num; i++) {
        if (num % i == 0) {
            return false;
        }
    }
    if (i == 2) {
        return false;
    }
    return true;
}

while (k < n) {
    if (Fn(k)) {
        console.log(k);
    }
    k++
    continue;
}