<template>
<tr>
    <td><img :src="imgUrl" alt="..." /></td>
    <td>{{data.name}}</td>
    <td>${{data.price.CAD}}</td>
    <td class="center">{{count}}</td>
    <td>${{total.toFixed(2)}}</td>
    <td class="center">
        <button class="btn btn-light cart-remove" @click="addcart(data.id, true)">
            &times;
        </button>
    </td>
</tr>
</template>

<script>
export default {
    name: 'CartItemView',
    props: ['data', 'count', 'addcart'],
    computed: {
        imgUrl() {
            return require('@/assets/img/100/' + this.data.photo);
        },
        total() {
            return this.data.price.CAD * this.count;
        }
    },
}
</script>
