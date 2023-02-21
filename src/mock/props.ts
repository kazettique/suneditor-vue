import plugins from 'suneditor/src/plugins';

import getLanguage from '../misc/getLanguage';
import type { IProps } from '../SunEditor.vue';
import { ButtonEnum, type SetOptions } from '../types';

const fullButtonList = Object.values(ButtonEnum).map((item) => item);

const setOptions: SetOptions = {
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
