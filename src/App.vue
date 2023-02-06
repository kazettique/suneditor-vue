<template>
  <div>
    <SunEditor v-bind:set-options="currentSetup" v-bind:disable="disable" v-on:scroll="onScroll" />
    <button type="button" v-on:click="changeSetup">change setup</button>
    <button type="button" v-on:click="toggleDisable">toggle disable</button>
  </div>
</template>

<script setup lang="ts">
import plugins from 'suneditor/src/plugins';
import { ref } from 'vue';

import SunEditor from '@/SunEditor.vue';
import type { SetOptions } from '@/types';

// const editorPlugins = {
//   Gallery: {
//     action: () => {},
//     add: function (core, targetElement) {},
//     display: 'command',
//     innerHTML:
//       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 15.75 15.77"><g><path d="M8.77,8.72a.88.88,0,0,1-.61-.27.82.82,0,0,1-.25-.61.89.89,0,0,1,.25-.62A.82.82,0,0,1,8.77,7a.81.81,0,0,1,.61.25.83.83,0,0,1,.27.62.81.81,0,0,1-.25.61.91.91,0,0,1-.63.27Zm9.62-5a1.74,1.74,0,0,1,1.76,1.76V17.76a1.74,1.74,0,0,1-1.76,1.76H6.16A1.74,1.74,0,0,1,4.4,17.76V5.51A1.74,1.74,0,0,1,6.16,3.75H18.39Zm0,1.75H6.16v8L8.53,11.8a.94.94,0,0,1,.54-.17.86.86,0,0,1,.54.2L11.09,13l3.64-4.55a.78.78,0,0,1,.34-.25.85.85,0,0,1,.42-.07.89.89,0,0,1,.39.12.78.78,0,0,1,.28.29l2.24,3.67V5.51Zm0,12.24V15.6L15.3,10.53,11.89,14.8a.89.89,0,0,1-.59.32.82.82,0,0,1-.64-.18L9,13.62,6.16,15.74v2Z" transform="translate(-4.4 -3.75)"></path></g></svg>',
//     name: 'Gallery',
//   },
//   ParagraphStyle: {
//     action: () => {},
//     add: function (core, targetElement) {},
//     display: 'command',
//     innerHTML:
//       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11.81 15.74"><g><path d="M18.18,3.76v2h-2V19.5h-2V5.73h-2V19.5h-2V11.63a3.94,3.94,0,0,1,0-7.87h7.87Z" transform="translate(-6.37 -3.76)"></path></g></svg>',
//     name: 'ParagraphStyle',
//   },
// };

const editorConfig: SetOptions = {
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
  charCounterLabel: 'Maintain by Purin - Total Character',
  formats: ['p', 'blockquote', 'h2', 'h3'],
  height: 'auto',
  minHeight: '150',
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  width: '500px',
};
const editorConfig2: SetOptions = {
  buttonList: [
    ['undo', 'redo'],
    ['font', 'fontSize', 'formatBlock'],
    ['paragraphStyle', 'blockquote'],
    ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript'],
    ['fontColor', 'hiliteColor', 'textStyle'],
    ['removeFormat'],
  ],
  charCounter: true,
  charCounterLabel: 'Maintain by Woody - Total Character',
  formats: ['p', 'blockquote', 'h2', 'h3'],
  height: '300px',
  minHeight: '150px',
  placeholder: 'test placeholder',
  plugins: { ...plugins },
  width: '500px',
};

const currentSetup = ref<SetOptions>(editorConfig);
const disable = ref<boolean>(false);

const changeSetup = () => {
  currentSetup.value = editorConfig2;
};

const toggleDisable = () => {
  disable.value = !disable.value;
};

const onScroll = (event: Event) => {
  console.log('event', event);
};

// const selectedImage = (param) => {
//   editor.insertHTML(
//     `<img src="${param.image.imageURL}" alt="${param.image.title}" image-id="${param.image.id}" />
//       <p class="mt-2 text-smg-typography-body-2 text-smg-gray-700">${param.image.title}</p>`,
//     true,
//   );
// };

// const callback = (param) => {
//   console.log(param);
//   editor.insertHTML(
//     `<p>...</p><div class='template' data-template-id='${param.data.id}'>${param.data.title}</div><p>...</p>`,
//     true,
//   );
// };
</script>

<style scoped></style>
