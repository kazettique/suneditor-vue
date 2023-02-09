import type { Lang } from 'suneditor/src/lang/Lang';
import type { Context } from 'suneditor/src/lib/context';
import type {
  audioInputInformation,
  Controllers,
  Core,
  fileInfo,
  imageInputInformation,
  videoInputInformation,
} from 'suneditor/src/lib/core';
import type SunEditorCore from 'suneditor/src/lib/core';
import type { SunEditorOptions } from 'suneditor/src/options';

import type { ButtonEnum, LangEnum } from './enum';

export type UploadStateType = 'create' | 'update' | 'delete';

export type LangType = `${LangEnum}`;

export type ButtonType = `${ButtonEnum}`;

export type ButtonListItemType = ButtonType[] | ButtonType;
export interface SetOptions extends SunEditorOptions {
  buttonList?: (ButtonType[] | ButtonType)[];
  customPlugins?: Array<Plugin> | Record<string, Plugin>;
}

export interface IExpose {
  appendContents: (contents: string) => void;
  getCharCount: (charCounterType?: string) => number;
  getContents: (onlyContents: boolean) => string;
  getContext: () => Context;
  getFilesInfo: (pluginName: string) => fileInfo[];
  getImagesInfo: () => fileInfo[];
  getText: () => string;
  insertHTML: (
    html: Element | string,
    notCleaningData?: boolean,
    checkCharCount?: boolean,
    rangeSelection?: boolean,
  ) => void;
  insertImage: (files: FileList) => void;
  save: () => void;
  setContents: (contents: string) => void;
}

export interface ExportIEmits {
  audioUpload: (
    targetElement: HTMLElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
  ) => void;
  audioUploadBefore: (
    files: Array<File>, // TODO: different with origin
    info: audioInputInformation,
    uploadHandler: Function,
  ) => boolean | any[] | undefined;
  audioUploadError: (errorMessage: string, result: any) => boolean;
  audioUploadHandler: (xmlHttpRequest: XMLHttpRequest, info: audioInputInformation, core: Core) => void;
  blur: (focusEvent: FocusEvent) => void;
  change: (content: string) => void;
  click: (mouseEvent: PointerEvent) => void;
  copy: (clipboardEvent: ClipboardEvent, clipboardData: any) => boolean;
  cut: (clipboardEvent: ClipboardEvent, clipboardData: any) => boolean;
  drop: (dragEvent: DragEvent, cleanData: string, maxCharCount: number, core: Core) => boolean | string;
  focus: (focusEvent: FocusEvent) => void;
  getSunEditorInstance: (sunEditor: SunEditorCore) => void;
  imageUpload: (
    targetImgElement: HTMLImageElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
  ) => void;
  imageUploadBefore: (
    files: Array<File>, // TODO: different with origin
    info: imageInputInformation,
    core: Core,
    uploadHandler: Function,
  ) => boolean | any[] | undefined;
  imageUploadError: (errorMessage: string, result: any) => boolean;
  imageUploadHandler: (xmlHttpRequest: XMLHttpRequest, info: imageInputInformation, core: Core) => void;
  input: (inputEvent: InputEvent) => void;
  keyDown: (keyboardEvent: KeyboardEvent) => void;
  keyUp: (keyboardEvent: KeyboardEvent) => void;
  load: (reload: boolean) => void;
  mouseDown: (mouseEvent: MouseEvent) => void;
  paste: (clipboardEvent: ClipboardEvent, cleanData: string, maxCharCount: boolean, core: Core) => boolean | string;
  resizeEditor: (height: number, core: Core, prevHeight: number, resizeObserverEntry: ResizeObserverEntry | null) => {};
  save: (contents: string) => void;
  scroll: (uiEvent: UIEvent) => void;
  setToolbarButtons: (buttonList: Array<any>) => void;
  showController: (controllers: Controllers, name: string) => void;
  showInline: (context: Context, toolbar: Element) => void;
  toggleCodeView: (isCodeView: boolean) => void;
  toggleFullScreen: (isFullScreen: boolean) => void;
  videoUpload: (
    targetElement: HTMLElement,
    index: number,
    state: UploadStateType,
    info: fileInfo,
    remainingFilesCount: number,
  ) => void;
  videoUploadBefore: (
    files: Array<File>, // TODO: different with origin
    info: videoInputInformation,
    core: Core,
    uploadHandler: Function,
  ) => boolean | any[] | undefined;
  videoUploadError: (errorMessage: string, result: any) => boolean;
  videoUploadHandler: (xmlHttpRequest: XMLHttpRequest, info: videoInputInformation, core: Core) => void;
}

// * TEST AREA BELOW

// * ideal type for user
export type OverloadFunc2 = {
  change: (content: string) => void;
  input: (inputEvent: InputEvent) => void;
};
// *   |
// *   |
// *   V
// TODO: What's the magic should perform here?
// *   |
// *   |
// *   V
// * emit overloaded type or interface for Vue
export interface IEmitsForVue {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
}

// * ================TYPESCRIPT EXPERIMENT================================

type DefineEmitFuncBase = (event: string, ...args: any[]) => any;
type ExportEmitFuncBase = (...args: any[]) => any;

// TODO: overload function type
export type OverloadFunc = {
  change: (event: 'change', content: string) => void;
  input: (event: 'input', inputEvent: InputEvent) => void;
};

declare function overloadEmits(content: string): void;
declare function overloadEmits(inputEvent: InputEvent): void;

type ExportEmits = typeof overloadEmits;

// (event: Key,...payload) => returnType;

export interface OriginalIEmits {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
}

export type OriginalIEmits2 = {
  (event: 'change', content: string): void;
  (event: 'input', inputEvent: InputEvent): void;
};

// TODO: interface emits with mapped type
export interface TestIEmits {
  // [T in keyof OverloadFunc]: OverloadFunc[T];
  // [key: string]: OriginalIEmits;
}

export type TestIEmits2 = {
  [T in keyof OverloadFunc2]: OverloadFunc2[T];
};

export type TestIEmits3<T extends keyof OverloadFunc> = {
  [U in T]: U;
};
