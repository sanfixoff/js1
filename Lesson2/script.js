class GoodsItem {
  constructor(title, price) {
    this.title = title;
    this.price = price;
  }

   getTemplate() {
    return `<div class="goods-item">
    <div class="good-name">${this.title}</div>
    <div class="good-price">${this.price}</div>
    </div>`;
      }
    }

 class GoodsList {
   goods = [];

   fetchGoods() {
     this.goods = [
       { title: "Shirt", price: 150 },
       { title: "Socks", price: 50 },
       { title: "Jacket", price: 350 },
     ];
   }

   render() {
     const templates = this.goods
       .map((i) => new GoodsItem(i.title, i.price).getTemplate())
       .join("");

     document.querySelector("#goods-list").innerHTML = templates;
   }
 }

 const list = new GoodsList();
 list.fetchGoods();
 list.render();
