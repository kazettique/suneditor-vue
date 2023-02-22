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
import type {
  AlignItemsType,
  ButtonType,
  CharCounterType,
  EditorModeType,
  PluginDisplayType,
  PluginNameType,
  PopupDisplayType,
  UploadStateType,
} from './type';

export interface SetOptions extends Partial<SunEditorOptions> {
  alignItems?: AlignItemsType[];
  buttonList?: (ButtonType[] | ButtonType)[];
  charCounterType?: CharCounterType;
  mode?: EditorModeType;
  popupDisplay?: PopupDisplayType;
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
  audioUpload: (payload: {
    index: number;
    info: fileInfo;
    remainingFilesCount: number;
    state: UploadStateType;
    targetElement: HTMLElement;
  }) => void;
  audioUploadBefore: (payload: {
    files: Array<File>; // TODO: different with origin
    info: audioInputInformation;
    uploadHandler: Function;
  }) => void;
  audioUploadError: (payload: { errorMessage: string; result: any }) => void;
  audioUploadHandler: (payload: { info: audioInputInformation; xmlHttp: XMLHttpRequest }) => void;
  blur: (payload: { focusEvent: FocusEvent }) => void;
  change: (payload: { contents: string }) => void;
  click: (payload: { mouseEvent: PointerEvent }) => void;
  copy: (payload: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
  cut: (payload: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
  drop: (payload: { cleanData: string; dragEvent: DragEvent; maxCharCount: number }) => void;
  focus: (payload: { focusEvent: FocusEvent }) => void;
  getSunEditorInstance: (payload: { sunEditor: SunEditorCore }) => void;
  imageUpload: (payload: {
    index: number;
    info: fileInfo;
    remainingFilesCount: number;
    state: UploadStateType;
    targetImgElement: HTMLImageElement;
  }) => void;
  imageUploadBefore: (payload: {
    files: Array<File>; // TODO: different with origin
    info: imageInputInformation;
    uploadHandler: Function;
  }) => void;
  imageUploadError: (payload: { errorMessage: string; result: any }) => void;
  imageUploadHandler: (payload: { info: imageInputInformation; xmlHttp: XMLHttpRequest }) => void;
  input: (payload: { inputEvent: InputEvent }) => void;
  keyDown: (payload: { keyboardEvent: KeyboardEvent }) => void;
  keyUp: (payload: { keyboardEvent: KeyboardEvent }) => void;
  load: (payload: { reload: boolean }) => void;
  mouseDown: (payload: { mouseEvent: MouseEvent }) => void;
  paste: (payload: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: boolean }) => void;
  resizeEditor: (payload: {
    height: number;
    prevHeight: number;
    resizeObserverEntry: ResizeObserverEntry | null;
  }) => void;
  save: (payload: { contents: string }) => void;
  scroll: (payload: { uiEvent: UIEvent }) => void;
  setToolbarButtons: (payload: { buttonList: Array<any> }) => void;
  showController: (payload: { controllers: Controllers; name: string }) => void;
  showInline: (payload: { context: Context; toolbar: Element }) => void;
  toggleCodeView: (payload: { isCodeView: boolean }) => void;
  toggleFullScreen: (payload: { isFullScreen: boolean }) => void;
  videoUpload: (payload: {
    index: number;
    info: fileInfo;
    remainingFilesCount: number;
    state: UploadStateType;
    targetElement: HTMLElement;
  }) => void;
  videoUploadBefore: (payload: {
    files: Array<File>; // TODO: different with origin
    info: videoInputInformation;
    uploadHandler: Function;
  }) => void;
  videoUploadError: (payload: { errorMessage: string; result: any }) => void;
  videoUploadHandler: (payload: { info: videoInputInformation; xmlHttp: XMLHttpRequest }) => void;
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
