# suneditor-vue

A Vue 3 component wrapped with pure JavaScript based WYSIWYG editor, [SunEditor](https://github.com/JiHong88/SunEditor). Hooking up with Vue's reactivity APIs, controlled by the lifecycle of Vue. Fully TypeScript support with every type you need for configurations. Let's dive in! 🙌

## Table of Contents

## Demos

<!-- add demo link here -->

## Installation

Using npm:

```shell
npm install suneditor-vue --save
```

Using yarn:

```shell
yarn add suneditor-vue
```

Using pnpm:

```shell
pnpm install suneditor-vue --save
```

## Basic Usage

Import SunEditorVue component with composition API in Vue 3:

```html
<template>
  <SunEditor v-bind="props" @change="handleChange" v-model="editorHtmlString" />
</template>

<script setup lang="ts">
  import 'suneditor/dist/css/suneditor.min.css';

  import { ref } from 'vue';
  import { SunEditor } from 'suneditor-vue';

  // props
  const props = {
    // some props
  };

  // event handler
  const handleChange = (content) => {
    // do something
  };

  // binding ref with v-model
  const editorHtmlString = ref('');
</script>
```

## Props

### SetOptions

The core part in props is `SetOptions`. `SetOptions` is a large object, almost all configurations of SunEditor are set inside this object. And many of them are remain the same with the [original](./) one. I made something more strongly typed. But don't worry, the usage will be the same.

### Language Support (i18n)

Import `getLanguage` method to get language object for toolbar interface. If not, English will be default.

```ts
import getLanguage from 'suneditor-vue';

const setOptions: SetOptions = {
  lang: getLanguage('zh_tw'),
  // other settings...
};
```

#### Adding Traditional Chinese Language Pack! 🎉

Since the [original SunEditor](https://github.com/JiHong88/SunEditor) does not has traditional Chinese language pack, so I added one if anyone need it. 🙌

## Events

## Expose Methods

Original SunEditor has some methods to manipulate the editor imperatively. So I expose these methods for using from outside of SunEditorVue component.

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
- [ ] custom style (like... dark mode?🕶)

## License

<!-- license message -->
