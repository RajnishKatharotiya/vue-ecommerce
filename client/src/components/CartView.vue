<template>
<aside class="cart-container" id="cart">
    <div class="cart">
        <h1 class="cart-title spread">
            <span>
                Cart
                <i class="bi-cart-fill me-1"></i>
            </span>
            <button @click="toggle" class="cart-close">&times;</button>
        </h1>

        <div class="cart-body">
            <table class="cart-table">
                <thead>
                    <tr>
                        <th><span class="sr-only">Product Image</span></th>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                        <th><span class="sr-only">Actions</span></th>
                    </tr>
                </thead>
                <tbody>
                    <CartItemView v-for="([id, count], i) in Object.entries(cart).reverse()" :key="i" :data="products.find(e => e.id == id)" :count="count" :addcart="addcart" />
                </tbody>
            </table>

            <p v-if="Object.entries(cart).length === 0" class="center"><em>No items in cart</em></p>
            <div v-if="Object.entries(cart).length !== 0" class="spread">
                <span><strong>Total:</strong> ${{getTotal}}</span>
                <button class="btn btn-light">Checkout</button>
            </div>
        </div>
    </div>
</aside>
</template>

<script>
import CartItemView from './CartItemView.vue';

export default {
    name: 'CartView',
    components: {
        CartItemView
    },
    props: ['toggle', 'cart', 'products', 'addcart'],
    computed: {
        getTotal() {
            let sum = 0;

            Object.entries(this.cart).forEach(([key, value]) => sum += (this.products.find(e => key == e.id).price.CAD * value));
            return sum.toFixed(2);
        }
    },
}
</script>
