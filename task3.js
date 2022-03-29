/* Товары в корзине хранятся в массиве. Задачи:
a. Организовать такой массив для хранения товаров в корзине;
b. Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
*/

// для п. a - продолжение задачи № 2
var a = [{ name: 'Сахар', unit: 'кг', number: 3, price: 100 },
{ name: 'Молоко', unit: 'л', number: 1, price: 70 },
{ name: 'Масло', unit: 'л', number: 1, price: 200 }
];

// п. b
function countBasketPrice(ex) {
    sum_ = 0;
    for (let i = 0; i < a.length; i++) {
        sum_ += a[i].price * a[i].number;
    }
    return sum_;
}

console.log(countBasketPrice(a));
