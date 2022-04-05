/*
Продолжить работу с интернет-магазином:
a. В прошлом домашнем задании вы реализовали корзину на базе массивов. Какими
объектами можно заменить их элементы?
b. Реализуйте такие объекты.
c. Перенести функционал подсчета корзины на объектно-ориентированную базу.
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

basket.countBasketPrice('Сахар', 2, 100)
basket.countBasketPrice('Молоко', 1, 80)
basket.countBasketPrice('Coca-Cola', 5, 60)
console.log('Список товара: ' + basket.product_name);
console.log('Количество товара: ' + basket.num);
console.log('Итоговая сумма: ' + basket.summ);
