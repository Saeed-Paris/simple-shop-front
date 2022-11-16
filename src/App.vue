<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainHeader from '@/components/shared/MainHeader.vue';
import MainLoader from '@/components/shared/MainLoader.vue';
MainLoader
</script>

<template>
  <!-- <MainLoader /> -->
  <MainHeader />
  <main>
    <RouterView />
  </main>
</template>

<style scoped>

</style>
