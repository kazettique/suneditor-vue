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

export type LangType = `${LangEnum}` | Lang;

export type ButtonType = `${ButtonEnum}`;

export type ButtonListItemType = ButtonType[] | ButtonType;
export interface SetOptions extends SunEditorOptions {
  buttonList?: (ButtonType[] | ButtonType)[];
  customPlugins?: Array<Plugin> | Record<string, Plugin>;
}

// export interface IProps {
//   appendContents?: string;
//   autoFocus?: boolean;
//   defaultValue?: string;
//   disable?: boolean;
//   disableToolbar?: boolean;
//   disableWysiwyg?: boolean;
//   height?: string;
//   hide?: boolean; // TODO: no need?
//   hideToolbar?: boolean;
//   isNoticeOpen?: boolean;
//   lang?: LangType;
//   name?: string;
//   noticeMessage?: string;
//   placeholder?: string;
//   readOnly?: boolean;
//   setAllPlugins?: boolean;
//   setContents?: string;
//   setDefaultStyle?: string;
//   setOptions?: SetOptions;
//   width?: string;
// }

// export interface IEmits {
//   (event: 'change', content: string): void;
//   (event: 'input', inputEvent: InputEvent): void;
//   (event: 'scroll', uiEvent: UIEvent): void;
//   (event: 'copy', clipboardEvent: ClipboardEvent, clipboardData: any): boolean;
//   (event: 'cut', clipboardEvent: ClipboardEvent, clipboardData: any): boolean;
//   (event: 'click', mouseEvent: PointerEvent): void;
//   (event: 'mouseDown', mouseEvent: MouseEvent): void;
//   (event: 'keyUp', keyboardEvent: KeyboardEvent): void;
//   (event: 'keyDown', keyboardEvent: KeyboardEvent): void;
//   (event: 'focus', focusEvent: FocusEvent): void;
//   (event: 'blur', focusEvent: FocusEvent): void;
//   (event: 'save', contents: string): void;
//   (event: 'setToolbarButtons', buttonList: Array<any>): void;
//   (event: 'load', reload: boolean): void;
//   (event: 'drop', dragEvent: DragEvent, cleanData: string, maxCharCount: boolean, core: Core): boolean | string;
//   (event: 'paste', clipboardEvent: ClipboardEvent, cleanData: string, maxCharCount: boolean, core: Core):
//     | boolean
//     | string;
//   (
//     event: 'imageUpload',
//     targetImgElement: HTMLImageElement,
//     index: number,
//     state: UploadStateType,
//     info: fileInfo,
//     remainingFilesCount: number,
//   ): void;
//   (
//     event: 'videoUpload',
//     targetElement: HTMLElement,
//     index: number,
//     state: UploadStateType,
//     info: fileInfo,
//     remainingFilesCount: number,
//   ): void;
//   (
//     event: 'audioUpload',
//     targetElement: HTMLElement,
//     index: number,
//     state: UploadStateType,
//     info: fileInfo,
//     remainingFilesCount: number,
//   ): void;
//   (
//     event: 'imageUploadBefore',
//     files: Array<File>, // TODO: different with origin
//     info: imageInputInformation,
//     core: Core,
//     uploadHandler: Function,
//   ): boolean | any[] | undefined;
//   (
//     event: 'videoUploadBefore',
//     files: Array<File>, // TODO: different with origin
//     info: videoInputInformation,
//     core: Core,
//     uploadHandler: Function,
//   ): boolean | any[] | undefined;
//   (
//     event: 'audioUploadBefore',
//     files: Array<File>, // TODO: different with origin
//     info: audioInputInformation,
//     uploadHandler: Function,
//   ): boolean | any[] | undefined;
//   (event: 'imageUploadError', errorMessage: string, result: any): boolean;
//   (event: 'videoUploadError', errorMessage: string, result: any): boolean;
//   (event: 'audioUploadError', errorMessage: string, result: any): boolean;
//   (event: 'toggleCodeView', isCodeView: boolean): void;
//   (event: 'toggleFullScreen', isFullScreen: boolean): void;
//   (event: 'showInline', context: Context, toolbar: Element): void;
//   (event: 'showController', controllers: Controllers, name: string): void;
//   (event: 'imageUploadHandler', xmlHttpRequest: XMLHttpRequest, info: imageInputInformation, core: Core): void;
//   (event: 'videoUploadHandler', xmlHttpRequest: XMLHttpRequest, info: videoInputInformation, core: Core): void;
//   (event: 'audioUploadHandler', xmlHttpRequest: XMLHttpRequest, info: audioInputInformation, core: Core): void;
//   (
//     event: 'resizeEditor',
//     height: number,
//     core: Core,
//     prevHeight: number,
//     resizeObserverEntry: ResizeObserverEntry | null,
//   ): {};
//   (event: 'getSunEditorInstance', sunEditor: SunEditorCore): void;
// }

// export interface IExpose {
//   getCharCount: (charCounterType?: string) => number;
//   getContents: (onlyContents: boolean) => string;
//   getContext: () => Context;
//   getFilesInfo: (pluginName: string) => fileInfo[];
//   getImagesInfo: () => fileInfo[];
//   getText: () => string;
//   insertHTML: (
//     html: Element | string,
//     notCleaningData?: boolean,
//     checkCharCount?: boolean,
//     rangeSelection?: boolean,
//   ) => void;
//   insertImage: (files: FileList) => void;
//   save: () => void;
// }

type DefineEmitFuncBase = (event: string, ...args: any[]) => any;
type ExportEmitFuncBase = (...args: any[]) => any;

// TODO: overload function type
export type OverloadFunc = {
  change: (event: 'change', content: string) => void;
  input: (event: 'input', inputEvent: InputEvent) => void;
};

// * ideal type for user
export type OverloadFunc2 = {
  change: (content: string) => void;
  input: (inputEvent: InputEvent) => void;
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
