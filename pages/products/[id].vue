<script setup lang="ts">
import { Product } from "~~/types/Product";

definePageMeta({
  layout: "products",
});

const { id } = useRoute().params;
const uri = `https://fakestoreapi.com/products/${id}`;
const { data: product } = await useFetch<Product>(uri, { key: `${id}` });
if (!product.value)
  //The fatal value will force the error page to show (otherwise in case there was a client-side error, it won't be triggered!)
  throw createError({
    statusCode: 404,
    statusMessage: "Product not found",
    fatal: true,
  });
</script>
<template>
  <Head>
    <Title>Nuxt Dojo | {{ product?.title }} </Title>
    <Meta name="description" :content="product?.description" />
  </Head>
  <ProductDetails :product="product" />
</template>
