<template>
<section class="py-5" v-if="item">
    <div class="container px-4 px-lg-5 my-5">
        <div class="row gx-4 gx-lg-5 align-items-center">
            <div class="col-md-6"><img class="card-img-top mb-5 mb-md-0" :src="imgUrl" alt="..." /></div>
            <div class="col-md-6">
                <div class="small mb-1">Product id: {{item.id}} </div>
                <h1 class="display-5 fw-bolder">{{item.name}}</h1>
                <div class="fs-5 mb-5">
                    <span>${{item.price?.CAD?.toFixed(2)}}</span>
                </div>
                <p class="lead">Description: {{item.description}}</p>
                <div class="d-flex">
                    <input class="form-control text-center me-3" id="inputQuantity" type="number" v-model="countInput" style="max-width: 3rem" />
                    <button class="btn btn-outline-dark flex-shrink-0" type="button" @click="addToCart(item.id, false, countInput); countInput = 1">
                        <i class="bi-cart-fill me-1"></i>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
export default {
    name: 'SingleProductView',
    props: [ 'addToCart', 'products', 'getSingleItem'],
    data() {
        return {
            countInput: 1,
            item: null
        }
    },
    computed: {
        imgUrl() {
            return require('@/assets/img/600/' + this.item.photo)
        },
    },
    async mounted() {
       const foundItem=  this.getSingleItem(parseInt(this.$route?.params?.id, 10));
       this.item = foundItem;
    }
}
</script>
