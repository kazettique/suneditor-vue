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
import type { CommandPlugin } from 'suneditor/src/plugins/CommandPlugin';
import type { DialogPlugin } from 'suneditor/src/plugins/DialogPlugin';
import type { Plugin } from 'suneditor/src/plugins/Plugin';
import type { SubmenuPlugin } from 'suneditor/src/plugins/SubmenuPlugin';

import type { PluginDisplayEnum } from './enum';
import type { ButtonType, PluginDisplayType, PluginNameType, UploadStateType } from './type';

export interface SetOptions extends SunEditorOptions {
  buttonList?: (ButtonType[] | ButtonType)[];
  // customPlugins?: Array<Plugin> | Record<string, Plugin>;
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

export interface IEmits {
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

export interface IPlugin extends Plugin {
  display: PluginDisplayType;
  name: PluginNameType;
}

export interface ICommandPlugin extends CommandPlugin {
  display: PluginDisplayEnum.COMMAND;
}

export interface IDialogPlugin extends DialogPlugin {
  display: PluginDisplayEnum.DIALOG;
}

export interface ISubmenuPlugin extends SubmenuPlugin {
  display: PluginDisplayEnum.SUBMENU;
}
