app.component('product-display', {
    props: {
        premium: {
            type: Boolean,
            required: true,
        }
    },
    template:
    /*HTML*/
    `<div class="product-display">
        <div class="product-container">
            <div class="product-image">
                <img v-bind:src="image">
            </div>
            <div class="product-info">
                <h1>{{ product }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else>Out of Stock</p>
                <p v-if="onSale" class="alert-text">{{isOnSale}}</p>
                <p>Shipping: {{shipping}}</p>
                <ul>
                <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div 
                    class="color-circle" 
                    v-for="(variant, index) in variants" 
                    :key="variant.id" 
                    @mouseover="updateVariant(index)" 
                    :style="{ backgroundColor: variant.color }"></div>
                <button 
                    class="button" 
                    :class="{ disabledButton: !inStock }" 
                    :disabled="!inStock" 
                    v-on:click="addToCart">
                Add to Cart</button>
            </div>
        </div>

        <review-list v-if="reviews.length" :reviews="reviews"></review-list>
        
        <review-form @review-submitted="addReview"></review-form>
        
    </div>
    

`,
    data() {
        return {
            product: 'Socks',
            brand: 'Vue Mastery',
            details: ['50% cotton', '30% wool', '20% polyester'],
            selectedVariant: 0,
            variants: [
              { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity: 50 },
              { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg', quantity: 0 },
            ],
            onSale: true,
            reviews:[],
        }
    },
    methods: {
        addToCart() {
            this.$emit('add-to-cart', this.variants[this.selectedVariant].id)
        },
        updateVariant(index) {
            this.selectedVariant = index
        },
        addReview(review){
            this.reviews.push(review)
        },
    },
    computed: {
        image(){
            return this.variants[this.selectedVariant].image
        },
        inStock(){
            return this.variants[this.selectedVariant].quantity
        },
        isOnSale(){
            return this.brand + " " + this.product + " is on sale!"
        },
        shipping(){
            if (this.premium){
                return "Free"
            }
            return 2.99
        },
    }
})