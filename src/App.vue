<template>
  <div>
    <SunEditor
      ref="editorEl"
      v-bind="editorProps"
      v-on:audio-upload="handleAudioUpload"
      v-on:audio-upload-before="audioUploadBefore"
      v-on:audio-upload-error="audioUploadError"
      v-on:blur="handleBlur"
      v-on:input="handleInput"
      v-on:change="handleChange"
      v-on:click="handleClick"
      v-on:copy="handleCopy"
      v-on:cut="handleCut"
      v-on:drop="handleDrop"
      v-on:focus="handleFocus"
      v-on:get-sun-editor-instance="handleGetSunEditorInstance"
      v-on:image-upload="handleImageUpload"
      v-on:image-upload-before="handleImageUploadBefore"
      v-on:image-upload-error="handleImageUploadError"
      v-on:image-upload-handler="handleImageUploadHandler"
      v-on:key-down="handleKeyDown"
      v-on:past="handlePaste"
      v-on:resize-editor="handleResizeEditor"
      v-on:save="handleSave"
      v-on:scroll="handleScroll"
      v-on:set-tool-bar-buttons="handleSetToolbarButtons"
      v-on:show-controller="handleShowController"
      v-on:show-inline="handleShowInline"
      v-on:toggle-full-screen="handleToggleFullScreen"
      v-on:video-upload="handleVideoUpload"
      v-on:video-upload-before="handleVideoUploadBefore"
      v-on:video-upload-error="handleVideoUploadError"
      v-on:video-upload-handler="handleVideoUploadHandler"
    />
    <button type="button" v-on:click="changeSetup">change setup</button>
  </div>
</template>

<script setup lang="ts">
import plugins from 'suneditor/src/plugins';
import { ref } from 'vue';

import SunEditor from '@/SunEditor.vue';
import type { ExportIEmits, IProps, SetOptions } from '@/types';

const editorConfig: SetOptions = {
  buttonList: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['paragraphStyle', 'blockquote'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
    '/', // Line break
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'lineHeight'],
    ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
    ['fullScreen', 'showBlocks', 'codeView'],
    ['preview', 'print'],
    ['save', 'template'],
    /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
  ],
  charCounter: true,
  charCounterLabel: 'Maintain by Purin - Total Character',
  formats: ['p', 'blockquote', 'h2', 'h3'],
  height: 'auto',
  minHeight: '150',
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  width: '500px',
};
const editorConfig2: SetOptions = {
  buttonList: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['paragraphStyle', 'blockquote'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
  ],
  charCounter: true,
  charCounterLabel: 'Maintain by Woody - Total Character',
  formats: ['p', 'blockquote', 'h2', 'h3'],
  height: '300px',
  minHeight: '150px',
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  width: '500px',
};

const currentSetup = ref<SetOptions>(editorConfig);
const editorEl = ref<InstanceType<typeof SunEditor> | null>(null);

const changeSetup = () => {
  currentSetup.value = editorConfig2;
};

const toggleDisable = () => {};

const handleInsert = () => {
  console.log('editorEl.value', editorEl.value);
  if (editorEl.value) {
    const a = editorEl.value;
    console.log('a', a);
    editorEl.value.insertHTML('<h2>insert message outer</h2>');
  }
};

// * PROPS
const editorProps: IProps = {
  appendContents: 'test append contents',
  autoFocus: true,
  defaultValue: 'test default value',
  disableToolbar: true,
  disableWysiwyg: true,
  height: '500px', // TODO: no need?
  hide: false, // TODO: no need?
  hideToolbar: false, // TODO: no need?
  isNoticeOpen: false,
  lang: 'ja', // TODO; no need?
  name: 'test name', // TODO: no need?
  noticeMessage: 'test notice message',
  placeholder: 'test placeholder 5566', // TODO: no need?
  readOnly: false,
  setAllPlugins: false,
  setContents: 'test set contents', // TODO: no need?
  setDefaultStyle: 'test set default style',
  setOptions: editorConfig,
  width: '500px', // TODO: no need?
};

// * EXPOSE METHODS

// * EVENT HANDLERS
const handleAudioUpload: ExportIEmits['audioUpload'] = (targetElement, index, state, info, remainingFilesCount) => {
  console.log('audioUpload');
};

const audioUploadBefore: ExportIEmits['audioUploadBefore'] = (files, audioInputInformation, uploadHandler) => {
  console.log('audioUploadBefore');
  return false;
};

const audioUploadError: ExportIEmits['audioUploadError'] = (errorMessage, result) => {
  console.log('audioUploadError');
  return false;
};

const handleBlur: ExportIEmits['blur'] = (focusEvent) => {
  console.log('blur');
};

const handleChange: ExportIEmits['change'] = (content) => {
  console.log('change');
};

const handleClick: ExportIEmits['click'] = (mouseEvent) => {
  console.log('click');
};

const handleCopy: ExportIEmits['copy'] = (clipboardEvent, clipboardData) => {
  console.log('copy');
  return false;
};

const handleCut: ExportIEmits['cut'] = (clipboardEvent, clipboardData) => {
  console.log('cut');
  return false;
};

const handleDrop: ExportIEmits['drop'] = (dragEvent, cleanData, maxCharCount, core) => {
  console.log('drop');
  return '';
};

const handleFocus: ExportIEmits['focus'] = (focusEvent) => {
  console.log('focus');
};

const handleGetSunEditorInstance: ExportIEmits['getSunEditorInstance'] = (sunEditor) => {
  console.log('getSunEditorInstance');
};

const handleImageUpload: ExportIEmits['imageUpload'] = (targetImgElement, index, state, info, remainingFileCount) => {
  console.log('imageUpload');
};

const handleImageUploadBefore: ExportIEmits['imageUploadBefore'] = (files, info, core, uploadHandler) => {
  console.log('imageUploadBefore');
  return false;
};

const handleImageUploadError: ExportIEmits['imageUploadError'] = (errorMessage, result) => {
  console.log('imageUploadError');
  return false;
};

const handleImageUploadHandler: ExportIEmits['imageUploadHandler'] = (xmlHttpRequest, info, core) => {
  console.log('imageUploadHandler');
};

const handleInput: ExportIEmits['input'] = (inputEvent) => {
  console.log('input');
};

const handleKeyDown: ExportIEmits['keyDown'] = (keyboardEvent) => {
  console.log('keydown');
};

const handlePaste: ExportIEmits['paste'] = (clipboardEvent, cleanData, maxCharCount, core) => {
  console.log('paste');
  return false;
};

const handleResizeEditor: ExportIEmits['resizeEditor'] = (height, core, prevHeight, resizeObserverEntry) => {
  console.log('resizeEditor');
  return {};
};

const handleSave: ExportIEmits['save'] = (contents) => {
  console.log('save');
};

const handleScroll: ExportIEmits['scroll'] = (uiEvent) => {
  console.log('scroll');
};

const handleSetToolbarButtons: ExportIEmits['setToolbarButtons'] = (buttonList) => {
  console.log('setToolbarButtons');
};

const handleShowController: ExportIEmits['showController'] = (controllers, name) => {
  console.log('showController');
};

const handleShowInline: ExportIEmits['showInline'] = (context, toolbar) => {
  console.log('showInline');
};

const handleToggleFullScreen: ExportIEmits['toggleFullScreen'] = (isFullScreen) => {
  console.log('toggleFullScreen');
};

const handleVideoUpload: ExportIEmits['videoUpload'] = (targetElement, index, state, info, remainingFilesCount) => {
  console.log('videoUpload');
};

const handleVideoUploadBefore: ExportIEmits['videoUploadBefore'] = (files, info, core, uploadHandler) => {
  console.log('videoUploadBefore');
  return false;
};

const handleVideoUploadError: ExportIEmits['videoUploadError'] = (errorMessage, result) => {
  console.log('videoUploadError');
  return false;
};

const handleVideoUploadHandler: ExportIEmits['videoUploadHandler'] = (xmlHttpRequest, info, core) => {
  console.log('videoUploadHandler');
};
</script>

<style scoped></style>
