/*
Сделать генерацию корзины динамической: верстка корзины не должна находиться в
HTML-структуре. Там должен быть только div, в который будет вставляться корзина,
сгенерированная на базе JS:
a. Пустая корзина должна выводить строку «Корзина пуста»;
b. Наполненная должна выводить «В корзине: n товаров на сумму m рублей».
*/

var basket = {
    product_name: [],
    num: 0,
    summ: 0,
    countBasketPrice: function (get_name, get_num, get_sum) {
        this.product_name.push(get_name);
        this.num += get_num;
        this.summ += get_sum;
    }
}
const res = document.querySelector("div");
const txt = document.createElement("P");

basket.countBasketPrice('Сахар', 2, 100)
basket.countBasketPrice('Молоко', 1, 80)
basket.countBasketPrice('Coca-Cola', 5, 60)

if (basket.product_name = null) {
    txt.textContent = "Корзина пуста";
}
else {
    txt.textContent = "В корзине: " + basket.num
        + " товаров на сумму " + basket.summ + " рублей";
}
res.append(txt);
