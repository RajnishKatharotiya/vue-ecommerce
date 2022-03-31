<template>
<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container px-4 px-lg-5">
        <router-link class="navbar-brand" to="/">Gogals</router-link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/">All Products</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/about">About</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link active" aria-current="page" to="/add-product">Add Product</router-link>
                </li>
            </ul>
            <form class="d-flex">
                <button class="btn btn-outline-dark" @click.prevent="toggle">
                    <i class="bi-cart-fill me-1"></i>
                    Cart
                    <span class="badge bg-dark text-white ms-1 rounded-pill">{{getCount || 0}}</span>
                </button>
            </form>
        </div>
    </div>
</nav>
<!-- Header-->
<header class="bg-secondary py-5">
    <div class="container px-4 px-lg-5 my-5">
        <div class="text-center text-white">
            <h1 class="display-4 fw-bolder">Gogles Store</h1>
            <p class="lead fw-normal text-white-50 mb-0">upgrade your vision</p>
        </div>
    </div>
</header>

<div style="cart-container">
    <CartView v-if="cartVisible" :toggle="toggle" :cart="cart" :products="products" :addcart="addToCart" />
</div>
<router-view :products="products" :addToCart="addToCart" :item="products[0]" :getSingleItem="getSingleItem" />
</template>

<script>

import ProductDataService from '@/services/ProductDataService';
import CartView from '@/components/CartView.vue'

export default {
    name: 'App',
    components: {
        CartView
    },
    data() {
        return {
            cartVisible: false,
            products: [],
            cart: {},
        }
    },
    methods: {
        toggle() {
            this.cartVisible = !this.cartVisible
        },
        addToCart(id, edit, count) {
            if (count === 0) {
                alert("Quality count should be more than 0.")
                return;
            }
            const inputQuantity = count ? parseInt(count, 10) : 1;
            const idInt = parseInt(id, 10);
            if (!this.cart[idInt]) {
                this.cart[idInt] = inputQuantity
            } else if (edit) {
                if (this.cart[idInt] === 1) {
                    delete this.cart[idInt]
                } else {
                    this.cart[idInt] -= 1
                }
            } else {
                this.cart[idInt] += inputQuantity
            }
        },
        getSingleItem(id) {
            return this.products.find(e => e.id === id)
        }
    },
    computed: {
        getCount() {
            let sum = 0;
            Object.values(this.cart).forEach(e => sum += e);
            return sum;
        }
    },
    async mounted(){
        const result = await ProductDataService.getAll();
        this.products = result.data;
    }
}
</script>
