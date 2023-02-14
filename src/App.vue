<template>
  <div class="wrapper">
    <Example1 />
    <!-- <Example2 /> -->
    <div v-show="false">test5566</div>
  </div>
</template>

<script setup lang="ts">
import Example1 from '@/components/Example1.vue';
import Example2 from '@/components/Example2.vue';
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
}
</style>
