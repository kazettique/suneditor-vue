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
  </div>
</template>

<script setup lang="ts">
import plugins from 'suneditor/src/plugins';

import getLanguage from '@/misc/getLanguage';
import SunEditor, { type IProps } from '@/SunEditor.vue';
import type { ExportIEmits, SetOptions } from '@/types';

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
  height: '200px',
  hideToolbar: false,
  lang: getLanguage('zh_tw'),
  minHeight: '150',
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  width: '500px',
};

// * PROPS
const editorProps: IProps = {
  appendContents: 'test append contents',
  autoFocus: true,
  defaultValue: 'test default value',
  disableToolbar: true,
  disableWysiwyg: true,
  hide: false, // TODO: no need?
  isNoticeOpen: false,
  // name: 'test name', // TODO: no need?
  noticeMessage: 'test notice message',
  readOnly: false,
  setAllPlugins: false,
  setContents: 'test set contents', // TODO: no need?
  setDefaultStyle: 'test set default style',
  setOptions: editorConfig,
};

const editorEventHandlers: ExportIEmits = {
  audioUpload: (targetElement, index, state, info, remainingFilesCount) => {
    console.log('audioUpload');
  },
  audioUploadBefore: (files, audioInputInformation, uploadHandler) => {
    console.log('audioUploadBefore');
    return false;
  },
  audioUploadError: (errorMessage, result) => {
    console.log('audioUploadError');
    return false;
  },
  audioUploadHandler: (xmlHttpRequest, info, core) => {
    console.log('audioUploadHandler');
  },
  blur: (focusEvent) => {
    console.log('blur');
  },
  change: (content) => {
    console.log('change');
  },
  click: (mouseEvent) => {
    console.log('click');
  },
  copy: (clipboardEvent, clipboardData) => {
    console.log('copy');
    return false;
  },
  cut: (clipboardEvent, clipboardData) => {
    console.log('cut');
    return false;
  },
  drop: (dragEvent, cleanData, maxCharCount, core) => {
    console.log('drop');
    return '';
  },
  focus: (focusEvent) => {
    console.log('focus');
  },
  getSunEditorInstance: (sunEditor) => {
    console.log('getSunEditorInstance');
  },
  imageUpload: (targetImgElement, index, state, info, remainingFileCount) => {
    console.log('imageUpload');
  },
  imageUploadBefore: (files, info, core, uploadHandler) => {
    console.log('imageUploadBefore');
    return false;
  },
  imageUploadError: (errorMessage, result) => {
    console.log('imageUploadError');
    return false;
  },
  imageUploadHandler: (xmlHttpRequest, info, core) => {
    console.log('imageUploadHandler');
  },
  input: (inputEvent) => {
    console.log('input');
  },
  keyDown: (keyboardEvent) => {
    console.log('keydown');
  },
  keyUp: (keyboardEvent: KeyboardEvent) => {
    console.log('keyUp');
  },
  load: (reload: boolean) => {
    console.log('load');
  },
  mouseDown: (mouseEvent: MouseEvent) => {
    console.log('mouseDown');
  },
  paste: (clipboardEvent, cleanData, maxCharCount, core) => {
    console.log('paste');
    return false;
  },
  resizeEditor: (height, core, prevHeight, resizeObserverEntry) => {
    console.log('resizeEditor');
    return {};
  },
  save: (contents) => {
    console.log('save');
  },
  scroll: (uiEvent) => {
    console.log('scroll');
  },
  setToolbarButtons: (buttonList) => {
    console.log('setToolbarButtons');
  },
  showController: (controllers, name) => {
    console.log('showController');
  },
  showInline: (context, toolbar) => {
    console.log('showInline');
  },
  toggleCodeView: (isCodeView: boolean) => {
    console.log('toggleCodeView');
  },
  toggleFullScreen: (isFullScreen) => {
    console.log('toggleFullScreen');
  },
  videoUpload: (targetElement, index, state, info, remainingFilesCount) => {
    console.log('videoUpload');
  },
  videoUploadBefore: (files, info, core, uploadHandler) => {
    console.log('videoUploadBefore');
    return false;
  },
  videoUploadError: (errorMessage, result) => {
    console.log('videoUploadError');
    return false;
  },
  videoUploadHandler: (xmlHttpRequest, info, core) => {
    console.log('videoUploadHandler');
  },
};
</script>

<style scoped lang="scss"></style>
