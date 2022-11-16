<script setup lang="ts">
import { useProductsStore } from "@/stores/ProductsStore"
import type { ProdctDetail, ProductCard, } from "@/types/index"
import { computed } from "vue";
import { useRoute } from "vue-router";
import ProductSpecifications from "../components/ProductDetail/ProductSpecifications.vue";
import ProductVarieties from "../components/ProductDetail/ProductVarieties.vue";
import SimilarProducts from "@/components/ProductDetail/SimilarProducts.vue";
const store = useProductsStore()
const route = useRoute()
let product = computed(() => store.productDetail)
function add_to_cart() {
    store.addToCart()
}
store.callProductsDetailFromAPI(route.params.id)
</script>

<template>
    <main v-if="product">
        <section class="max-w-7xl mx-auto grid grid-cols-8 w-4/5 gap-12">
            <div class=" flex col-start-1 col-end-4">
                <div><img class="w-full" :src="product.major_image.url"></div>
            </div>
            <div class="flex flex-col gap-8 col-start-4 col-end-9">
                <p>اسم : {{ product.title }}</p>
                <p> قیمت : {{ product.price }}</p>
                <ProductVarieties />
                <button class="bg-black text-white w-fit mx-auto px-2 py-4" @click="add_to_cart()">اضافه کردن به سبد
                    خرید</button>
            </div>
            <!-- <SimilarProducts :products="product.relatedProducts" /> -->
        </section>
        <ProductSpecifications v-if="product.specifications" :specifications="product.specifications" />
    </main>
</template>

<style scoped>

</style>