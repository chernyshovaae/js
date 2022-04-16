/*
Продолжаем реализовывать модуль корзины:
a. Добавлять в объект корзины выбранные товары по клику на кнопке «Купить» без
перезагрузки страницы;
b. Привязать к событию покупки товара пересчет корзины и обновление ее внешнего
вида.
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


var busk = document.getElementById("busk");
busk.textContent = "Корзина пуста";

function runbusket(num) {
    basket.countBasketPrice(Product[num].name, 1, Product[num].price)
    busk.textContent = "В корзине: " + basket.num
        + " товаров на сумму " + basket.summ + " рублей";
}


for (var i = 0; i < Product.length; i++) {
    var txt = document.createElement("P");
    txt.textContent = Product[i].name + "; " + Product[i].price;
    document.body.appendChild(txt);
    var btn = document.createElement("button");
    btn.textContent = "Купить";
    btn.setAttribute('onclick', "runbusket(" + i + ")");
    document.body.appendChild(btn);
}


