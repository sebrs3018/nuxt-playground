<script setup lang="ts"></script>
<template>
  <div class="[&_.router-link-exact-active]:text-green-600">
    <header class="shadow-sm bg-white p-4">
      <nav class="container mx-auto p-4">
        <NuxtLink to="/products" class="font-bold">Nuxt Dojo Merch</NuxtLink>
      </nav>
    </header>
    <!-- Output the page content -->
    <div class="container mx-auto p-4">
      <slot />
    </div>
    <!-- End of page content -->
    <footer class="container mx-auto p-4 flex justify-between border-t-2">
      <ul class="flex gap-4">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about">About</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/products">Products</NuxtLink>
        </li>
      </ul>
    </footer>
  </div>
</template>
