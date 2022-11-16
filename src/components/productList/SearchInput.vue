<script setup lang="ts">
import { useProductsStore } from "@/stores/ProductsStore";
import { ref } from "vue"
const store = useProductsStore()
let txt = ref("")
function filterListByTitle() {
    if (store.productFilters.title == txt.value) return
    store.productFilters.title = txt.value
    store.makeQuery()
}
</script>

<template>
    <div class="shadow-md p-4 bg-white mb-4">
        <h6 class="mr-2  text-black my-4"> عنوان</h6>
        <form @submit.prevent="filterListByTitle()">
            <input v-model="txt" type="text" placeholder="عنوان جستجو را بنویسید" class="py-2 px-4 border w-full">
        </form>
    </div>
</template>

<style scoped>

</style>