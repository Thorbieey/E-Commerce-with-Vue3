const { createApp, ref } = Vue

const app = createApp({
  data(){
    return {
        product: 'Socks',
        productDescription: 'A comfy and cozy island for your feet.',
        imgGreen: './assets/images/socks_green.jpg',
        imgBlue: './assets/images/socks_blue.jpg',
        onSale: true,
        sizes: ["Small", "Medium", "Large", "Extra-large"]
    }
  }
})