app.component("product-display", {
  props: {
    premium: {
      type: Boolean,
      required: true,
    },
  },
  template: /*html*/ `<div class="product-display">
        <div class="product-container">
          <div class="product-image">
            <img :src="image" alt="" />
          </div>
          <div class="product-info">
            <h1>{{ title }}</h1>
            <p v-if="onSale">{{ onSaleMsg }}</p>
            <p v-if="inStock">In Stock</p>
            <p v-else>Out of stock</p>

						<p>Shipping: {{ shipping }}</p>

            <div
              v-for="(variant, index) in variants"
              :key="variant.id"
              @mouseover="updateVariant(index)"
              class="color-circle"
              :style="{ 'background-color': variant.color}"
            ></div>

            <button
              class="button"
              :class="{disabledButton: !inStock}"
              @click="addToCart"
              :disabled="!inStock"
            >
              Add to Cart
            </button>
            <button :style="styles" @click="dropOfCart">
              <small>Decrease quantity</small>
            </button>
          </div>
        </div>
    </div>`,
  data() {
    return {
      styles: {
        padding: "15px",
        fontSize: "18px",
        border: "none",
        backgroundColor: "#cfcfcf",
        "border-radius": "6px",
      },
      product: "Socks",
      brand: "Vue Mastery",
      selectedVariant: 0,
      onSale: false,
      variants: [
        {
          id: 2234,
          color: "green",
          image: "./assets/images/socks_green.jpg",
          quantity: 50,
        },
        {
          id: 2235,
          color: "blue",
          image: "./assets/images/socks_blue.jpg",
          quantity: 0,
        },
      ],
    };
  },
  methods: {
    addToCart() {
      this.$emit("add-to-cart", this.variants[this.selectedVariant].id); // this emits or bubbling up the event to the rest of the app
    },
    dropOfCart() {
      this.$emit("drop-of-cart");
    },
    updateVariant(index) {
      this.selectedVariant = index;
    },
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    onSaleMsg() {
      return `${this.brand} ${this.product} is on sale`;
    },
    image() {
      return this.variants[this.selectedVariant].image;
    },
    inStock() {
      return this.variants[this.selectedVariant].quantity;
    },
    shipping() {
      if (this.premium) {
        return "Free";
      }
      return 2.99;
    },
  },
});
