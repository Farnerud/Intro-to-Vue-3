const app = Vue.createApp({
  data() {
    return {
      product: "Socks",
      image: "./assets/images/socks_green.jpg",
      inventory: 100,
      onSale: true,
      details: ["50% cotton", "30% wool", "20% poliester"],
      variants: [
        { id: 2234, color: "green" },
        { id: 2235, color: "blue" },
      ],
      sizes: [28, 30, 32, 34],
    };
  },
});
