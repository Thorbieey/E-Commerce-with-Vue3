const { createApp, ref } = Vue

const app = createApp({
  data(){
    return {
        cart:0,
        product: 'Socks',
        productDescription: 'A comfy and cozy island for your feet.',
        image: './assets/images/socks_blue.jpg',
        inStock: false,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
            { id: 2234, color: 'green', image: './assets/images/socks_green.jpg' },
            { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' },
        ],
        sizes: ["Small", "Medium", "Large", "Extra-large"],
    }
  },
  methods: {
    addToCart(){
        this.cart += 1
    },
    updateImage(variantImage){
        this.image = variantImage
    },
  },
})