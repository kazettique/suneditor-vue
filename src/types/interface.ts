import type { Lang } from 'suneditor/src/lang/Lang';
import type { Context } from 'suneditor/src/lib/context';
import type {
  audioInputInformation,
  Controllers,
  fileInfo,
  imageInputInformation,
  videoInputInformation,
} from 'suneditor/src/lib/core';
import type SunEditorCore from 'suneditor/src/lib/core';
import type {
  FormatTagName,
  LineHeightsItem,
  ParagraphStyles,
  SunEditorOptions,
  TemplatesItem,
  TextStyles,
} from 'suneditor/src/options';
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
  TableCellControllerPositionType,
  UploadStateType,
  VideoRatioType,
} from './type';

// TODO: redefine this without extends original type
export interface SetOptions extends Partial<SunEditorOptions> {
  alignItems?: AlignItemsType[];
  buttonList?: (ButtonType[] | ButtonType)[];
  charCounterType?: CharCounterType;
  mode?: EditorModeType;
  popupDisplay?: PopupDisplayType;
  tableCellControllerPosition?: TableCellControllerPositionType;
  // customPlugins?: Array<Plugin> | Record<string, Plugin>;
  videoRatioList?: VideoRatioType[];
}

interface SetOptionsTemp {
  addTagsWhitelist?: string | '*';
  alignItems?: AlignItemsType[];
  /**
   * Add attribute blacklist of tags that should be deleted in editor.
   */
  attributesBlacklist?: Record<string, string | '*'>;
  /**
   * Add attributes whitelist of tags that should be kept undeleted from the editor.
   */
  attributesWhitelist?: Record<string, string | '*'>;
  // ["acc", "mp3"]
  // TODO: use union type?
  audioAccept?: string[];
  audioFileInput?: boolean;
  /**
   * The default height size of the audio frame
   */
  // TODO: number?
  audioHeight?: string;
  audioMultipleFile?: boolean;
  /**
   * Define "Attributes" of the audio tag.
   * @example { controlslist: "nodownload", autoplay: true }
   */
  audioTagAttrs?: Record<string, string | boolean>;
  audioUploadHeader?: Record<string, string>;
  audioUploadSizeLimit?: number;
  audioUploadUrl?: string;
  /**
   * Choose whether to create a audio url input tag in the audio upload window
   */
  audioUrlInput?: boolean;
  audioWidth?: string;
  buttonList?: (ButtonType[] | ButtonType)[];
  /**
   * Callback functions that is called when the Save button is clicked
   */
  callBackSave?: (contents: string, isChanged: boolean) => void;
  charCounter?: boolean;
  charCounterType?: CharCounterType;
  className?: string;
  /**
   * CodeMirror object
   */
  codeMirror?: any | { options: object; src: any };
  /**
   * Change default color array of color picker
   */
  colorList?: string[];
  /**
   * You can define the style of the editing area[.sun-editor-editable].
   * It affects the entire editing area.
   * ('z-index', 'position' and 'width' properties apply to the top div.)
   * @example 'font-family: cursive; font-size: 10px;'
   */
  defaultStyle?: string;
  defaultTag?: string;
  /**
   * The display property of editor
   */
  display?: string;
  /**
   * Defining menu items
   * ===================
   */
  /**
   * Change default font-family array
   */
  font?: string[];
  /**
   * Change default font-size array
   */
  fontSize?: number[];
  /**
   * The font size unit
   */
  fontSizeUnit?: string;
  /**
   * Change default formatBlock array
   */
  formats?: FormatTagName[];
  /**
   * Allows the usage of HTML, HEAD, BODY tags and DOCTYPE declaration
   */
  // TODO: remove?
  fullPage?: boolean;
  /**
   * Top offset value of "full Screen".
   */
  fullScreenOffset?: number | string;
  height?: string;
  hideToolbar?: boolean;
  historyStackDelayTime?: number;
  /**
   * Defines the hr items.
   * "class" or "style" must be specified.
   * @example [{name: "solid", class: "__se__xxx", style: "border-style: outset;"}]
   */
  hrItems?: { class?: string; name: string; style?: string }[];
  /**
   * You can redefine icons.
   */
  icons?: Record<string, string>;
  /**
   * Content will be placed in an iframe and isolated from the rest of the page
   */
  // TODO: remove?
  iframe?: boolean;
  /**
   * Attributes of the iframe.
   */
  // TODO: remove?
  iframeAttributes?: Record<string, string>;
  /**
   * Name of the CSS file(s) to apply inside the iframe.
   */
  // TODO: remove?
  iframeCSSFileName?: string | string[];
  /**
   * Define the "accept" attribute of the input.
   * @example "*" or ".jpg, .png .."
   */
  // TODO: use union type?
  imageAccept?: string;
  /**
   * Choose whether the image align radio buttons are visible.
   */
  imageAlignShow?: boolean;
  imageFileInput?: boolean;
  /**
   * Http Header when get image gallery.
   */
  imageGalleryHeader?: Record<string, string>;
  /**
   * The url of the image gallery, if you use the image gallery
   */
  imageGalleryUrl?: string;
  imageHeight?: string;
  /**
   * Choose whether the image height input is visible.
   */
  imageHeightShow?: boolean;
  imageMultipleFile?: boolean;
  /**
   * Can resize the image
   */
  imageResizing?: boolean;
  /**
   * Choose whether to image rotation buttons display.
   * When "imageSizeOnlyPercentage" is "true" or  or "imageHeightShow" is "false" the default value is false.
   * If you want the button to be visible, put it a true.
   */
  imageRotation?: boolean;
  /**
   * If true, image size can only be scaled by percentage.
   */
  imageSizeOnlyPercentage?: boolean;
  /**
   * Http Header when uploading images.
   */
  imageUploadHeader?: Record<string, string>;
  /**
   * The size of the total uploadable images (in bytes)
   */
  imageUploadSizeLimit?: number;
  /**
   * The image upload to server mapping address
   */
  imageUploadUrl?: string;
  /**
   * Choose whether to create a image url input tag in the image upload window
   */
  imageUrlInput?: boolean;
  imageWidth?: string;
  /**
   * Katex object (Use "math" plugin)
   */
  // TODO: type?
  katex?: any | { options: object; src: any };
  lang?: Lang;
  /**
   * Deletes other attributes except for the property set at the time of line break.
   * If there is no value, no all attribute is deleted.
   * @example 'class|style': Attributes other than "class" and "style" are deleted at line break.
   * '*': All attributes are deleted at line break.
   */
  lineAttrReset?: string;
  lineHeights?: LineHeightsItem[];
  /**
   * If true, disables the automatic prefixing of the host URL to the value of the link. default: false {Boolean}
   */
  linkNoPrefix?: boolean;
  /**
   * Protocol for the links (if link has been added without any protocol this one will be used).
   */
  linkProtocol?: string;
  /**
   * Defines "rel" attribute list of anchor tag.
   */
  linkRel?: string[];
  /**
   * Defines default "rel" attribute list of anchor tag.
   */
  linkRelDefault?: { check_bookmark?: string; check_new_window?: string; default?: string };
  /**
   * Default checked value of the "Open in new window" checkbox.
   */
  linkTargetNewWindow?: boolean;
  /**
   * Math plugin font size list
   */
  mathFontSize?: { default?: boolean; text: string; value: string }[];
  /**
   * The maximum number of characters allowed to be inserted into the editor
   */
  maxCharCount?: number;
  maxHeight?: string;
  maxWidth?: string;
  /**
   * Activate the media[image, video, audio] selection status immediately after inserting the media tag. (default: true)
   */
  mediaAutoSelect?: boolean;
  minHeight?: string;
  minWidth?: string;
  mode?: EditorModeType;
  paragraphStyles?: ParagraphStyles;
  /**
   * Blacklist of tags when pasting.
   */
  pasteTagsBlacklist?: string;
  /**
   * Whitelist of tags when pasting.
   */
  pasteTagsWhitelist?: string | '*';
  placeholder?: string;
  plugins?: Plugin[] | Record<string, Plugin>;
  popupDisplay?: PopupDisplayType;
  /**
   * The position property of editor
   */
  position?: string;
  previewTemplate?: string;
  printTemplate?: string;
  resizeEnable?: boolean;
  resizingBar?: boolean;
  /**
     * A custom HTML selector placing the resizing bar inside.
     The class name of the element must be 'sun-editor'.
     Element or querySelector argument.
     */
  resizingBarContainer?: HTMLElement | string;
  rtl?: boolean;
  shortcutsDisable?: string[];
  shortcutsHint?: boolean;
  showPathLabel?: boolean;
  /**
   * Top offset value of "sticky toolbar".
   */
  stickyToolbar?: number | string;
  /**
   * If true, disables the interaction of the editor and tab key
   */
  tabDisable?: boolean;
  tableCellControllerPosition?: TableCellControllerPositionType;
  /**
   * Blacklist of the editor default tags.
   */
  tagsBlacklist?: string;
  /**
   * Templates array
   */
  templates?: TemplatesItem[];
  /**
   * Text Styles
   */
  textStyles?: TextStyles;
  /**
   * You can change the tag of the default text button.   default: { bold: 'STRONG', underline: 'U', italic: 'EM', strike: 'DEL', sub: 'SUB', sup: 'SUP' }
   */
  textTags?: { bold?: string; italic?: string; strike?: string; sub?: string; sup?: string; underline?: string };
  /**
     * A custom HTML selector placing the toolbar inside.
     The class name of the element must be 'sun-editor'.
     Element or querySelector argument.
     */
  toolbarContainer?: HTMLElement | string;
  /**
     * The width of the toolbar.
     Applies only when the editor mode is 'inline' or 'balloon' mode.
     */
  toolbarWidth?: string;
  /**
   * Initial value(html string) of the edit area.
   * If not, the value of the "target textarea".
   */
  value?: string;
  /**
   * Define the "accept" attribute of the input.
   * "*" or ".mp4, .avi .."
   */
  // TODO: use union type?
  videoAccept?: string;
  videoAlignShow?: boolean;
  videoFileInput?: boolean;
  videoHeight?: string;
  videoHeightShow?: boolean;
  videoIframeAttrs?: Record<string, string | boolean>;
  videoMultipleFile?: boolean;
  /**
   * The default aspect ratio of the video.
   * Up to four decimal places are allowed.
   */
  videoRatio?: number;
  videoRatioList?: VideoRatioType[];
  videoRatioShow?: boolean;
  /**
   * Can resize the video iframe
   */
  videoResizing?: boolean;
  /**
   * Choose whether to video rotation buttons display.
   * When "videoSizeOnlyPercentage" is "true" or "videoHeightShow" is "false" the default value is false.
   * If you want the button to be visible, put it a true.
   */
  videoRotation?: boolean;
  /**
   * If true, video size can only be scaled by percentage.
   */
  videoSizeOnlyPercentage?: boolean;
  /**
   * Define "Attributes" of the video tag.
   * @example { poster: "http://suneditor.com/docs/loading.gif", autoplay: true }
   */
  videoTagAttrs?: Record<string, string | boolean>;
  /**
   * Http Header when uploading videos.
   */
  videoUploadHeader?: Record<string, string>;
  videoUploadSizeLimit?: number;
  /**
   * The video upload to server mapping address
   */
  videoUploadUrl?: string;
  videoUrlInput?: boolean;
  videoWidth?: string;
  width?: string;
  /**
   * The query string of a YouTube embedded URL
   */
  youtubeQuery?: string;
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
