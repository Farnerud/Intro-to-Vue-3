const app = Vue.createApp({
  data() {
    return {
      styles: {
        padding: "15px",
        fontSize: "18px",
        border: "none",
        backgroundColor: "#cfcfcf",
        "border-radius": "6px",
      },
      cart: 0,
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 0,
      inStock: true,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% poliester"],
      variants: [
        { id: 2234, color: "green", image: "./assets/images/socks_green.jpg" },
        { id: 2235, color: "blue", image: "./assets/images/socks_blue.jpg" },
      ],
    };
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    dropOfCart() {
      if (this.cart > 0) {
        this.cart -= 1;
      }
    },
    updateImage(variantImage) {
      this.image = variantImage;
    },
  },
});
