import type SunEditorCore from 'suneditor/src/lib/core';
import type SetOptions from './SetOptions';
import type lang from './lang';

export interface IProps {
  setOptions?: SetOptions;
  defaultValue?: string;
  setContents?: string;
  name?: string;
  onResizeEditor?: (height: number, prevHeight: number) => void;
  appendContents?: string;
  setDefaultStyle?: string;
  hideToolbar?: boolean;
  disableToolbar?: boolean;
  disable?: boolean;
  readOnly?: boolean;
  hide?: boolean;
  autoFocus?: boolean;
  getSunEditorInstance?: (sunEditor: SunEditorCore) => void;
  placeholder?: string;
  lang?: lang;
  width?: string;
  height?: string;
  setAllPlugins?: boolean;
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
  (event: 'blur', { focusEvent, editorContents }: { focusEvent: FocusEvent; editorContents: string }): void;
  (event: 'save', contents: string): void;
  (event: 'setToolbarButtons', buttonList: Array<any>): void;
  (event: 'load', reload: boolean): void;
  (
    event: 'drop',
    { dragEvent, cleanData, maxCharCount }: { dragEvent: DragEvent; cleanData: string; maxCharCount: boolean },
  ): boolean | Array<any> | void;
  (
    event: 'paste',
    {
      clipboardEvent,
      cleanData,
      maxCharCount,
    }: { clipboardEvent: ClipboardEvent; cleanData: string; maxCharCount: boolean },
  ): void;
  (
    event: 'imageUpload',
    {
      targetImgElement,
      index,
      state,
      imageInfo,
      remainingFilesCount,
    }: {
      targetImgElement: HTMLImageElement;
      index: number;
      state: string;
      imageInfo: object;
      remainingFilesCount: number;
    },
  ): void;
  (
    event: 'videoUpload',
    {
      targetElement,
      index,
      state,
      info,
      remainingFilesCount,
    }: { targetElement: HTMLElement; index: number; state: string; info: object; remainingFilesCount: number },
  ): void;
  (
    event: 'audioUpload',
    {
      targetElement,
      index,
      state,
      info,
      remainingFilesCount,
    }: { targetElement: HTMLElement; index: number; state: string; info: object; remainingFilesCount: number },
  ): void;
  (
    event: 'imageUploadBefore',
    {
      files,
      info,
      uploadHandler,
    }: {
      files: Array<File>;
      info: object;
      uploadHandler: Function;
    },
  ): void;
  (
    event: 'videoUploadBefore',
    {
      files,
      info,
      uploadHandler,
    }: {
      files: Array<File>;
      info: object;
      uploadHandler: Function;
    },
  ): void;
  (
    event: 'audioUploadBefore',
    {
      files,
      info,
      uploadHandler,
    }: {
      files: Array<File>;
      info: object;
      uploadHandler: Function;
    },
  ): void;
  (event: 'imageUploadError', { errorMessage, result }: { errorMessage: string; result: any }): void;
  (event: 'videoUploadError', { errorMessage, result }: { errorMessage: string; result: any }): void;
  (event: 'audioUploadError', { errorMessage, result }: { errorMessage: string; result: any }): void;
  (event: 'toggleCodeView', isCodeView: boolean): void;
  (event: 'toggleFullScreen', isFullScreen: boolean): void;
  (event: 'showInline', { toolbar, context }: { toolbar: Element; context: any }): void;
  (event: 'showController', { name, controllers }: { name: string; controllers: Array<any> }): void;
  (
    event: 'imageUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      xmlHttpRequest: XMLHttpRequest;
      info: {
        isUpdate: boolean;
        linkValue: any;
        element: Element;
        align: any;
        linkNewWindow: any;
        [key: string]: any;
      };
      core: any;
    },
  ): void;
}
