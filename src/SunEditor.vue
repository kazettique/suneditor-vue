<template>
  <textarea style="visibility: hidden" ref="textArea" />
</template>

<script setup lang="ts">
import type { IEmits, IProps, UploadStateType } from '@/types';
import suneditor from 'suneditor';
import type { Context } from 'suneditor/src/lib/context';
import type SunEditorCore from 'suneditor/src/lib/core';
import type {
Controllers,
Core,
audioInputInformation,
fileInfo,
imageInputInformation,
videoInputInformation,
} from 'suneditor/src/lib/core';
import { computed, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';

const props = withDefaults(defineProps<IProps>(), {
  setOptions: () => ({}),
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

watchEffect(() => {
  if (textAreaEl.value) {
    editorInstance.value = suneditor.create(textAreaEl.value, props.setOptions);
  }
});

// setOptions watcher
const setOptions = computed(() => props.setOptions);
watch(setOptions, (newValue, oldValue) => {
  if (editorInstance.value) {
    editorInstance.value.setOptions(newValue);
  }
});

// readOnly watcher
const readOnly = computed(() => props.readOnly);
watch(readOnly, (newValue, oldValue) => {
  if (editorInstance.value) {
    editorInstance.value.readOnly(newValue);
  }
});

// disable watcher
const disable = computed(() => props.disable);
watch(disable, (newValue, oldValue) => {
  if (editorInstance.value) {
    if (newValue) {
      editorInstance.value.disable();
    } else {
      editorInstance.value.enable();
    }
  }
});

// hide toolbar watcher
const hideToolbar = computed(() => props.hideToolbar);
watch(hideToolbar, (newValue, oldValue) => {
  if (editorInstance.value) {
    if (newValue) {
      editorInstance.value.toolbar.hide();
    } else {
      editorInstance.value.toolbar.show();
    }
  }
});

// disable toolbar watcher
const disableToolbar = computed(() => props.disableToolbar);
watch(disableToolbar, (newValue, oldValue) => {
  if (editorInstance.value) {
    if (newValue) {
      editorInstance.value.toolbar.disable();
    } else {
      editorInstance.value.toolbar.enable();
    }
  }
});

const insertHTML = (
  html: Element | string,
  notCleaningData?: boolean,
  checkCharCount?: boolean,
  rangeSelection?: boolean,
): void => {
  if (editorInstance.value) {
    editorInstance.value.insertHTML(html, notCleaningData, checkCharCount, rangeSelection);
  }
};

const setContents = (contents: string): void => {
  if (editorInstance.value) {
    editorInstance.value.setContents(contents);
  }
};

onMounted(() => {
  if (textAreaEl.value) {
    const instance = suneditor.create(textAreaEl.value, props.setOptions);

    // setup custom events
    instance.onScroll = (event: Event, core: Core): void => {
      console.log('event', event);
      // emits('scroll', event)
    };
    instance.onFocus = (event: Event, core: Core): void => emits('focus', event as FocusEvent);
    instance.onMouseDown = (event: Event, core: Core): void => emits('mouseDown', event as MouseEvent);
    instance.onClick = (event: Event, core: Core): void => emits('click', event as MouseEvent);
    // instance.onInput = (event: Event, core: Core): void => emits('input', event); // TODO: check event type & value
    instance.onKeyDown = (event: Event, core: Core): void => emits('keyDown', event as KeyboardEvent);
    instance.onKeyUp = (event: Event, core: Core): void => emits('keyUp', event as KeyboardEvent);
    instance.onChange = (contents: string, core: Core): void => emits('change', contents);
    // instance.onBlur = (event: FocusEvent, core: Core): void => emits('blur', event); // TODO: check event type & value
    // instance.onDrop = (e: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string => {}; // TODO: fix return type
    // instance.onPaste = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string => {}; // TODO: fix return type
    // instance.onCopy = (event: Event, clipboardData: any, core: Core): boolean => {}; // TODO: fix return type
    // instance.onCut = (e: Event, clipboardData: any, core: Core): boolean => {}; // TODO: fix return type
    instance.onSave = (contents: string, core: Core): void => emits('save', contents);
    instance.showInline = (toolbar: Element, context: Context, core: Core): void =>
      emits('showInline', { toolbar, context });
    instance.showController = (name: String, controllers: Controllers, core: Core): void =>
      emits('showController', { name, controllers });
    instance.imageUploadHandler = (xmlHttp: XMLHttpRequest, info: imageInputInformation, core: Core): void =>
      emits('imageUploadHandler', { xmlHttp, info, core });
    instance.videoUploadHandler = (xmlHttp: XMLHttpRequest, info: videoInputInformation, core: Core): void =>
      emits('videoUploadHandler', { xmlHttp, info, core });
    instance.audioUploadHandler = (xmlHttp: XMLHttpRequest, info: audioInputInformation, core: Core): void =>
      emits('audioUploadHandler', { xmlHttp, info, core });
    instance.toggleCodeView = (isCodeView: boolean, core: Core): void => emits('toggleCodeView', isCodeView);
    instance.toggleFullScreen = (isFullScreen: boolean, core: Core): void => emits('toggleFullScreen', isFullScreen);
    instance.onImageUploadBefore = (
      files: any[],
      info: imageInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => {
      emits('imageUploadBefore', { files, info, uploadHandler });
    }; // TODO: fix return type
    instance.onVideoUploadBefore = (
      files: any[],
      info: videoInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => {
      emits('videoUploadBefore', { files, info, uploadHandler });
    }; // TODO: fix return type
    instance.onAudioUploadBefore = (
      files: any[],
      info: audioInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => {
      emits('audioUploadBefore', { files, info, uploadHandler });
    }; // TODO: fix return type
    instance.onImageUpload = (
      targetElement: HTMLImageElement,
      index: number,
      state: UploadStateType,
      info: fileInfo,
      remainingFilesCount: number,
      core: Core,
    ): void => emits('imageUpload', { targetElement, index, state, info, remainingFilesCount });
    instance.onVideoUpload = (
      targetElement: HTMLIFrameElement | HTMLVideoElement,
      index: number,
      state: UploadStateType,
      info: fileInfo,
      remainingFilesCount: number,
      core: Core,
    ): void => emits('videoUpload', { targetElement, index, state, info, remainingFilesCount });
    instance.onAudioUpload = (
      targetElement: HTMLAudioElement,
      index: number,
      state: UploadStateType,
      info: fileInfo,
      remainingFilesCount: number,
      core: Core,
    ): void => emits('audioUpload', { targetElement, index, state, info, remainingFilesCount });

    editorInstance.value = instance;
  }
});

onUnmounted(() => {
  if (editorInstance.value) {
    editorInstance.value.destroy();
  }

  editorInstance.value = null;
});
</script>

<style lang="scss" scoped></style>
