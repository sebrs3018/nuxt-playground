<script setup lang="ts">
const { data } = await useFetch<{ message: string }>("/api/ninja?name=mario", {
  //This works event though typescript does not find the correct type (open bug on gitHub 16/04/23)
  method: "post",
  body: {
    age: 30,
  },
});

const { data: d1 } = await useFetch("/api/currency/GBP");
console.log({ d1 });
</script>
<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde animi,
      obcaecati nostrum recusandae debitis culpa adipisci laborum necessitatibus
      quisquam magni ex. Obcaecati eligendi totam tempore aliquid in quas
      delectus nesciunt!
    </p>
    <div>{{ data?.message }}</div>
    <div>{{ d1 }}</div>
  </div>
</template>
