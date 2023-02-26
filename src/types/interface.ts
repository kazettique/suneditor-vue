import type { Context } from 'suneditor/src/lib/context';
import type {
  audioInputInformation,
  Controllers,
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
  VideoRatioType,
} from './type';

export interface SetOptions extends Partial<SunEditorOptions> {
  alignItems?: AlignItemsType[];
  buttonList?: (ButtonType[] | ButtonType)[];
  charCounterType?: CharCounterType;
  mode?: EditorModeType;
  popupDisplay?: PopupDisplayType;
  // customPlugins?: Array<Plugin> | Record<string, Plugin>;
  videoRatioList?: VideoRatioType[];
}

interface IExpose {
  // appendContents: (contents: string) => void;
  // getCharCount: (charCounterType?: string) => number;
  getFilesInfo: (pluginName: string) => fileInfo[];
  getImagesInfo: () => fileInfo[];
  // getText: () => string;
  // insertHTML: (args: {
  //   checkCharCount?: boolean;
  //   html: Element | string;
  //   notCleaningData?: boolean;
  //   rangeSelection?: boolean;
  // }) => void;
  // insertImage: (files: FileList) => void;
  save: () => void; // saving from outside of editor
  // setContents: (contents: string) => void;
}

export interface IEmits {
  audioUpload: (args: {
    index: number;
    info: fileInfo;
    remainingFilesCount: number;
    state: UploadStateType;
    targetElement: HTMLElement;
  }) => void;
  audioUploadBefore: (args: {
    files: Array<File>; // TODO: different with origin
    info: audioInputInformation;
    uploadHandler: Function;
  }) => void;
  audioUploadError: (args: { errorMessage: string; result: any }) => void;
  audioUploadHandler: (args: { info: audioInputInformation; xmlHttp: XMLHttpRequest }) => void;
  blur: (args: { focusEvent: FocusEvent }) => void;
  change: (args: { contents: string }) => void;
  click: (args: { mouseEvent: PointerEvent }) => void;
  copy: (args: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
  cut: (args: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
  drop: (args: { cleanData: string; dragEvent: DragEvent; maxCharCount: number }) => void;
  focus: (args: { focusEvent: FocusEvent }) => void;
  // getCharCount: (args: { charCount: number }) => void;
  getSunEditorInstance: (args: { sunEditor: SunEditorCore }) => void;
  // getText: (args: { contents: string }) => void;
  imageUpload: (args: {
    index: number;
    info: fileInfo;
    remainingFilesCount: number;
    state: UploadStateType;
    targetImgElement: HTMLImageElement;
  }) => void;
  imageUploadBefore: (args: {
    files: Array<File>; // TODO: different with origin
    info: imageInputInformation;
    uploadHandler: Function;
  }) => void;
  imageUploadError: (args: { errorMessage: string; result: any }) => void;
  imageUploadHandler: (args: { info: imageInputInformation; xmlHttp: XMLHttpRequest }) => void;
  input: (args: { inputEvent: InputEvent }) => void;
  keyDown: (args: { keyboardEvent: KeyboardEvent }) => void;
  keyUp: (args: { keyboardEvent: KeyboardEvent }) => void;
  load: (args: { reload: boolean }) => void;
  mouseDown: (args: { mouseEvent: MouseEvent }) => void;
  paste: (args: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: boolean }) => void;
  resizeEditor: (args: { height: number; prevHeight: number; resizeObserverEntry: ResizeObserverEntry | null }) => void;
  save: (args: { contents: string }) => void;
  scroll: (args: { uiEvent: UIEvent }) => void;
  // setToolbarButtons: (args: { buttonList: Array<any> }) => void;
  showController: (args: { controllers: Controllers; name: string }) => void;
  showInline: (args: { context: Context; toolbar: Element }) => void;
  toggleCodeView: (args: { isCodeView: boolean }) => void;
  toggleFullScreen: (args: { isFullScreen: boolean }) => void;
  videoUpload: (args: {
    index: number;
    info: fileInfo;
    remainingFilesCount: number;
    state: UploadStateType;
    targetElement: HTMLElement;
  }) => void;
  videoUploadBefore: (args: {
    files: Array<File>; // TODO: different with origin
    info: videoInputInformation;
    uploadHandler: Function;
  }) => void;
  videoUploadError: (args: { errorMessage: string; result: any }) => void;
  videoUploadHandler: (args: { info: videoInputInformation; xmlHttp: XMLHttpRequest }) => void;
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
