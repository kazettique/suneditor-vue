<template>
  <div>
    <SunEditor
      ref="editorEl"
      v-bind="editorProps"
      v-on:audio-upload="editorEventHandlers.audioUpload"
      v-on:audio-upload-before="editorEventHandlers.audioUploadBefore"
      v-on:audio-upload-error="editorEventHandlers.audioUploadError"
      v-on:blur="editorEventHandlers.blur"
      v-on:input="editorEventHandlers.input"
      v-on:change="editorEventHandlers.change"
      v-on:click="editorEventHandlers.click"
      v-on:copy="editorEventHandlers.copy"
      v-on:cut="editorEventHandlers.cut"
      v-on:drop="editorEventHandlers.drop"
      v-on:focus="editorEventHandlers.focus"
      v-on:get-sun-editor-instance="editorEventHandlers.getSunEditorInstance"
      v-on:image-upload="editorEventHandlers.imageUpload"
      v-on:image-upload-before="editorEventHandlers.imageUploadBefore"
      v-on:image-upload-error="editorEventHandlers.imageUploadError"
      v-on:image-upload-handler="editorEventHandlers.imageUploadHandler"
      v-on:key-down="editorEventHandlers.keyDown"
      v-on:paste="editorEventHandlers.paste"
      v-on:resize-editor="editorEventHandlers.resizeEditor"
      v-on:save="editorEventHandlers.save"
      v-on:scroll="editorEventHandlers.scroll"
      v-on:set-tool-bar-buttons="editorEventHandlers.setToolbarButtons"
      v-on:show-controller="editorEventHandlers.showController"
      v-on:show-inline="editorEventHandlers.showInline"
      v-on:toggle-full-screen="editorEventHandlers.toggleFullScreen"
      v-on:video-upload="editorEventHandlers.videoUpload"
      v-on:video-upload-before="editorEventHandlers.videoUploadBefore"
      v-on:video-upload-error="editorEventHandlers.videoUploadError"
      v-on:video-upload-handler="editorEventHandlers.videoUploadHandler"
    />
    <button v-on:click="save">save</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import editorEventHandlers from '@/mock/emits';
import editorProps from '@/mock/props';
import SunEditor from '@/SunEditor.vue';
import type { IExpose } from '@/types';

const editorEl = ref<InstanceType<typeof SunEditor> | null>(null);

// * EXPOSE METHODS
const insertHTML: IExpose['insertHTML'] = (html, notCleaningData, checkCharCount, rangeSelection) => {
  if (editorEl.value) {
    editorEl.value.insertHTML(html, notCleaningData, checkCharCount, rangeSelection);
  }
};

const save: IExpose['save'] = () => {
  console.log('save');
};
</script>

<style scoped lang="scss"></style>
