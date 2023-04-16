<script setup lang="ts">
import { Product } from "~~/types/Product";
const { product } = defineProps<{ product: Product | null }>();
</script>
<template>
  <div class="grid grid-cols-2 gap-2">
    <div class="p-7">
      <img :src="product?.image" alt="product img" class="mx-auto my-7" />
    </div>
    <div class="p-7">
      <h2 class="text-4xl my-7">{{ product?.title }}</h2>
      <p class="text-xl my-7">Price - ${{ product?.title }}</p>
      <h3 class="font-bod border-b-2 mb-4 pb-2">Product Description:</h3>
      <p class="mb-7">{{ product?.price }}</p>
    </div>
  </div>
</template>
<style scoped>
img {
  max-width: 400px;
}
</style>
