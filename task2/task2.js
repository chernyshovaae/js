/*
2. На странице корзины:
a. Сделать отдельные блоки «Состав корзины», «Адрес доставки», «Комментарий»;
b. Сделать эти поля сворачиваемыми;
c. Заполнять поля по очереди, то есть давать посмотреть состав корзины, внизу которого
есть кнопка «Далее». Если нажать ее, сворачивается «Состав корзины» и открывается
«Адрес доставки» и так далее.
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
        //document.body.appendChild(txt);
        var btn = document.createElement("button");
        btn.textContent = "Купить";
        btn.setAttribute('onclick', "runbusket(" + i + ")");
        //document.body.appendChild(btn);
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
        //document.body.appendChild(txt);
        var btn = document.createElement("button");
        btn.textContent = "Удалить";
        btn.setAttribute('onclick', "delbusket(" + i + ")");
        //document.body.appendChild(btn);
        buskdeatil.append(btn);

    }
}
if (buskdeatil) {
    var txt1 = document.createElement("P");
    txt1.textContent = "";
    buskdeatil.append(txt1);
    var btnnext = document.createElement("button");
    btnnext.textContent = "Далее";
    btnnext.setAttribute('onclick', "nextbuy()");
    buskdeatil.append(btnnext);
}

var buskhref = document.getElementById("buskhref");
var btnback = document.createElement("button");
btnback.textContent = "Назад";
btnback.setAttribute('onclick', "backbuy()");
document.body.append(btnback);
btnback.style.display = 'none';
var buskadress = document.getElementById("adress");
buskadress.style.display = 'none';
var buskcomment = document.getElementById("comment");
buskcomment.style.display = 'none';

function nextbuy() {
    buskdeatil.style.display = 'none';
    txt.style.display = 'none';
    buskhref.style.display = 'none';
    btnback.style.display = 'inline';
    buskadress.style.display = 'inline';
    btnnext.style.display = 'inline';
    var btnnext1 = document.createElement("button");
    btnnext1.textContent = "Далее";
    btnnext1.setAttribute('onclick', "nextbuy1()");
    document.body.append(btnnext1);
}

function nextbuy1() {
    buskadress.style.display = 'none';
    buskcomment.style.display = 'inline';
    btnback.style.display = 'none';
}

function backbuy() {
    buskdeatil.style.display = 'inline';
    txt.style.display = 'inline';
    buskhref.style.display = 'inline';
    btnback.style.display = 'none';
    buskadress.style.display = 'none';
}