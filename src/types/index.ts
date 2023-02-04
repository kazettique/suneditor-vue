import type { Lang } from 'suneditor/src/lang/Lang';
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
import type { SunEditorOptions } from 'suneditor/src/options';

import type { ButtonEnum, LangEnum } from './enum';

export type UploadStateType = 'create' | 'update' | 'delete';

export type LangType = `${LangEnum}` | Lang;

export type ButtonType = `${ButtonEnum}`;

export type ButtonListItemType = ButtonType[] | ButtonType;
export interface SetOptions extends SunEditorOptions {
  buttonList?: (ButtonType[] | ButtonType)[];
  customPlugins?: Array<Plugin> | Record<string, Plugin>;
}

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
  (event: 'blur', { focusEvent, editorContents }: { editorContents: string; focusEvent: FocusEvent }): void;
  (event: 'save', contents: string): void;
  (event: 'setToolbarButtons', buttonList: Array<any>): void;
  (event: 'load', reload: boolean): void;
  (
    event: 'drop',
    { dragEvent, cleanData, maxCharCount }: { cleanData: string; dragEvent: DragEvent; maxCharCount: boolean },
  ): boolean | Array<any> | void;
  (
    event: 'paste',
    {
      clipboardEvent,
      cleanData,
      maxCharCount,
    }: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: boolean },
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
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetImgElement: HTMLImageElement;
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
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLElement;
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
      index: number;
      info: fileInfo;
      remainingFilesCount: number;
      state: UploadStateType;
      targetElement: HTMLElement;
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
  (event: 'imageUploadError', { errorMessage, result }: { errorMessage: string; result: any }): boolean;
  (event: 'videoUploadError', { errorMessage, result }: { errorMessage: string; result: any }): boolean;
  (event: 'audioUploadError', { errorMessage, result }: { errorMessage: string; result: any }): boolean;
  (event: 'toggleCodeView', isCodeView: boolean): void;
  (event: 'toggleFullScreen', isFullScreen: boolean): void;
  (event: 'showInline', { toolbar, context }: { context: Context; toolbar: Element }): void;
  (event: 'showController', { name, controllers }: { controllers: Controllers; name: string }): void;
  (
    event: 'imageUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      core: Core;
      info: imageInputInformation;
      xmlHttpRequest: XMLHttpRequest;
    },
  ): void;
  (
    event: 'videoUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      core: Core;
      info: videoInputInformation;
      xmlHttpRequest: XMLHttpRequest;
    },
  ): void;
  (
    event: 'audioUploadHandler',
    {
      xmlHttpRequest,
      info,
      core,
    }: {
      core: Core;
      info: audioInputInformation;
      xmlHttpRequest: XMLHttpRequest;
    },
  ): void;
  (
    event: 'resizeEditor',
    { height, prevHeight }: { height: number; prevHeight: number; resizeObserverEntry: ResizeObserverEntry | null },
  ): {};
  (event: 'getSunEditorInstance', sunEditor: SunEditorCore): void;
}
