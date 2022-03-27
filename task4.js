var a = 11;
var mas = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
switch (a >= 0 && a < 16) {
    case true:
        console.log(mas[a, 15]);
        break;
    default:
        console.log("undefined");
        break;
}