<template>
  <div data-test-comp="SunEditor">
    <textarea v-bind:id="editorId" />
  </div>
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

import type { IExpose, SetOptions, UploadStateType } from './types';

// TODO: waiting for enabling to move outside of SFC, until Vue 3.3 release
export interface IProps {
  defaultValue?: string;
  disable?: boolean;
  disableToolbar?: boolean;
  disableWysiwyg?: boolean;
  isNoticeOpen?: boolean;
  isTestingMode?: boolean; // component testing flag
  modelValue?: string;
  noticeMessage?: string;
  readOnly?: boolean;
  setAllPlugins?: boolean;
  setDefaultStyle?: string;
  setOptions?: SetOptions;
}

// TODO: waiting for enabling to move outside of SFC, until Vue 3.3 release
interface IEmits {
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
  (
    event: 'resizeEditor',
    height: number,
    core: Core,
    prevHeight: number,
    resizeObserverEntry: ResizeObserverEntry | null,
  ): {};
  (event: 'paste', clipboardEvent: ClipboardEvent, cleanData: string, maxCharCount: number, core: Core):
    | boolean
    | string;
  (event: 'input', inputEvent: InputEvent): void;
  (event: 'drop', dragEvent: DragEvent, cleanData: string, maxCharCount: number, core: Core): boolean;
  (event: 'copy', clipboardEvent: ClipboardEvent, clipboardData: any): boolean;
  (event: 'cut', clipboardEvent: ClipboardEvent, clipboardData: any): boolean;
  (event: 'scroll', uiEvent: UIEvent): void;
  (event: 'change', content: string): void;
  (event: 'click', mouseEvent: PointerEvent): void;
  (event: 'mouseDown', mouseEvent: MouseEvent): void;
  (event: 'keyUp', keyboardEvent: KeyboardEvent): void;
  (event: 'keyDown', keyboardEvent: KeyboardEvent): void;
  (event: 'focus', focusEvent: FocusEvent): void;
  (event: 'blur', focusEvent: FocusEvent): void;
  (event: 'save', contents: string): void;
  (event: 'setToolbarButtons', buttonList: Array<any>): void;
  (event: 'load', reload: boolean): void;
  (event: 'imageUploadError', errorMessage: string, result: any): boolean;
  (event: 'videoUploadError', errorMessage: string, result: any): boolean;
  (event: 'audioUploadError', errorMessage: string, result: any): boolean;
  (event: 'toggleCodeView', isCodeView: boolean): void;
  (event: 'toggleFullScreen', isFullScreen: boolean): void;
  (event: 'showInline', context: Context, toolbar: Element): void;
  (event: 'imageUploadHandler', xmlHttpRequest: XMLHttpRequest, info: imageInputInformation, core: Core): void;
  (event: 'videoUploadHandler', xmlHttpRequest: XMLHttpRequest, info: videoInputInformation, core: Core): void;
  (event: 'audioUploadHandler', xmlHttpRequest: XMLHttpRequest, info: audioInputInformation, core: Core): void;
  (event: 'getSunEditorInstance', sunEditor: SunEditorCore): void;
  (event: 'showController', controllers: Controllers, name: string): void;
  (event: 'update:modelValue', newValue: string): void;
}

const props = withDefaults(defineProps<IProps>(), {
  disable: false,
  disableToolbar: false,
  disableWysiwyg: false,
  hideToolbar: false,
  isNoticeOpen: false,
  isTestingMode: false,
  noticeMessage: '',
  readOnly: false,
  setAllPlugins: true,
  setOptions: () => ({}),
  width: '100%',
});

const emits = defineEmits<IEmits>();

const editorInstance = ref<SunEditorCore | null>(null);

const compInstance = getCurrentInstance();
const editorId: string = compInstance ? 'editor_' + compInstance.uid.toString() : 'null';

// props watcher: setOptions
const setOptions = computed(() => props.setOptions);
watch(setOptions, (newValue, oldValue) => {
  if (editorInstance.value) {
    editorInstance.value.setOptions(newValue);
  }
});

// props watcher: setDefaultStyle
const setDefaultStyle = computed(() => props.setDefaultStyle);
watch(setDefaultStyle, (newValue, oldValue) => {
  if (editorInstance.value && newValue) {
    return editorInstance.value.setDefaultStyle(newValue);
  }
});

// watcher: notice
watchEffect(() => {
  if (editorInstance.value) {
    if (props.isNoticeOpen) {
      editorInstance.value.noticeOpen(props.noticeMessage);
    } else {
      editorInstance.value.noticeClose();
    }
  }
});

// expose method: save
const save = (): void => {
  if (editorInstance.value) {
    return editorInstance.value.save();
  }
};

// expose method: getContext
const getContext = (): Context => {
  if (editorInstance.value) {
    return editorInstance.value.getContext();
  } else {
    return {} as Context;
  }
};

// expose method: getContents
const getContents = (onlyContents: boolean): string => {
  if (editorInstance.value) {
    return editorInstance.value.getContents(onlyContents);
  } else {
    return '';
  }
};

// expose method: getText
const getText = (): string => {
  if (editorInstance.value) {
    return editorInstance.value.getText();
  } else {
    return '';
  }
};

// expose method: getCharCount
const getCharCount = (charCounterType?: string): number => {
  if (editorInstance.value) {
    return editorInstance.value.getCharCount(charCounterType);
  } else {
    return 0;
  }
};

// expose method: getImagesInfo
const getImagesInfo = (): fileInfo[] => {
  if (editorInstance.value) {
    return editorInstance.value.getImagesInfo();
  } else {
    return [];
  }
};

// expose method: getFilesInfo
const getFilesInfo = (pluginName: string): fileInfo[] => {
  if (editorInstance.value) {
    return editorInstance.value.getFilesInfo(pluginName);
  } else {
    return [];
  }
};

// expose method: insertImage
const insertImage = (files: FileList): void => {
  if (editorInstance.value) {
    editorInstance.value.insertImage(files);
  }
};

// expose method: insertHTML
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

// expose method: setContents
const setContents = (contents: string): void => {
  if (editorInstance.value) {
    editorInstance.value.setContents(contents);
  }
};

// expose method: append contents
const appendContents = (contents: string): void => {
  if (editorInstance.value) {
    editorInstance.value.appendContents(contents);
  }
};

// props watcher: readOnly
const readOnly = computed(() => props.readOnly);
watch(readOnly, (newValue, oldValue) => {
  if (editorInstance.value) {
    editorInstance.value.readOnly(newValue);
  }
});

// props watcher: disable
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

// props watcher: hideToolbar
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

// props watcher: disableWysiwyg
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

// props watcher: disableToolbar
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

defineExpose<IExpose>({
  appendContents,
  getCharCount,
  getContents,
  getContext,
  getFilesInfo,
  getImagesInfo,
  getText,
  insertHTML,
  insertImage,
  save,
  setContents,
});

onMounted(() => {
  const instantiateEditor = (): void => {
    const instance = suneditor.create(editorId, props.setOptions);

    // binding emit handlers with suneditor instance
    instance.onScroll = (event: Event, core: Core): void => emits('scroll', event as UIEvent);
    instance.onFocus = (event: Event, core: Core): void => emits('focus', event as FocusEvent);
    instance.onMouseDown = (event: Event, core: Core): void => emits('mouseDown', event as MouseEvent);
    instance.onClick = (event: Event, core: Core): void => emits('click', event as PointerEvent);
    instance.onInput = (event: Event, core: Core): void => emits('input', event as InputEvent);
    instance.onKeyDown = (event: Event, core: Core): void => emits('keyDown', event as KeyboardEvent);
    instance.onKeyUp = (event: Event, core: Core): void => emits('keyUp', event as KeyboardEvent);
    instance.onChange = (contents: string, core: Core): void => {
      emits('change', contents);
      emits('update:modelValue', contents);
    };
    instance.onBlur = (event: FocusEvent, core: Core): void => emits('blur', event);
    instance.onDrop = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string =>
      emits('drop', event as DragEvent, cleanData, maxCharCount, core);
    instance.onPaste = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string =>
      emits('paste', event as ClipboardEvent, cleanData, maxCharCount, core);
    instance.onCopy = (event: Event, clipboardData: any, core: Core): boolean =>
      emits('copy', event as ClipboardEvent, clipboardData);
    instance.onCut = (event: Event, clipboardData: any, core: Core): boolean =>
      emits('cut', event as ClipboardEvent, clipboardData);
    instance.onSave = (contents: string, core: Core): void => emits('save', contents);
    instance.showInline = (toolbar: Element, context: Context, core: Core): void =>
      emits('showInline', context, toolbar);
    instance.showController = (name: String, controllers: Controllers, core: Core): void =>
      emits('showController', controllers, name as string);
    instance.imageUploadHandler = (xmlHttp: XMLHttpRequest, info: imageInputInformation, core: Core): void =>
      emits('imageUploadHandler', xmlHttp, info, core);
    instance.videoUploadHandler = (xmlHttp: XMLHttpRequest, info: videoInputInformation, core: Core): void =>
      emits('videoUploadHandler', xmlHttp, info, core);
    instance.audioUploadHandler = (xmlHttp: XMLHttpRequest, info: audioInputInformation, core: Core): void =>
      emits('audioUploadHandler', xmlHttp, info, core);
    instance.toggleCodeView = (isCodeView: boolean, core: Core): void => emits('toggleCodeView', isCodeView);
    instance.toggleFullScreen = (isFullScreen: boolean, core: Core): void => emits('toggleFullScreen', isFullScreen);
    instance.onImageUploadBefore = (
      files: any[],
      info: imageInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => emits('imageUploadBefore', files, info, core, uploadHandler);
    instance.onVideoUploadBefore = (
      files: any[],
      info: videoInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => emits('videoUploadBefore', files, info, core, uploadHandler);
    instance.onAudioUploadBefore = (
      files: any[],
      info: audioInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => emits('audioUploadBefore', files, info, uploadHandler);
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
    console.log('SunEditor instance created!');
  };

  // console.log(import.meta.env);
  // * Need to create sun editor instance with setTimeout,
  // * preventing issue about mounting sun editor instance in Vitest environment.
  // * The error message is shown below.
  // ! Error: [SUNEDITOR.create.fail] The element for that id was not found (ID:"editor_1")
  // TODO: use env variable later, not props
  if (props.isTestingMode) setTimeout(instantiateEditor, 500);
  else instantiateEditor();
});

onUnmounted(() => {
  if (editorInstance.value) {
    editorInstance.value.destroy();
  }

  editorInstance.value = null;
});
</script>

<style lang="scss" scoped></style>
