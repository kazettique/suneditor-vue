import type SunEditorCore from 'suneditor/src/lib/core';
import type { SunEditorOptions } from 'suneditor/src/options';

import type { Lang } from 'suneditor/src/lang/Lang';
import type { Context } from 'suneditor/src/lib/context';
import type {
  Controllers,
  Core,
  audioInputInformation,
  fileInfo,
  imageInputInformation,
  videoInputInformation,
} from 'suneditor/src/lib/core';

export type UploadStateType = 'create' | 'update' | 'delete';

export type LangType =
  | 'en'
  | 'da'
  | 'de'
  | 'es'
  | 'fr'
  | 'ja'
  | 'ko'
  | 'pt_br'
  | 'nl'
  | 'ru'
  | 'it'
  | 'zh_cn'
  | 'ro'
  | 'pl'
  | 'ckb'
  | 'lv'
  | 'se'
  | 'ua'
  | 'he'
  | 'it'
  | Lang;

export interface SetOptions extends SunEditorOptions {
  customPlugins?: Array<Plugin> | Record<string, Plugin>;
}

export interface IProps {
  setOptions?: SetOptions;
  defaultValue?: string;
  setContents?: string;
  name?: string;
  appendContents?: string;
  setDefaultStyle?: string;
  hideToolbar?: boolean;
  disableToolbar?: boolean;
  disable?: boolean;
  readOnly?: boolean;
  hide?: boolean; // TODO: no need?
  autoFocus?: boolean;
  placeholder?: string;
  lang?: LangType;
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
      info,
      remainingFilesCount,
    }: {
      targetImgElement: HTMLImageElement;
      index: number;
      state: UploadStateType;
      info: fileInfo;
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
    }: {
      targetElement: HTMLElement;
      index: number;
      state: UploadStateType;
      info: fileInfo;
      remainingFilesCount: number;
    },
  ): void;
  (
    event: 'audioUpload',
    {
      targetElement,
      index,
      state,
      info,
      remainingFilesCount,
    }: {
      targetElement: HTMLElement;
      index: number;
      state: UploadStateType;
      info: fileInfo;
      remainingFilesCount: number;
    },
  ): void;
  (
    event: 'imageUploadBefore',
    {
      files,
      info,
      uploadHandler,
    }: {
      files: Array<File>; // TODO: different with origin
      info: imageInputInformation;
      uploadHandler: Function;
    },
  ): boolean | any[] | undefined;
  (
    event: 'videoUploadBefore',
    {
      files,
      info,
      uploadHandler,
    }: {
      files: Array<File>; // TODO: different with origin
      info: videoInputInformation;
      uploadHandler: Function;
    },
  ): boolean | any[] | undefined;
  (
    event: 'audioUploadBefore',
    {
      files,
      info,
      uploadHandler,
    }: {
      files: Array<File>; // TODO: different with origin
      info: audioInputInformation;
      uploadHandler: Function;
    },
  ): boolean | any[] | undefined;
  (event: 'imageUploadError', { errorMessage, result }: { errorMessage: string; result: any }): void;
  (event: 'videoUploadError', { errorMessage, result }: { errorMessage: string; result: any }): void;
  (event: 'audioUploadError', { errorMessage, result }: { errorMessage: string; result: any }): void;
  (event: 'toggleCodeView', isCodeView: boolean): void;
  (event: 'toggleFullScreen', isFullScreen: boolean): void;
  (event: 'showInline', { toolbar, context }: { toolbar: Element; context: Context }): void;
  (event: 'showController', { name, controllers }: { name: string; controllers: Controllers }): void;
  (
    event: 'imageUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      xmlHttpRequest: XMLHttpRequest;
      info: imageInputInformation;
      core: Core;
    },
  ): void;
  (
    event: 'videoUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      xmlHttpRequest: XMLHttpRequest;
      info: videoInputInformation;
      core: Core;
    },
  ): void;
  (
    event: 'audioUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      xmlHttpRequest: XMLHttpRequest;
      info: audioInputInformation;
      core: Core;
    },
  ): void;
  (event: 'resizeEditor', { height, prevHeight }: { height: number; prevHeight: number }): void;
  (event: 'getSunEditorInstance', sunEditor: SunEditorCore): void;
}
