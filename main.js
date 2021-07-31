const app = Vue.createApp({
  data() {
    return {
      cart: [],
      premium: false,
      details: ["50% cotton", "30% wool", "20% poliester"],
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    dropOfCart(id) {
      if (this.cart.length > 0) {
        this.cart.pop(id);
      }
    },
  },
});
