<script setup lang="ts">
import type { SimpleKeyValue, VarietiesDepth } from "@/types/index"
import { useProductsStore } from "@/stores/ProductsStore";
import { computed } from "vue";
const store = useProductsStore()
const props = defineProps<{
    attributes: SimpleKeyValue,
    depth: VarietiesDepth
}>()
let ProductVarieties = computed(() => {
    return store.getproductDetail?.varieties
})
function showAvailables(index: number) {
    store.productIndices[props.depth.cur] = index
    let dep = props.depth
    if (dep.cur + 1 != dep.max) {
        let sum = 0
        for (let i = 0; i < (dep.max - dep.cur - 1); i++) {
            sum += ((store.productIndices[i] ** (dep.max - dep.cur - 1)) * store.varieties[i + 1].value.length)
        }
        store.currentProductIndex = sum + store.productIndices[dep.max - 1]
    }

}
</script>

<template>
    <div class="flex flex-col gap-4">
        <p>انتخاب {{ attributes.label }}</p>
        <div class="flex gap-4 flex-wrap">
            <button @click="store.calculateProductIndices(i, depth.cur)" class=" border py-2 px-3 border-gray-600"
                :class="{
                    selected: store.productIndices[depth.cur] == i && depth.cur + 1 == depth.max && store.productDetail?.varieties[store.currentProductIndex + i].quantity != 0 || depth.cur + 1 != depth.max && store.productIndices[depth.cur] == i,
                    disables: depth.cur + 1 == depth.max && store.productDetail?.varieties[store.currentProductIndex + i].quantity == 0
                }" v-for="(attribute, i) in attributes.value" :key="i">
                {{ attribute }}
            </button>

        </div>
    </div>

</template>
<!--    -->
<style scoped>
.disables {
    opacity: 0.3;
    pointer-events: none;
    border: 1px solid black !important;

}

.selected {
    border: 3px solid black;
}
</style>