<template>
  <textarea style="visibility: hidden" ref="textArea" />
</template>

<script setup lang="ts">
import type { IEmits, IProps, SetOptions } from '@/types';
import type SunEditorCore from 'suneditor/src/lib/core';
import { computed, onMounted, onUnmounted, ref, watchEffect } from 'vue';
import plugins from 'suneditor/src/plugins';
import suneditor from 'suneditor';
import type { SunEditorOptions } from 'suneditor/src/options';

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

const textAreaEl = ref<HTMLTextAreaElement | null>(null);
const editorInstance = ref<SunEditorCore | null>(null);
// const initialEffect = ref<boolean>(true);

const options = computed<SunEditorOptions>(() => ({
  // lang: props.lang,
}));

watchEffect(() => {
  if (textAreaEl.value) {
    editorInstance.value = suneditor.create(textAreaEl.value, options.value);
  }
});

onMounted(() => {
  // if (textAreaEl.value) {
  //   editorInstance.value = suneditor.create(textAreaEl.value, options.value);
  // }
});

onUnmounted(() => {
  // editorInstance.value = null;
});
</script>

<style lang="scss" scoped></style>
