/*
Создать функцию, генерирующую шахматную доску. Можно использовать любые html-теги.
Доска должна быть верно разлинована на черные и белые ячейки. Строки должны
нумероваться числами от 1 до 8, столбцы — латинскими буквами A, B, C, D, E, F, G, H.
*/
var table = document.createElement("table");
table.className = "paint-border";
for (var i = 0; i < 8; i++) {
    var tr = document.createElement('tr');
    for (var j = 0; j < 8; j++) {
        var td = document.createElement('td');
        if (i % 2 == j % 2) {
            td.className = "square-white";
        }
        else {
            td.className = "square-black";
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}
document.body.appendChild(table);