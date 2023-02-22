<template>
  <div data-test-comp="SunEditor" class="sunEditorVue">
    <textarea v-bind:id="editorId" />
  </div>
</template>

<script setup lang="ts">
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
import { isEmptyObject } from './utils';

// TODO: waiting for enabling to move types outside of SFC until Vue 3.3 released
export interface IProps {
  disable?: boolean;
  disableToolbar?: boolean;
  disableWysiwyg?: boolean;
  isNoticeOpen?: boolean;
  isTestingMode?: boolean; // component testing flag
  modelValue?: string;
  noticeMessage?: string;
  readOnly?: boolean;
  setAllPlugins?: boolean;
  setOptions?: SetOptions;
}

// TODO: waiting for enabling to move types outside of SFC until Vue 3.3 released
interface IEmits {
  (event: 'setToolbarButtons', payload: { buttonList: Array<any> }): void;
  (
    event: 'resizeEditor',
    payload: { height: number; prevHeight: number; resizeObserverEntry: ResizeObserverEntry | null },
  ): void;
  (event: 'audioUploadError', payload: { errorMessage: string; result: any }): void;
  (event: 'videoUploadError', payload: { errorMessage: string; result: any }): void;
  (event: 'imageUploadError', payload: { errorMessage: string; result: any }): void;
  (
    event: 'imageUpload',
    payload: {
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLImageElement;
    },
  ): void;
  (
    event: 'audioUploadBefore',
    payload: {
      files: Array<File>; // TODO: different with origin
      info: audioInputInformation;
      uploadHandler: Function;
    },
  ): void;
  (
    event: 'videoUploadBefore',
    payload: {
      files: Array<File>; // TODO: different with origin
      info: videoInputInformation;
      uploadHandler: Function;
    },
  ): void;
  (
    event: 'imageUploadBefore',
    payload: {
      files: Array<File>; // TODO: different with origin
      info: imageInputInformation;
      uploadHandler: Function;
    },
  ): void;
  (event: 'toggleFullScreen', payload: { isFullScreen: boolean }): void;
  (event: 'toggleCodeView', payload: { isCodeView: boolean }): void;
  (event: 'audioUploadHandler', payload: { info: audioInputInformation; xmlHttp: XMLHttpRequest }): void;
  (event: 'videoUploadHandler', payload: { info: videoInputInformation; xmlHttp: XMLHttpRequest }): void;
  (event: 'imageUploadHandler', payload: { info: imageInputInformation; xmlHttp: XMLHttpRequest }): void;
  (event: 'showController', payload: { controllers: Controllers; name: string }): void;
  (event: 'showInline', payload: { context: Context; toolbar: Element }): void;
  (event: 'save', payload: { contents: string }): void;
  (event: 'cut', payload: { clipboardData: any; clipboardEvent: ClipboardEvent }): void;
  (event: 'copy', payload: { clipboardData: any; clipboardEvent: ClipboardEvent }): void;
  (event: 'paste', payload: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: number }): void;
  (event: 'drop', payload: { cleanData: string; dragEvent: DragEvent; maxCharCount: number }): void;
  (event: 'blur', payload: { focusEvent: FocusEvent }): void;
  (event: 'change', payload: { contents: string }): void;
  (event: 'keyUp', payload: { keyboardEvent: KeyboardEvent }): void;
  (event: 'keyDown', payload: { keyboardEvent: KeyboardEvent }): void;
  (event: 'input', payload: { inputEvent: InputEvent }): void;
  (event: 'click', payload: { mouseEvent: PointerEvent }): void;
  (event: 'mouseDown', payload: { mouseEvent: MouseEvent }): void;
  (event: 'focus', payload: { focusEvent: FocusEvent }): void;
  (
    event: 'videoUpload',
    payload: {
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLElement;
    },
  ): void;
  (
    event: 'audioUpload',
    payload: {
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLElement;
    },
  ): void;
  (event: 'scroll', payload: { uiEvent: UIEvent }): void;
  (event: 'load', payload: { reload: boolean }): void;
  (event: 'getSunEditorInstance', payload: { sunEditor: SunEditorCore }): void;

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
  if (editorInstance.value && !isEmptyObject(newValue)) {
    editorInstance.value.setOptions(newValue);
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

    // binding emit handlers with SunEditor instance
    instance.onScroll = (event: Event, core: Core): void => emits('scroll', { uiEvent: event as UIEvent });
    instance.onFocus = (event: Event, core: Core): void => emits('focus', { focusEvent: event as FocusEvent });
    instance.onMouseDown = (event: Event, core: Core): void => emits('mouseDown', { mouseEvent: event as MouseEvent });
    instance.onClick = (event: Event, core: Core): void => emits('click', { mouseEvent: event as PointerEvent });
    instance.onInput = (event: Event, core: Core): void => emits('input', { inputEvent: event as InputEvent });
    instance.onKeyDown = (event: Event, core: Core): void =>
      emits('keyDown', { keyboardEvent: event as KeyboardEvent });
    instance.onKeyUp = (event: Event, core: Core): void => emits('keyUp', { keyboardEvent: event as KeyboardEvent });
    instance.onChange = (contents: string, core: Core): void => {
      emits('change', { contents });
      emits('update:modelValue', contents);
    };
    instance.onBlur = (event: FocusEvent, core: Core): void => emits('blur', { focusEvent: event });
    instance.onDrop = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string => {
      emits('drop', { cleanData, dragEvent: event as DragEvent, maxCharCount });
      return true;
    };
    instance.onPaste = (event: Event, cleanData: string, maxCharCount: number, core: Core): boolean | string => {
      emits('paste', { cleanData, clipboardEvent: event as ClipboardEvent, maxCharCount });
      return true;
    };
    instance.onCopy = (event: Event, clipboardData: any, core: Core): boolean => {
      emits('copy', { clipboardData, clipboardEvent: event as ClipboardEvent });
      return true;
    };
    instance.onCut = (event: Event, clipboardData: any, core: Core): boolean => {
      emits('cut', { clipboardData, clipboardEvent: event as ClipboardEvent });
      return true;
    };
    instance.onSave = (contents: string, core: Core): void => emits('save', { contents });
    instance.showInline = (toolbar: Element, context: Context, core: Core): void =>
      emits('showInline', { context, toolbar });
    instance.showController = (name: String, controllers: Controllers, core: Core): void =>
      emits('showController', { controllers, name: name as string });
    instance.imageUploadHandler = (xmlHttp: XMLHttpRequest, info: imageInputInformation, core: Core): void =>
      emits('imageUploadHandler', { info, xmlHttp });
    instance.videoUploadHandler = (xmlHttp: XMLHttpRequest, info: videoInputInformation, core: Core): void =>
      emits('videoUploadHandler', { info, xmlHttp });
    instance.audioUploadHandler = (xmlHttp: XMLHttpRequest, info: audioInputInformation, core: Core): void =>
      emits('audioUploadHandler', { info, xmlHttp });
    instance.toggleCodeView = (isCodeView: boolean, core: Core): void => emits('toggleCodeView', { isCodeView });
    instance.toggleFullScreen = (isFullScreen: boolean, core: Core): void =>
      emits('toggleFullScreen', { isFullScreen });
    instance.onImageUploadBefore = (
      files: any[],
      info: imageInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => {
      emits('imageUploadBefore', { files, info, uploadHandler });
      return false;
    }; // TODO: adjust return type
    instance.onVideoUploadBefore = (
      files: any[],
      info: videoInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => {
      emits('videoUploadBefore', { files, info, uploadHandler });
      return false;
    }; // TODO: adjust return type
    instance.onAudioUploadBefore = (
      files: any[],
      info: audioInputInformation,
      core: Core,
      uploadHandler: Function,
    ): boolean | any[] | undefined => {
      emits('audioUploadBefore', { files, info, uploadHandler });
      return false;
    }; // TODO: adjust return type
    instance.onImageUpload = (
      targetElement: HTMLImageElement,
      index: number,
      state: UploadStateType,
      info: fileInfo,
      remainingFilesCount: number,
      core: Core,
    ): void => emits('imageUpload', { index, info, remainingFilesCount, state, targetElement });
    instance.onVideoUpload = (
      targetElement: HTMLIFrameElement | HTMLVideoElement,
      index: number,
      state: UploadStateType,
      info: fileInfo,
      remainingFilesCount: number,
      core: Core,
    ): void => emits('videoUpload', { index, info, remainingFilesCount, state, targetElement });
    instance.onAudioUpload = (
      targetElement: HTMLAudioElement,
      index: number,
      state: UploadStateType,
      info: fileInfo,
      remainingFilesCount: number,
      core: Core,
    ): void => emits('audioUpload', { index, info, remainingFilesCount, state, targetElement });
    instance.onImageUploadError = (errorMessage: string, result: any, core: Core): boolean => {
      emits('imageUploadError', { errorMessage, result });
      return false;
    }; // TODO: adjust return type
    instance.onVideoUploadError = (errorMessage: string, result: any, core: Core): boolean => {
      emits('videoUploadError', { errorMessage, result });
      return false;
    }; // TODO: adjust return type
    instance.onAudioUploadError = (errorMessage: string, result: any, core: Core): boolean => {
      emits('audioUploadError', { errorMessage, result });
      return false;
    }; // TODO: adjust return type
    instance.onResizeEditor = (
      height: number,
      prevHeight: number,
      core: Core,
      resizeObserverEntry: ResizeObserverEntry | null,
    ): {} => {
      emits('resizeEditor', { height, prevHeight, resizeObserverEntry });
      return {};
    };
    instance.onSetToolbarButtons = (buttonList: any[], core: Core): void => emits('setToolbarButtons', { buttonList });

    // set props for first time (watcher does not run when mounted.)
    if (props.disable) instance.disable();
    else instance.enable();

    if (props.disableToolbar) instance.toolbar.disable();
    else instance.toolbar.enable();

    if (props.disableWysiwyg) instance.wysiwyg.disable();
    else instance.wysiwyg.enable();

    if (props.readOnly) instance.readOnly(true);
    else instance.readOnly(false);

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

<style scoped>
.sunEditorVue {
  /* position: relative; */
}
</style>
