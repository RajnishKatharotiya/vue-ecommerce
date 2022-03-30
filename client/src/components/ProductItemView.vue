<template>
<div class="col mb-5">
    <div class="card h-100">
        <!-- Sale badge-->
        <div v-if="item.isOnSale" class="badge bg-dark text-white position-absolute" style="top: 0.5rem; right: 0.5rem">
            Sale
        </div>
        <!-- Product image-->
        <img class="card-img-top" :src="imgUrl" alt="..." />
        <!-- Product details-->
        <div class="card-body p-4">
            <div class="text-center">
                <!-- Product name-->
                <h5 class="fw-bolder">{{item.name}}</h5>
                <!-- Product price-->
                <span v-if="item.beforeDiscountPrice" class="text-muted text-decoration-line-through">${{item.beforeDiscountPrice.toFixed(2)}}</span>
                ${{item.price.CAD.toFixed(2)}}
            </div>
        </div>
        <!-- Product actions-->
        <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
                <button class="btn btn-outline-dark mt-auto" @click="addcart(item.id)">Add to
                    cart
                </button>
                <br />
                <router-link :to="'/product/'+ item.id"> See More </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'ProductItemView',
    props: ['item', 'addcart'],
    computed: {
        imgUrl() {
            return require('@/assets/img/450/' + this.item.photo)
        }
    }
}
</script>
