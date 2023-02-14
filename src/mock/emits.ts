import type { ExportIEmits } from '@/types';

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

export default editorEventHandlers;
