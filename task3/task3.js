/*
* Сделать так, чтобы товары в каталоге выводились при помощи JS:
a. Создать массив товаров (сущность Product);
b. При загрузке страницы на базе данного массива генерировать вывод из него.
HTML-код должен содержать только div id=”catalog” без вложенного кода. Весь вид
каталога генерируется JS.
*/

let Product = [
    {
        name: 'Сахар', price: 100
    }
    , {
        name: 'Молоко', price: 80
    },
    {
        name: 'Coca-Cola', price: 60
    }];

let txt = document.getElementById('catalog');
let str = ' ';
for (let i = 0; i < Product.length; i++) {
    if (Product[i] !== undefined) str += 'Товар: ' + Product[i].name + '; Цена: ' + Product[i].price + '<br>';
}
txt.innerHTML = str;