import plugins from 'suneditor/src/plugins';

import type { IProps } from '../SunEditor.vue';
import { ButtonEnum, type SetOptions } from '../types';
import { getLanguage } from '../utils';

const fullButtonList = Object.values(ButtonEnum).map((item) => item);

const setOptions: SetOptions = {
  alignItems: ['center', 'left', 'right', 'justify'],
  audioFileInput: true,
  // audioUrlInput: true,
  audioMultipleFile: true,
  buttonList: [
    // ['undo', 'redo'],
    // ['font', 'fontSize', 'formatBlock'],
    // ['paragraphStyle', 'blockquote'],
    // ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    // ['fontColor', 'hiliteColor', 'textStyle'],
    // ['removeFormat'],
    // '/', // Line break
    // ['outdent', 'indent'],
    // ['align', 'horizontalRule', 'list', 'lineHeight'],
    // ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
    // ['fullScreen', 'showBlocks', 'codeView'],
    // ['preview', 'print'],
    // ['save', 'template'],
    /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
    fullButtonList,
  ],
  // charCounter: true,
  // charCounterLabel: 'Hello this is charCounterLabel',
  // charCounterType: 'char',
  display: 'flex',
  formats: ['p', 'blockquote', 'h2', 'h3'],
  fullPage: false, // TODO: true will cause error, should always be false.
  fullScreenOffset: 50,
  height: '500px',
  hideToolbar: false, // TODO: fix with reactivity
  iframe: false, // TODO: true will cause error, should always be false.
  // imageUploadSizeLimit: 102110,
  // imageMultipleFile: true,
  // imageWidth: '50px',
  // imageHeight: '100px',
  // imageAccept: '.png, .jpg',
  // imageFileInput: true,
  imageResizing: true,
  // imageRotation: false,
  imageSizeOnlyPercentage: true,
  imageUrlInput: true,
  lang: getLanguage('en'),
  lineHeights: [
    { text: 'aaa', value: 1 },
    { text: 'bbb', value: 2 },
  ],
  linkRel: ['hello'],
  linkTargetNewWindow: true,
  maxCharCount: 100,
  // minHeight: '250',
  // minWidth: '500',
  // mode: 'balloon-always',
  paragraphStyles: [{ class: 'aaaClass', name: 'aaa' }],
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  popupDisplay: 'full',
  position: 'relative',
  previewTemplate: '<h1>Preview Template</h1> {{contents}} <div>_Footer_</div>',
  printTemplate: '<h1>Print Template</h1> {{contents}} <div>_Footer_</div>',
  resizeEnable: true,
  resizingBar: true,
  showPathLabel: true,
  // stickyToolbar: 50,
  tabDisable: true,
  tableCellControllerPosition: 'top',
  value: 'this is default value',
  // videoAccept: '.mp4, .avi',
  videoFileInput: true,
  // videoResizing: false,
  // videoHeightShow: true,
  // videoAlignShow: false,
  // videoRatioShow: false,
  videoRotation: false,
  videoUrlInput: true,
  width: '500px',
  youtubeQuery: '123',
};

const editorProps: IProps = {
  disable: false,
  disableToolbar: false,
  disableWysiwyg: false,
  isNoticeOpen: false,
  noticeMessage: 'test notice message',
  readOnly: false,
  // setAllPlugins: false,
  setOptions,
};

export default editorProps;
