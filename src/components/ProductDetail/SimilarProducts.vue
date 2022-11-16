<script setup lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation } from "swiper";
// import NavigationBox from "../shared/navigationBox.vue";.
// import ProductSlide from "./ProductSlide.vue";

const modules = [Navigation];
</script>

<template>
  <section class="product-slider relative mt-40">
    <swiper
      :rtl="true"
      :loop="true"
      :slidesPerView="4"
      :spaceBetween="20"
      :navigation="{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }"
      :modules="modules"
      class="mySwiper w-17/20vw px-6"
    >
      <swiper-slide
        class="flex justify-center"
        v-for="(product, i) in 10"
        :key="i"
      >
        <ProductSlide :product="product" />
      </swiper-slide>

      <NavigationBox class="swiper-button-prev" />
      <NavigationBox isNext class="swiper-button-next" />
    </swiper>
  </section>
</template>

<style>
.home-product-slider .swiper-button-prev::after,
.home-product-slider .swiper-button-next::after {
  content: unset;
}
.home-product-slider .swiper-button-prev {
}

.home-product-slider .swiper-wrapper,
.home-product-slider .swiper {
  position: unset;
}
</style>
