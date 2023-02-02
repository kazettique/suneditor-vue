<template>
  <textarea style="visibility: hidden" ref="textArea" />
</template>

<script setup lang="ts">
import type { IEmits, IProps } from '@/types/SunEditorProps';
import type SunEditorCore from 'suneditor/src/lib/core';
import { onMounted, onUnmounted, ref } from 'vue';

const props = withDefaults(defineProps<IProps>(), {
  // setOptions: () => {},
  width: '100%',
  setAllPlugins: true,
  disable: false,
  readOnly: false,
  hideToolbar: false,
  disableToolbar: false,
});

const emits = defineEmits<IEmits>();

const txtArea = ref<HTMLTextAreaElement | null>(null);
const editor = ref<SunEditorCore>();
const initialEffect = ref<boolean>(true);

onMounted(() => {});
onUnmounted(() => {});
</script>

<style lang="scss" scoped></style>
