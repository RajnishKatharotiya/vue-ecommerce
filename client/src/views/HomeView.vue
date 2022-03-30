<template>
<section class="py-5">
    <div class="container px-4 px-lg-5 mt-5">
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            <ProductItemView v-for="(product, i) in products" :key="i" :item="product" :addcart="addToCart" />
        </div>
    </div>
</section>
</template>

<script>
// @ is an alias to /src
import ProductItemView from '@/components/ProductItemView.vue'

export default {
    name: 'HomeView',
    components: {
        ProductItemView
    },
    props: ['products', 'addToCart']
}
</script>
