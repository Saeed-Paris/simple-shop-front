<script setup lang="ts">
import type { Specification } from "@/types/index"
const props = defineProps<{
    specifications: Specification[]
}>()
</script>

<template>
    <section class="w-4/5 mx-auto my-10">
        <ul class="divide-y-2 border-black">
            <li v-for="(specification, i) in specifications" class="py-2" :key="i">
                <div class="flex justify-between ">
                    <span>{{ specification.name }}</span>
                    <span>{{ specification.pivot.specification_value?.value }}</span>
                </div>
            </li>
        </ul>
    </section>
</template>

<style scoped>

</style>