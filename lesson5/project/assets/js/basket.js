
Vue.component("app-basket-items", {
  props: ["items"],
  template: `
	<div id="basket-inner" class="basket-inner">
    	<button id="close-basket">Закрыть</button>
    	<div id="basket-items">
    	   <div class="basket-item" v-for="item in items" :key="item.product_id">
            <div class="product-name">{{item.product_name}}</div>
            <div class="product-price">{{item.price}}</div>
          </div>               
    	</div>
    	<hr>
    	<div class="cart_total">
    	    <p>TOTAL</p>
    	    <p>$<span id="basket-sum"></span></p>
    	</div>
    	  <button class="basket-btn">Checkout</button>
    	  <button class="basket-btn">Go to cart</button>  
	</div>
    `,
});
 

Vue.component("app-main", {
  template: `
<div>
    <app-header :onChange="updatebasketList"></app-header>
    <app-basket-items
        :items="filteredbasket"
    >
    </app-basket-items>
</div>
    `,
  data() {
    return {
      // Общий список товаров
      basketList: [],
      // Отфильтрованый список товаров (отображается пользователям)
      filteredbasket: [],
    };
  },
  mounted() {
    const url =
      "https://mock-api-builder.vercel.app/api/schema/get/5fc92d0d8dc8100007c08cb5";
    // получить список товаров
    fetch(url)
      .then((r) => r.json())
      .then((r) => {
        // Запишем в общий список
        this.basketList = r;
        // Сразу обновим отображаемый список
        this.filteredbasket = this.basketList;
      });
  },
  // Общие методы
  methods: {
    // Метод для обновления отображаемого списка
    // при каждом изменении инпута
    updatebasketList(searchEvent) {
      const value = searchEvent.target.value;
      // обновим отображаемый список, отфильтруем общий
      this.filteredbasket = this.basketList.filter((i) =>
        i.product_name.toLowerCase().includes(value.toLowerCase())
      );
    },
  },
});

const app = new Vue({
  el: "#app",
  data: {
    name: "Username",
  },
});


document.getElementById('basket_img').onclick = function() {
  document.getElementById('basket-inner').classList.add('basket-inner-active');
}
document.getElementById('close-basket').onclick = function() {
  document.getElementById('basket-inner').classList.remove('basket-inner-active');
} 
