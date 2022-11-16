<script setup>
import { computed, ref } from 'vue';
</script>
<template>
    <section id="main-loader">
        <div class="spinner">
            <span class="ball-1"></span>
            <span class="ball-2"></span>
            <span class="ball-3"></span>
            <span class="ball-4"></span>
            <span class="ball-5"></span>
            <span class="ball-6"></span>
            <span class="ball-7"></span>
            <span class="ball-8"></span>
        </div>
    </section>
</template>
<style>

</style>
<style scoped>
section {
    z-index: 13111;
    top: -10rem;
    left: 0;
    right: 0;
    bottom: -10rem;
    position: absolute;
}

.spinner {
    position: fixed;
    top: 50%;
    left: 50%;
    height: 40px;
    width: 40px;
    transform: translate(-50%, -50%);
}

[class^="ball-"] {
    position: absolute;
    display: block;
    left: 30px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    transition: all 0.5s;
    animation: circleRotate 4s both infinite;
    transform-origin: 0 250% 0;
}

@keyframes circleRotate {
    0% {
        transform: rotate(0deg);
    }

    100% {
        transform: rotate(1440deg);
    }
}

.ball-1 {
    z-index: -1;
    background-color: #333;
    animation-timing-function: cubic-bezier(0.5, 0.3, 0.9, 0.9);
}

.ball-2 {
    z-index: -2;
    background-color: #444;
    animation-timing-function: cubic-bezier(0.5, 0.6, 0.9, 0.9);
}

.ball-3 {
    z-index: -3;
    background-color: #555;
    animation-timing-function: cubic-bezier(0.5, 0.9, 0.9, 0.9);
}

.ball-4 {
    z-index: -4;
    background-color: #666;
    animation-timing-function: cubic-bezier(0.5, 1.2, 0.9, 0.9);
}

.ball-5 {
    z-index: -5;
    background-color: #777;
    animation-timing-function: cubic-bezier(0.5, 1.5, 0.9, 0.9);
}

.ball-6 {
    z-index: -6;
    background-color: #888;
    animation-timing-function: cubic-bezier(0.5, 1.8, 0.9, 0.9);
}

.ball-7 {
    z-index: -7;
    background-color: #999;
    animation-timing-function: cubic-bezier(0.5, 2.1, 0.9, 0.9);
}

.ball-8 {
    z-index: -8;
    background-color: #aaa;
    animation-timing-function: cubic-bezier(0.5, 2.4, 0.9, 0.9);
}
</style>