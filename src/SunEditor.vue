<template>
  <textarea v-bind:id="editorId" />
</template>

<script setup lang="ts">
import 'suneditor/dist/css/suneditor.min.css';

import suneditor from 'suneditor';
import type { Context } from 'suneditor/src/lib/context';
import type SunEditorCore from 'suneditor/src/lib/core';
import type {
  audioInputInformation,
  Controllers,
  Core,
  fileInfo,
  imageInputInformation,
  videoInputInformation,
} from 'suneditor/src/lib/core';
import { computed, getCurrentInstance, onMounted, onUnmounted, ref, watch, watchEffect } from 'vue';

import type { LangType, SetOptions, UploadStateType } from '@/types';

export interface IProps {
  appendContents?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  disable?: boolean;
  disableToolbar?: boolean;
  disableWysiwyg?: boolean;
  height?: string;
  hide?: boolean; // TODO: no need?
  hideToolbar?: boolean;
  isNoticeOpen?: boolean;
  lang?: LangType;
  name?: string;
  noticeMessage?: string;
  placeholder?: string;
  readOnly?: boolean;
  setAllPlugins?: boolean;
  setContents?: string;
  setDefaultStyle?: string; // TODO: no need?
  setOptions?: SetOptions;
  width?: string;
}

export interface IEmits {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
  (event: 'scroll', uiEvent: UIEvent): void;
  (event: 'copy', clipboardEvent: ClipboardEvent): boolean;
  (event: 'cut', clipboardEvent: ClipboardEvent): boolean;
  (event: 'click', mouseEvent: MouseEvent): void;
  (event: 'mouseDown', mouseEvent: MouseEvent): void;
  (event: 'keyUp', keyboardEvent: KeyboardEvent): void;
  (event: 'keyDown', keyboardEvent: KeyboardEvent): void;
  (event: 'focus', focusEvent: FocusEvent): void;
  (event: 'blur', focusEvent: FocusEvent): void;
  (event: 'save', contents: string): void;
  (event: 'setToolbarButtons', buttonList: Array<any>): void;
  (event: 'load', reload: boolean): void;
  (event: 'drop', dragEvent: DragEvent, cleanData: string, maxCharCount: boolean, core: Core): boolean | string;
  (event: 'paste', clipboardEvent: ClipboardEvent, cleanData: string, maxCharCount: boolean, core: Core): void;
  (
    event: 'imageUpload',
    targetImgElement: HTMLImageElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
  ): void;
  (
    event: 'videoUpload',
    targetElement: HTMLElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
  ): void;
  (
    event: 'audioUpload',
    targetElement: HTMLElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
  ): void;
  (
    event: 'imageUploadBefore',
    files: Array<File>, // TODO: different with origin
    info: imageInputInformation,
    core: Core,
    uploadHandler: Function,
  ): boolean | any[] | undefined;
  (
    event: 'videoUploadBefore',
    files: Array<File>, // TODO: different with origin
    info: videoInputInformation,
    core: Core,
    uploadHandler: Function,
  ): boolean | any[] | undefined;
  (
    event: 'audioUploadBefore',
    files: Array<File>, // TODO: different with origin
    info: audioInputInformation,
    uploadHandler: Function,
  ): boolean | any[] | undefined;
  (event: 'imageUploadError', errorMessage: string, result: any): boolean;
  (event: 'videoUploadError', errorMessage: string, result: any): boolean;
  (event: 'audioUploadError', errorMessage: string, result: any): boolean;
  (event: 'toggleCodeView', isCodeView: boolean): void;
  (event: 'toggleFullScreen', isFullScreen: boolean): void;
  (event: 'showInline', context: Context, toolbar: Element): void;
  (event: 'showController', controllers: Controllers, name: string): void;
  (event: 'imageUploadHandler', xmlHttpRequest: XMLHttpRequest, info: imageInputInformation, core: Core): void;
  (event: 'videoUploadHandler', xmlHttpRequest: XMLHttpRequest, info: videoInputInformation, core: Core): void;
  (event: 'audioUploadHandler', xmlHttpRequest: XMLHttpRequest, info: audioInputInformation, core: Core): void;
  (
    event: 'resizeEditor',
    height: number,
    core: Core,
    prevHeight: number,
    resizeObserverEntry: ResizeObserverEntry | null,
  ): {};
  (event: 'getSunEditorInstance', sunEditor: SunEditorCore): void;
}

const props = withDefaults(defineProps<IProps>(), {
  disable: false,
  disableToolbar: false,
  disableWysiwyg: false,
  hideToolbar: false,
  isNoticeOpen: false,
  noticeMessage: '',
  readOnly: false,
  setAllPlugins: true,
  setOptions: () => ({}),
  width: '100%',
});

const emits = defineEmits<IEmits>();

// const textAreaEl = ref<HTMLTextAreaElement | null>(null);
const editorInstance = ref<SunEditorCore | null>(null);
// const initialEffect = ref<boolean>(true);

const compInstance = getCurrentInstance();
const editorId = compInstance ? 'editor' + compInstance.uid.toString() : 'null';

// watchEffect(() => {
//   if (textAreaEl.value) {
//     editorInstance.value = suneditor.create(textAreaEl.value, props.setOptions);
//   }
// });

// setOptions watcher
const setOptions = computed(() => props.setOptions);
watch(setOptions, (newValue, oldValue) => {
  if (editorInstance.value) {
    editorInstance.value.setOptions(newValue);
  }
});

// TODO: set default style ?

// notice watcher
watchEffect(() => {
  if (editorInstance.value) {
    if (props.isNoticeOpen) {
      editorInstance.value.noticeOpen(props.noticeMessage);
    } else {
      editorInstance.value.noticeClose();
    }
  }
});

// TODO: save
// TODO: get context
// TODO: get contents
// TODO: get text
// TODO: get char count
// TODO: get images info
// TODO: get files info
// TODO: insert image

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

// append contents

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

// disable wysiwyg watcher
const disableWysiwyg = computed(() => props.disableWysiwyg);
watch(disableWysiwyg, (newValue, oldValue) => {
  if (editorInstance.value) {
    if (newValue) {
      editorInstance.value.wysiwyg.disable();
    } else {
      editorInstance.value.wysiwyg.enable();
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

onMounted(() => {
  console.log('create sunEditor!');
  const instance = suneditor.create(editorId, props.setOptions);

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
  instance.onBlur = (event: FocusEvent, core: Core): void => emits('blur', event); // TODO: check event type & value
  // instance.onDrop = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string =>
  //   emits('drop', event, cleanData, maxCharCount, core);
  // instance.onPaste = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string =>
  //   emits('paste', event, cleanData, maxCharCount, core); // TODO: fix return type
  // instance.onCopy = (event: Event, clipboardData: any, core: Core): boolean => {}; // TODO: fix return type
  // instance.onCut = (e: Event, clipboardData: any, core: Core): boolean => {}; // TODO: fix return type
  instance.onSave = (contents: string, core: Core): void => emits('save', contents);
  instance.showInline = (toolbar: Element, context: Context, core: Core): void => emits('showInline', context, toolbar);
  // instance.showController = (name: String, controllers: Controllers, core: Core): void =>
  //   emits('showController', { controllers, name });
  instance.imageUploadHandler = (xmlHttp: XMLHttpRequest, info: imageInputInformation, core: Core): void =>
    emits('imageUploadHandler', xmlHttp, info, core);
  instance.videoUploadHandler = (xmlHttp: XMLHttpRequest, info: videoInputInformation, core: Core): void =>
    emits('videoUploadHandler', xmlHttp, info, core);
  instance.audioUploadHandler = (xmlHttp: XMLHttpRequest, info: audioInputInformation, core: Core): void =>
    emits('audioUploadHandler', xmlHttp, info, core);
  instance.toggleCodeView = (isCodeView: boolean, core: Core): void => emits('toggleCodeView', isCodeView);
  instance.toggleFullScreen = (isFullScreen: boolean, core: Core): void => emits('toggleFullScreen', isFullScreen);
  // instance.onImageUploadBefore = (
  //   files: any[],
  //   info: imageInputInformation,
  //   core: Core,
  //   uploadHandler: Function,
  // ): boolean | any[] | undefined => {
  //   emits('imageUploadBefore',  files, info, core, uploadHandler );
  // }; // TODO: fix return type
  // instance.onVideoUploadBefore = (
  //   files: any[],
  //   info: videoInputInformation,
  //   core: Core,
  //   uploadHandler: Function,
  // ): boolean | any[] | undefined => {
  //   emits('videoUploadBefore', files, info, core, uploadHandler);
  // }; // TODO: fix return type
  // instance.onAudioUploadBefore = (
  //   files: any[],
  //   info: audioInputInformation,
  //   core: Core,
  //   uploadHandler: Function,
  // ): boolean | any[] | undefined => {
  //   emits('audioUploadBefore', files, info, uploadHandler);
  // }; // TODO: fix return type
  instance.onImageUpload = (
    targetElement: HTMLImageElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
    core: Core,
  ): void => emits('imageUpload', targetElement, index, state, info, remainingFilesCount);
  instance.onVideoUpload = (
    targetElement: HTMLIFrameElement | HTMLVideoElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
    core: Core,
  ): void => emits('videoUpload', targetElement, index, state, info, remainingFilesCount);
  instance.onAudioUpload = (
    targetElement: HTMLAudioElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
    core: Core,
  ): void => emits('audioUpload', targetElement, index, state, info, remainingFilesCount);
  instance.onImageUploadError = (errorMessage: string, result: any, core: Core): boolean =>
    emits('imageUploadError', errorMessage, result);
  instance.onVideoUploadError = (errorMessage: string, result: any, core: Core): boolean =>
    emits('videoUploadError', errorMessage, result);
  instance.onAudioUploadError = (errorMessage: string, result: any, core: Core): boolean =>
    emits('audioUploadError', errorMessage, result);
  instance.onResizeEditor = (
    height: number,
    prevHeight: number,
    core: Core,
    resizeObserverEntry: ResizeObserverEntry | null,
  ): {} => emits('resizeEditor', height, core, prevHeight, resizeObserverEntry);
  instance.onSetToolbarButtons = (buttonList: any[], core: Core): void => emits('setToolbarButtons', buttonList);

  editorInstance.value = instance;
});

onUnmounted(() => {
  if (editorInstance.value) {
    editorInstance.value.destroy();
  }

  editorInstance.value = null;
});
</script>

<style lang="scss" scoped></style>
