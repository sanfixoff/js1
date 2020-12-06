/** ================ Часть про классы и объекты - START ======================= */

// const car = {
//   color: "Black",
//   model: "Tesla",
//   repaint: function (newColor) {
//     this.color = newColor;
//   },
// };
// console.log(car);

// class Car {
//   color;
//   model;

//   constructor(model, color) {
//     this.color = color;
//     this.model = model;
//   }

//   repaint(color) {
//     this.color = color;
//   }
// }

// const myOwnCar = new Car("Tesla", "black");
// const myOwnCar1 = new Car("Toyota", "white");
// const myOwnCar2 = new Car("Tesla", "green");
// const myOwnCar3 = new Car("Opel", "pink");
// myOwnCar.repaint("green");
// console.log(myOwnCar3.model);

/** ================ Часть про классы и объекты - END ======================= */

/** ================ Часть про наследования - START ======================= */

// class UIElem {
//   template = "<div></div>";

//   constructor(selector) {
//     console.log("UIElem constructor called!");
//     this.parent = document.querySelector(selector);
//     this.render();
//   }

//   setContent(content) {}

//   render() {
//     if (this instanceof Button) {
//       this.parent.innerHTML = `<h1>Button!</h1>${this.template}`;
//     } else if (this instanceof Image) {
//       this.parent.innerHTML = `<h1>Picture!</h1>${this.template}`;
//     }
//   }
// }

// class Button extends UIElem {
//   template = "<button>Press me</button>";
//   constructor(selector, text) {
//     super(selector);

//     if (text) {
//       this.template = `<button>${text}</button>`;
//     }
//     this.render();
//   }
// }

// class Image extends UIElem {
//   template = "<img src='qweqwe'>";
//   constructor(selector, src) {
//     super(selector);

//     if (src) {
//       this.template = `<img width="300" height="300" src=${src}>`;
//     }
//     this.render();
//   }
// }

// class Title {}

// const buyButton = new Button("#root", "Buy now!");
// const avatar = new Image(
//   "#root1",
//   "https://images.unsplash.com/photo-1601758260944-72f34e1b8d57?ixlib=rb-1.2.1&ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2250&q=80"
// );

// const elem = new UIElem();
// elem.render();

/** ================ Часть про наследования - END ======================= */

/** ================ Часть про прототипы - START ======================= */

// function Vehicle() {
//   this.signal = "Beep";
//   this.beep = function () {
//     console.log(this.signal);
//   };
// }

// function Car(model, color) {
//   this.color = color;
//   this.model = model;

//   this.repaint = function (color) {
//     this.color = color;
//   };
// }
// Car.prototype = new Vehicle();

// Car.beep = function () {
//   alert(this.signal);
// };

// const myOwnCar = new Car("Tesla", "white");
// myOwnCar.beep();

// const bike = new Vehicle();
// bike.beep();

/** ================ Часть про прототипы - END ======================= */

/** ================ Часть про привязку контекста (bind, call, apply) - START ======================= */

// class Car {
//   color;
//   model;

//   constructor(model, color) {
//     this.color = color;
//     this.model = model;
//   }

//   repaint(color) {
//     this.color = color;
//   }
// }

// const myOwnCar = new Car("Tesla", "black");
// const myWifeCar = new Car("Opel", "pink");

// // const repaintWifeCarFromMine = myOwnCar.repaint.bind(myWifeCar);
// // repaintWifeCarFromMine("blue");
// // myOwnCar.repaint.apply(myWifeCar, ['green']);

// console.log(myOwnCar);
// console.log(myWifeCar);

/** ================ Часть про привязку контекста (bind, call, apply) - END ======================= */

/** ================ Практика - START ======================= */

// class GoodsItem {
//   constructor(title, price) {
//     this.title = title;
//     this.price = price;
//   }

//   getTemplate() {
//     return `<div class="goods-item">
// <h3>${this.title}</h3>
// <p>${this.price}</p>
// </div>`;
//   }
// }

// class GoodsList {
//   goods = [];

//   fetchGoods() {
//     this.goods = [
//       { title: "Shirt", price: 150 },
//       { title: "Socks", price: 50 },
//       { title: "Jacket", price: 350 },
//     ];
//   }

//   render(selector) {
//     // if (!selector) {
//     //   throw new Error("Ты не указал селектор!!!");
//     // }
//     const templates = this.goods
//       .map((i) => new GoodsItem(i.title, i.price).getTemplate())
//       .join("");

//     document.querySelector("#root").innerHTML = templates;
//   }
// }

// const list = new GoodsList();
// list.fetchGoods();
// list.render();

/** ================ Практика - END ======================= */

// встроенные классы
// const yesterday = new Date(2020, 10, 29);
// console.log(yesterday);
