<script setup lang="ts">
import { useProductsStore } from "@/stores/ProductsStore"
import { computed, reactive, ref } from "vue";
import sortSVG from "@/components/svg/sortSVG.vue"
import SearchInput from "@/components/productList/SearchInput.vue"
import ProductCard from "@/components/productList/ProductCard.vue"

const store = useProductsStore()

store.callProductsListFromAPI()

let productList = computed(() => store.productsList)

const filterButtons = [
    { name: "پربازدید ترین", type: "most_visited" },
    { name: "ارزان ترین", type: "low_to_high" },
    { name: "گران ترین", type: "high_to_low" },
    { name: "پرفروش ترین", type: "top_sales" },
    { name: "جدید ترین", type: "newest" },
    { name: "ویژه", type: "most_discount" },
]

function sortProductsBy(sortType: string, index: number) {
    j.value = index
    store.productFilters.sort_type = sortType
    store.makeQuery()
}

let j = ref(0)
</script>

<template>
    <section class="max-w-7xl mx-auto grid grid-cols-9 w-4/5">
        <div class="col-start-1 col-end-3 py-8">
            <SearchInput />
            <button class="lg bg-black py-3 px-6 text-white">اعمال فیلتر</button>
        </div>
        <section class="flex flex-col col-start-4 col-end-10">
            <section class="hidden lg:flex justify-between items-center flex-wrap  bg-white box-shaddow20 p-3 mb-3">
                <div class="order-0 flex items-center">
                    <sortSVG />
                    <span class="">
                        ترتیب نمایش:
                    </span>
                </div>
                <div class="flex flex-wrap justify-between gap-5">
                    <button v-for="(button, i) in filterButtons" @click="sortProductsBy(button.type, i)" type="button"
                        class="py-2" :class="{ selected: i == j }" :key="button.type">
                        {{ button.name }}
                    </button>
                </div>
            </section>
            <div class=" grid grid-cols-3  gap-8">
                <template v-if="productList">
                    <ProductCard v-for="(product, i) in productList" :product="product" :key="i" />
                </template>
                <template v-else>
                    <!-- skeleton -->
                </template>
            </div>
        </section>
    </section>
</template>

<style scoped>
.selected {
    font-weight: 800;
}
</style>