const { createApp, ref } = Vue

const app = createApp({
  data(){
    return {
        product: 'Socks',
        productDescription: 'A comfy and cozy island for your feet.',
    }
  }
})