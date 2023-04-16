<script setup lang="ts">
import { Product } from "~~/types/Product";

/* Overriding global metatags */
useHead({
  title: "Nuxt Dojo | Merch",
  meta: [{ name: "description", content: "Nuxt 3 Merch" }],
});

definePageMeta({
  layout: "products",
});

const { data: products } = await useFetch<Product[]>(
  "https://fakestoreapi.com/products"
);
</script>
<template>
  <div class="grid grid-cols-4 gap-5">
    <div v-for="p in products" :key="p.id">
      <ProductCard :product="p" />
    </div>
  </div>
</template>
