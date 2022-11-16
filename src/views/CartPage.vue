<script setup lang="ts">
import { useProductsStore } from '@/stores/ProductsStore';
import { computed } from 'vue';

const store = useProductsStore()
store.callProductsDetailFromAPI('1308')
let pd = computed(() => {
    return store.getproductDetail
})
</script>

<template>
    <section>
    </section>
</template>

<style scoped>

</style>