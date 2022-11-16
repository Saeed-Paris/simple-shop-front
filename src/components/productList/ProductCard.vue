<script setup lang="ts">
import type { ProdctDetail, ProductCard } from "@/types/index"
const props = defineProps<{
    product: ProductCard
}>()
</script>

<template>
    <router-link :to="{ name: 'productDetail', params: { id: product.id, slug: product?.slug } }">
        <img class="w-full" :src="product.major_image.url" alt="">
        <div class="text-center">
            <p class="text-lg">{{ product.title }}</p>
            <p class="text-red-700">{{ product.price }}</p>
        </div>
    </router-link>
</template>

<style scoped>

</style>