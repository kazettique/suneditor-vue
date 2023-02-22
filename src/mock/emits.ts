import type { IEmits } from '@/types/interface';

const editorEventHandlers: IEmits = {
  audioUpload: (payload) => {
    console.log('Event: audioUpload');
    console.log('payload', payload);
  },
  audioUploadBefore: (payload) => {
    console.log('Event: audioUploadBefore');
    console.log('payload', payload);
  },
  audioUploadError: (payload) => {
    console.log('Event: audioUploadError');
    console.log('payload', payload);
  },
  audioUploadHandler: (payload) => {
    console.log('Event: audioUploadHandler');
    console.log('payload', payload);
  },
  blur: (payload) => {
    console.log('Event: blur');
    console.log('payload', payload);
  },
  change: (payload) => {
    console.log('Event: change');
    console.log('payload', payload);
  },
  click: (payload) => {
    console.log('Event: click');
    console.log('payload', payload);
  },
  copy: (payload) => {
    console.log('Event: copy');
    console.log('payload', payload);
  },
  cut: (payload) => {
    console.log('Event: cut');
    console.log('payload', payload);
  },
  drop: (payload) => {
    console.log('Event: drop');
    console.log('payload', payload);
  },
  focus: (payload) => {
    console.log('Event: focus');
    console.log('payload', payload);
  },
  getSunEditorInstance: (payload) => {
    console.log('Event: getSunEditorInstance');
    console.log('payload', payload);
  },
  imageUpload: (payload) => {
    console.log('Event: imageUpload');
    console.log('payload', payload);
  },
  imageUploadBefore: (payload) => {
    console.log('Event: imageUploadBefore');
    console.log('payload', payload);
  },
  imageUploadError: (payload) => {
    console.log('Event: imageUploadError');
    console.log('payload', payload);
  },
  imageUploadHandler: (payload) => {
    console.log('Event: imageUploadHandler');
    console.log('payload', payload);
  },
  input: (payload) => {
    console.log('Event: input');
    console.log('payload', payload);
  },
  keyDown: (payload) => {
    console.log('Event: keydown');
    console.log('payload', payload);
  },
  keyUp: (payload) => {
    console.log('Event: keyUp');
    console.log('payload', payload);
  },
  load: (payload) => {
    console.log('Event: load');
    console.log('payload', payload);
  },
  mouseDown: (payload) => {
    console.log('Event: mouseDown');
    console.log('payload', payload);
  },
  paste: (payload) => {
    console.log('Event: paste');
    console.log('payload', payload);
  },
  resizeEditor: (payload) => {
    console.log('Event: resizeEditor');
    console.log('payload', payload);
  },
  save: (payload) => {
    console.log('Event: save');
    console.log('payload', payload);
  },
  scroll: (payload) => {
    console.log('Event: scroll');
    console.log('payload', payload);
  },
  setToolbarButtons: (payload) => {
    console.log('Event: setToolbarButtons');
    console.log('payload', payload);
  },
  showController: (payload) => {
    console.log('Event: showController');
    console.log('payload', payload);
  },
  showInline: (payload) => {
    console.log('Event: showInline');
    console.log('payload', payload);
  },
  toggleCodeView: (payload) => {
    console.log('Event: toggleCodeView');
    console.log('payload', payload);
  },
  toggleFullScreen: (payload) => {
    console.log('Event: toggleFullScreen');
    console.log('payload', payload);
  },
  videoUpload: (payload) => {
    console.log('Event: videoUpload');
    console.log('payload', payload);
  },
  videoUploadBefore: (payload) => {
    console.log('Event: videoUploadBefore');
    console.log('payload', payload);
  },
  videoUploadError: (payload) => {
    console.log('Event: videoUploadError');
    console.log('payload', payload);
  },
  videoUploadHandler: (payload) => {
    console.log('Event: videoUploadHandler');
    console.log('payload', payload);
  },
};

export default editorEventHandlers;
