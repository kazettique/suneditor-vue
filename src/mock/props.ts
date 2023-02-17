import plugins from 'suneditor/src/plugins';

import getLanguage from '../misc/getLanguage';
import type { IProps } from '../SunEditor.vue';
import type { SetOptions } from '../types';

const setOptions: SetOptions = {
  buttonList: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['paragraphStyle', 'blockquote'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
    '/', // Line break
    ['outdent', 'indent'],
    ['align', 'horizontalRule', 'list', 'lineHeight'],
    ['table', 'link', 'image', 'video', 'audio' /** ,'math' */], // You must add the 'katex' library at options to use the 'math' plugin.
    /** ['imageGallery'] */ // You must add the "imageGalleryUrl".
    ['fullScreen', 'showBlocks', 'codeView'],
    ['preview', 'print'],
    ['save', 'template'],
    /** ['dir', 'dir_ltr', 'dir_rtl'] */ // "dir": Toggle text direction, "dir_ltr": Right to Left, "dir_rtl": Left to Right
  ],
  charCounter: true,
  charCounterLabel: 'Hello this is charCounterLabel',
  formats: ['p', 'blockquote', 'h2', 'h3'],
  height: '200px',
  hideToolbar: false,
  lang: getLanguage('zh_tw'),
  minHeight: '150',
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  width: '500px',
};

const editorProps: IProps = {
  appendContents: 'test append contents',
  autoFocus: true,
  defaultValue: 'test default value',
  disableToolbar: true,
  disableWysiwyg: true,
  hide: false, // TODO: no need?
  isNoticeOpen: false,
  // name: 'test name', // TODO: no need?
  noticeMessage: 'test notice message',
  readOnly: false,
  setAllPlugins: false,
  setContents: 'test set contents', // TODO: no need?
  setDefaultStyle: 'test set default style',
  setOptions,
};

export default editorProps;
