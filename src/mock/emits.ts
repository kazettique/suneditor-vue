import type { IEmits } from '@/types/interface';

const editorEventHandlers: IEmits = {
  audioUpload: (args) => {
    console.log('Event: audioUpload');
    console.log('args', args);
  },
  audioUploadBefore: (args) => {
    console.log('Event: audioUploadBefore');
    console.log('args', args);
  },
  audioUploadError: (args) => {
    console.log('Event: audioUploadError');
    console.log('args', args);
  },
  audioUploadHandler: (args) => {
    console.log('Event: audioUploadHandler');
    console.log('args', args);
  },
  blur: (args) => {
    console.log('Event: blur');
    console.log('args', args);
  },
  change: (args) => {
    console.log('Event: change');
    console.log('args', args);
  },
  click: (args) => {
    console.log('Event: click');
    console.log('args', args);
  },
  copy: (args) => {
    console.log('Event: copy');
    console.log('args', args);
  },
  cut: (args) => {
    console.log('Event: cut');
    console.log('args', args);
  },
  drop: (args) => {
    console.log('Event: drop');
    console.log('args', args);
  },
  focus: (args) => {
    console.log('Event: focus');
    console.log('args', args);
  },
  // getCharCount: (args) => {
  //   console.log('Event: getCharCount');
  //   console.log('args', args);
  // },
  getSunEditorInstance: (args) => {
    console.log('Event: getSunEditorInstance');
    console.log('args', args);
  },
  // getText: (args) => {
  //   console.log('Event: getText');
  //   console.log('args', args);
  // },
  imageUpload: (args) => {
    console.log('Event: imageUpload');
    console.log('args', args);
  },
  imageUploadBefore: (args) => {
    console.log('Event: imageUploadBefore');
    console.log('args', args);
  },
  imageUploadError: (args) => {
    console.log('Event: imageUploadError');
    console.log('args', args);
  },
  imageUploadHandler: (args) => {
    console.log('Event: imageUploadHandler');
    console.log('args', args);
  },
  input: (args) => {
    console.log('Event: input');
    console.log('args', args);
  },
  keyDown: (args) => {
    console.log('Event: keydown');
    console.log('args', args);
  },
  keyUp: (args) => {
    console.log('Event: keyUp');
    console.log('args', args);
  },
  load: (args) => {
    console.log('Event: load');
    console.log('args', args);
  },
  mouseDown: (args) => {
    console.log('Event: mouseDown');
    console.log('args', args);
  },
  paste: (args) => {
    console.log('Event: paste');
    console.log('args', args);
  },
  resizeEditor: (args) => {
    console.log('Event: resizeEditor');
    console.log('args', args);
  },
  save: (args) => {
    console.log('Event: save');
    console.log('args', args);
  },
  scroll: (args) => {
    console.log('Event: scroll');
    console.log('args', args);
  },
  // setToolbarButtons: (args) => {
  //   console.log('Event: setToolbarButtons');
  //   console.log('args', args);
  // },
  showController: (args) => {
    console.log('Event: showController');
    console.log('args', args);
  },
  showInline: (args) => {
    console.log('Event: showInline');
    console.log('args', args);
  },
  toggleCodeView: (args) => {
    console.log('Event: toggleCodeView');
    console.log('args', args);
  },
  toggleFullScreen: (args) => {
    console.log('Event: toggleFullScreen');
    console.log('args', args);
  },
  videoUpload: (args) => {
    console.log('Event: videoUpload');
    console.log('args', args);
  },
  videoUploadBefore: (args) => {
    console.log('Event: videoUploadBefore');
    console.log('args', args);
  },
  videoUploadError: (args) => {
    console.log('Event: videoUploadError');
    console.log('args', args);
  },
  videoUploadHandler: (args) => {
    console.log('Event: videoUploadHandler');
    console.log('args', args);
  },
};

export default editorEventHandlers;
