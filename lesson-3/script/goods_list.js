let btnBasket = document.getElementById('basket-btn');
let goodsListSection = document.getElementById('goods-list-section');
let btnCloseCart = document.getElementById('goods-list-section__delete');
let btnOrder = document.getElementsByClassName('addcart-btn');

const productsList = {
   ps5: { title: 'Sony Playstation 5', price : 300, src : 'image/PS5.jpg' },
   hyperPC: { title: 'HyperPC Lumen', price : 400, src : 'image/PC-Lumen.jpg' },
   xbox: { title: 'XBOX series X', price : 500, src : 'image/xboxX.jpeg' },
};



class CartItem {
    constructor (product) {
        this.title = product.title;
        this.price = product.price;
        this.src = product.src;
        this.quantity = 1;
    }
    renderWithIndex(index) {
        return `<div class="goods-list__product-box">
        <span class="cart-goods-list-name">${this.title}</span>
        <div class="cart-goods-list-price">${this.price}</div>
        <div class="cart-goods-list-quantity">${this.quantity}</div>
        <img class="cart-goods-list-img" src=${this.src} height="100px" alt="">
        <input type="submit" value="X" class="cart-goods-list-item-delete" data-product-index=${index} onclick="deleteItemFromCart()">
        </div>`
    }

    addQuantity() {
        this.quantity += 1;
    }
}

class Cart {
    constructor () {
        this.goods = [];
    }

    render () {
        let listHtml = '';
        let goodsList = document.getElementById('goods-list__product-box'); 
        
        this.goods.forEach ((cartItem, indexOfProduct) => {
            listHtml += cartItem.renderWithIndex(indexOfProduct);
        });
        goodsList.innerHTML = listHtml;

        this.totalCartPrice();
    }

    addItemToCart(product) {
        let cartItem = this.goods.filter(el => el.title == product.title)[0]

        if (cartItem != undefined) {
            cartItem.addQuantity();
        } else { 
            let item = new CartItem(product);
            this.goods.push(item);
        }
    }


    totalCartPrice() {
        let totalPrice = document.getElementById('goods-list__total'); 
        let sum = 0;
        this.goods.forEach (good => { 
            sum += good.price * good.quantity;
        });
        totalPrice.innerText = `Итого  ${sum} рублей`;
    }

    deleteItemFromCart(index) {
        this.goods.splice(index, 1);
        this.render();
    }
}
    

const addItemToCart = () => {
    let productName = event.target.dataset.productName;
    let product = productsList[productName];
    cart.addItemToCart(product);
}

const deleteItemFromCart = () => {
    let index = event.target.dataset.productIndex;
    cart.deleteItemFromCart(index);
}

const openBasket = () => {
    cart.render();
    goodsListSection.style.display = 'block';
};


const cart = new Cart();

btnBasket.addEventListener('click', openBasket);
window.addEventListener('click', function (evt) {console.log(evt)});
btnCloseCart.addEventListener ('click', function () {goodsListSection.style.display = 'none'});
