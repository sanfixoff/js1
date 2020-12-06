const goods = [
  { title: "PS5", price: 30000 },
  { title: "IPhone 12", price: 100000 },
  { title: "Shirt", price: 1000 },
  { title: "XBOX", price: 30000 },
  { title: "Boots", price: 5000 },
  { title: "PC HyperX", price: 100000 },
];

const main = () => {
  const createGoodsItemTemplate = ({
    title,
    price,
  }) => `<div class="goods-item">
    <h3>${title}</h3>
    <p>${price}</p>
</div>`;
  const renderGoods = (items = goods) => {
    const goodsItemsList = items
      .map((item) => createGoodsItemTemplate(item))
      .join("");
    console.log(goodsItemsList);
    document.querySelector(".goods-list").innerHTML = goodsItemsList;
  };

  renderGoods();
};

window.addEventListener("load", main);
