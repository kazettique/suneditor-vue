<template>
  <div class="wrapper">
    <Example1 />
    <Example2 />
  </div>
</template>

<script setup lang="ts">
import Example1 from '@/components/Example1.vue';
import Example2 from '@/components/Example2.vue';
</script>

<style scoped>
.wrapper {
  display: flex;
}
</style>
