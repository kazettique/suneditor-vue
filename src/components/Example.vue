<template>
  <div>
    <SunEditor
      ref="editorEl"
      v-bind="props"
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
      v-on:get-char-count="editorEventHandlers.getCharCount"
      v-on:get-text="editorEventHandlers.getText"
      v-model="testVModel"
    />
    <button v-on:click="handleTest">btn</button>
    <div style="color: #ffffff">{{ testVModel }}</div>
  </div>
</template>

<script setup lang="ts">
import 'suneditor/dist/css/suneditor.min.css';

import { ref } from 'vue';

import SunEditor, { type IProps } from '@/index';
import editorEventHandlers from '@/mock/emits';
import editorProps from '@/mock/props';

const editorEl = ref<InstanceType<typeof SunEditor> | null>(null);
const props = ref<IProps>(editorProps);

const testVModel = ref<string>('');

const handleTest = () => {
  testVModel.value = testVModel.value + '123';
};

const handleClick = () => {
  // props.value = {
  // ...editorProps,
  // disable: !props.value.disable,
  // disableToolbar: !props.value.disableToolbar,
  // disableWysiwyg: !props.value.disableWysiwyg,
  // isNoticeOpen: !props.value.isNoticeOpen,
  // noticeMessage: props.value.noticeMessage + 'a',
  // readOnly: !props.value.readOnly,
  // };
  // testVModel.value = '';
};
</script>

<style scoped lang="scss"></style>
