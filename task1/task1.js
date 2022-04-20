/*
1. Продумать, где можно применить замыкания для практикума из седьмого урока.
*/

// Замыкание см. со 137 строки

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
    countBasketPrice: function (get_name, get_num, get_sum, get_numm) {
        if (this.product_name[get_numm]) {
            if (get_numm < 0 && this.product_name[get_numm] == 1) {
                delete this.product_name[get_numm];
            } else {
                this.product_name[get_numm].get_num += get_num;
                this.product_name[get_numm].get_sum += get_sum;
            }
        }
        else { this.product_name.push({ get_name, get_num, get_sum }); }

        this.num += get_num;
        this.summ += get_sum;
    }
}

function saveBusk() {
    window.localStorage.setItem('userChoice', JSON.stringify(basket.product_name));
    window.localStorage.setItem('userChoicenum', JSON.stringify(basket.num));
    window.localStorage.setItem('userChoicesum', JSON.stringify(basket.summ));
}

function loadBusk() {
    basket.product_name = JSON.parse(window.localStorage.getItem('userChoice')) || [];
    basket.num = JSON.parse(window.localStorage.getItem('userChoicenum')) || 0;
    basket.summ = JSON.parse(window.localStorage.getItem('userChoicesum')) || 0;
}

loadBusk();

var busk = document.getElementById("busk");

function runbusket(num) {
    if (basket.num == null || num == null) {
    }
    else {
        basket.countBasketPrice(Product[num].name, 1, Product[num].price, num)
    }
    saveBusk();
    showbusket();
}

function showbusket() {
    if (basket.num == null) {
        busk.textContent = "Корзина пуста";
    }
    else {
        busk.textContent = "В корзине: " + basket.num
            + " товаров на сумму " + basket.summ + " рублей";
    }
}

showbusket();

for (var i = 0; i < Product.length; i++) {
    var market = document.getElementById("market");
    if (market) {
        var txt = document.createElement("P");
        txt.textContent = Product[i].name + "; " + Product[i].price;
        market.append(txt);
        var btn = document.createElement("button");
        btn.textContent = "Купить";
        btn.setAttribute('onclick', "runbusket(" + i + ")");
        market.append(btn);
    }
}

function delbusket(num) {
    if (basket.num == null || num == null) {
        busk.textContent = "Корзина пуста";
    }
    else {
        basket.countBasketPrice(Product[num].name, -1, Product[num].price * -1, num)
        busk.textContent = "В корзине: " + basket.num
            + " товаров на сумму " + basket.summ + " рублей";
    }
    saveBusk();
}


for (var i = 0; i < basket.product_name.length; i++) {
    var buskdeatil = document.getElementById("buskdetail");
    if (buskdeatil) {
        var txt = document.createElement("P");
        txt.textContent = basket.product_name[i].get_name + "; " + basket.product_name[i].get_num + "; " + basket.product_name[i].get_sum;
        buskdeatil.append(txt);
        var btn = document.createElement("button");
        btn.textContent = "Удалить";
        btn.setAttribute('onclick', "delbusket(" + i + ")");
        buskdeatil.append(btn);

    }
}


if (buskdeatil) {
    var txt1 = document.createElement("P");
    txt1.textContent = "";
    buskdeatil.append(txt1);

}

var btnback = document.createElement("button");
btnback.textContent = "Назад";
btnback.setAttribute('onclick', "backbuy()");
document.body.append(btnback);
btnback.style.display = 'none';

var buskadress = document.getElementById("adress");
buskadress.style.display = 'none';
var buskcomment = document.getElementById("comment");
buskcomment.style.display = 'none';

var btnnext = document.createElement("button");
btnnext.textContent = "Далее";
btnnext.setAttribute('onclick', "nextbuy()");
document.body.append(btnnext);

// На примере функций btswitch и seton, setoff показано замыкание

function btswitch(state) {
    return function (elem) { elem.style.display = state; }
}

var seton = btswitch('block');
var setoff = btswitch('none');

function nextbuy() {
    setoff(buskdeatil);
    setoff(txt);
    if (buskadress.style.display == 'none') {
        seton(btnback);
        seton(buskadress);
    }
    else {
        setoff(buskadress);
        seton(buskcomment);
        setoff(btnnext);
    }
}

function backbuy() {
    if (buskadress.style.display == 'block') {
        seton(buskdeatil);
        seton(txt);
        setoff(btnback);
        setoff(buskadress);
    }
    else {
        setoff(buskcomment);
        seton(buskadress);
        setoff(buskdeatil);
        setoff(txt);
        seton(btnnext);
    }
}