import type { Lang } from 'suneditor/src/lang/Lang';
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
//   setDefaultStyle?: string; // TODO: no need?
//   setOptions?: SetOptions;
//   width?: string;
// }

// export interface IEmits {
//   (event: 'change', content: string): void;
//   (event: 'input', inputEvent: InputEvent): void;
//   (event: 'scroll', uiEvent: UIEvent): void;
//   (event: 'copy', clipboardEvent: ClipboardEvent): boolean;
//   (event: 'cut', clipboardEvent: ClipboardEvent): boolean;
//   (event: 'click', mouseEvent: MouseEvent): void;
//   (event: 'mouseDown', mouseEvent: MouseEvent): void;
//   (event: 'keyUp', keyboardEvent: KeyboardEvent): void;
//   (event: 'keyDown', keyboardEvent: KeyboardEvent): void;
//   (event: 'focus', focusEvent: FocusEvent): void;
//   (event: 'blur', focusEvent: FocusEvent): void;
//   (event: 'save', contents: string): void;
//   (event: 'setToolbarButtons', buttonList: Array<any>): void;
//   (event: 'load', reload: boolean): void;
//   (event: 'drop', dragEvent: DragEvent, cleanData: string, maxCharCount: boolean, core: Core): boolean | string;
//   (event: 'paste', clipboardEvent: ClipboardEvent, cleanData: string, maxCharCount: boolean, core: Core): void;
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
