import type { fileInfo, audioInputInformation, videoInputInformation, imageInputInformation, Controllers } from 'suneditor/src/lib/core';
import type { SetOptions, UploadStateType } from './types'
import type SunEditorCore from 'suneditor/src/lib/core';
import type { Context } from 'suneditor/src/lib/context';

export interface IProps {
  disable?: boolean;
  disableToolbar?: boolean;
  disableWysiwyg?: boolean;
  isNoticeOpen?: boolean;
  isTestingMode?: boolean; // component testing flag
  // modelValue?: string;
  noticeMessage?: string;
  readOnly?: boolean;
  setAllPlugins?: boolean;
  setOptions?: SetOptions;
}

export interface IEmits {
  // (event: 'setToolbarButtons', args: { buttonList: Array<any> }): void;
  (
    event: 'resizeEditor',
    args: { height: number; prevHeight: number; resizeObserverEntry: ResizeObserverEntry | null },
  ): void;
  (event: 'audioUploadError', args: { errorMessage: string; result: any }): void;
  (event: 'videoUploadError', args: { errorMessage: string; result: any }): void;
  (event: 'imageUploadError', args: { errorMessage: string; result: any }): void;
  (
    event: 'imageUpload',
    args: {
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLImageElement;
    },
  ): void;
  (
    event: 'audioUploadBefore',
    args: {
      files: Array<File>; // different with origin
      info: audioInputInformation;
      uploadHandler: Function;
    },
  ): void;
  (
    event: 'videoUploadBefore',
    args: {
      files: Array<File>; // different with origin
      info: videoInputInformation;
      uploadHandler: Function;
    },
  ): void;
  (
    event: 'imageUploadBefore',
    args: {
      files: Array<File>; // different with origin
      info: imageInputInformation;
      uploadHandler: Function;
    },
  ): void;
  (event: 'toggleFullScreen', args: { isFullScreen: boolean }): void;
  (event: 'toggleCodeView', args: { isCodeView: boolean }): void;
  (event: 'audioUploadHandler', args: { info: audioInputInformation; xmlHttp: XMLHttpRequest }): void;
  (event: 'videoUploadHandler', args: { info: videoInputInformation; xmlHttp: XMLHttpRequest }): void;
  (event: 'imageUploadHandler', args: { info: imageInputInformation; xmlHttp: XMLHttpRequest }): void;
  (event: 'showController', args: { controllers: Controllers; name: string }): void;
  (event: 'showInline', args: { context: Context; toolbar: Element }): void;
  (event: 'save', args: { contents: string }): void;
  (event: 'cut', args: { clipboardData: any; clipboardEvent: ClipboardEvent }): void;
  (event: 'copy', args: { clipboardData: any; clipboardEvent: ClipboardEvent }): void;
  (event: 'paste', args: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: number }): void;
  (event: 'drop', args: { cleanData: string; dragEvent: DragEvent; maxCharCount: number }): void;
  (event: 'blur', args: { focusEvent: FocusEvent }): void;
  (event: 'change', args: { contents: string }): void;
  (event: 'keyUp', args: { keyboardEvent: KeyboardEvent }): void;
  (event: 'keyDown', args: { keyboardEvent: KeyboardEvent }): void;
  (event: 'input', args: { inputEvent: InputEvent }): void;
  (event: 'click', args: { mouseEvent: PointerEvent }): void;
  (event: 'mouseDown', args: { mouseEvent: MouseEvent }): void;
  (event: 'focus', args: { focusEvent: FocusEvent }): void;
  (
    event: 'videoUpload',
    args: {
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLElement;
    },
  ): void;
  (
    event: 'audioUpload',
    args: {
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLElement;
    },
  ): void;
  (event: 'scroll', args: { uiEvent: UIEvent }): void;
  (event: 'load', args: { reload: boolean }): void;
  (event: 'getSunEditorInstance', args: { sunEditor: SunEditorCore }): void;
  // (event: 'getCharCount', args: { charCount: number }): void;
  // (event: 'getText', args: { contents: string }): void;

  // (event: 'update:modelValue', newValue: string): void;
}