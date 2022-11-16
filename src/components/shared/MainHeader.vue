<script setup lang="ts">
import CartSVG from "@/components/svg/CartSVG.vue";
import { useProductsStore } from "@/stores/ProductsStore";

const store = useProductsStore()

</script>

<template>
    <header class="max-w-7xl border-2 border-black mx-auto flex justify-between w-4/5 mt-4 mb-8 py-4 px-8">
        <router-link class="border border-black text-lg px-2 py-1" to="/">لیست محصولات</router-link>
        <router-link to="/Cart" class="relative">
            <CartSVG />
            <span class="cart__button__quantity">{{store.cart}}</span>
        </router-link>
    </header>
</template>

<style scoped>
.cart__button__quantity {
    position: absolute;
    right: -5px;
    bottom: -4px;
    color: #fff;
    background-color: gray;
    padding: 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    line-height: 1;
}
</style>