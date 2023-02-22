# suneditor-vue

A Vue 3 component wrapped with pure JavaScript based WYSIWYG editor, [Sun Editor](https://github.com/JiHong88/SunEditor). Hooking up with Vue's reactivity APIs, controlled by the lifecycle of Vue. Fully TypeScript support with every type you need for configurations.

## Table of Contents

## Demos

## Installation

Using npm:

```shell
npm install suneditor-vue --save
```

Using yarn:

```shell
yarn add suneditor-vue
```

## Basic Usage

Using composition API with TypeScript:

```html
<template>
  <SunEditor v-bind="props" @change="handleChange" v-model="editorHtmlString" />
</template>

<script setup lang="ts">
  import 'suneditor/dist/css/suneditor.min.css';

  import { ref } from 'vue';
  import { IProps, IEmits, SunEditor } from 'SunEditor';

  // props
  const props: IProps = {
    // some props
  };

  // event handler
  const handleChange: IEmits['change'] = (content) => {
    // do something
  };

  // binding ref with v-model
  const editorHtmlString = ref<string>('');
</script>
```

## Props

```ts
interface IProps {
  defaultValue?: string;
  disable?: boolean;
  disableToolbar?: boolean;
  disableWysiwyg?: boolean;
  isNoticeOpen?: boolean;
  isTestingMode?: boolean;
  modelValue?: string;
  noticeMessage?: string;
  readOnly?: boolean;
  setAllPlugins?: boolean;
  setDefaultStyle?: string;
  setOptions?: SetOptions;
}
```

```ts
import type { IProps } from 'suneditor-vue';

const props: IProps = {
  // some props
};
```

### SetOptions

The core part in props is `SetOptions`. `SetOptions` is a large object, almost all configurations of sun editor are set inside this object. Almost all of `SetOptions` remain the same with [original](./) one. But I made something more strongly typed. But just in case, I listed all of it below:

For who considering typing their props object, you can import it from [here]('./'):

### Internationalization (i18n)

Importing `getLanguage` method to get language object.

```ts
import getLanguage from 'suneditor-vue';
const setOptions: SetOptions = {
  lang: getLanguage('en'),
  // other settings
};
```

#### Adding Traditional Chinese Language Pack! 🎉

Since the original sun editor does not has traditional Chinese language, so I added one if anyone need it. 🙌

## Events

```ts
interface IEmits {
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
```

## Expose Methods

Original sun editor has some methods to manipulate the editor imperatively. So I expose these methods for using from outside of suneditor-vue component.

```ts
interface IExpose {
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
```

## TypeScript Support

<!-- typescript message -->

## Special Thanks

Thanks [JiHong88](https://github.com/JiHong88) for awesome WYSIWYG editor.
And thanks [mkhstar](https://github.com/mkhstar)'s React version component for good references and ideas.

## Todo List

- [ ] Adding code mirror
- [ ] Adding custom plugin
- [ ] Adding katex
- [ ] custom style
- [ ]

## License

<!-- license message -->
