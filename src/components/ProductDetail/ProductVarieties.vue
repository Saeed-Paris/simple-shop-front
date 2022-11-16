<script setup lang="ts">
import { useProductsStore } from "@/stores/ProductsStore";
import { computed, ref } from "vue";
import ProductVariety from "./ProductVariety.vue";
const store = useProductsStore()
let varieties = computed(() => {
    return store.getProductVarieties
})
let varietiesLen = ref(varieties.value.length)

</script>

<template>
    <div class="flex flex-col gap-8">
        <ProductVariety v-for="(item, i) in varieties" :depth="{ cur: i, max: varietiesLen }" :attributes="item"
            :key="i" />
    </div>
</template>

<style scoped>

</style>