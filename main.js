const { createApp, ref } = Vue

const app = createApp({
  data(){
    return {
        cart:0,
        product: 'Socks',
        productDescription: 'A comfy and cozy island for your feet.',
        brand: 'Vue Mastery',
        details: ['50% cotton', '30% wool', '20% polyester'],
        selectedVariant: 0,
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
        ],
        sizes: ["Small", "Medium", "Large", "Extra-large"],
        onSale: true,
    }
  },
  methods: {
    addToCart(){
        this.cart += 1
    },
    updateVariant(index){
        this.selectedVariant = index
    },
  },
  computed: {
    isOnSale(){
        return this.brand + " " + this.product + " is on sale!"
    },
    inStock(){
        return this.variants[this.selectedVariant].quantity
    },
    image(){
        return this.variants[this.selectedVariant].image
    },

  },
})