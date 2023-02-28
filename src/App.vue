<template>
  <div class="wrapper">
    <Example />
  </div>
</template>

<script setup lang="ts">
import Example from '@/components/Example.vue';
</script>

<style>
body {
  padding: 0;
  margin: 0;
}

.wrapper {
  display: flex;
  background: #000;
  padding: 0;
  margin: 0;
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
