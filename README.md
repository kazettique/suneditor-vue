# suneditor-vue

A Vue 3 component wrapped with pure JavaScript based WYSIWYG editor, [SunEditor][SunEditor]. Hooking up with Vue's reactivity APIs, controlled by the lifecycle of Vue. Fully TypeScript support with every type you need for configurations. Let's dive in! 🙌

## Table of Contents

- [suneditor-vue](#suneditor-vue)
  - [Table of Contents](#table-of-contents)
  - [Demos](#demos)
  - [Installation](#installation)
  - [Basic Usage](#basic-usage)
  - [Props](#props)
    - [SetOptions](#setoptions)
    - [Language Support (i18n)](#language-support-i18n)
      - [Adding Traditional Chinese Language Pack! 🎉](#adding-traditional-chinese-language-pack-)
  - [Events](#events)
    - [Scroll Event](#scroll-event)
    - [Focus Event](#focus-event)
    - [Mouse Down Event](#mouse-down-event)
    - [Click Event](#click-event)
    - [Input Event](#input-event)
    - [Key Up Event](#key-up-event)
    - [Change Event](#change-event)
    - [Blur Event](#blur-event)
    - [Drop Event](#drop-event)
    - [Paste Event](#paste-event)
    - [Copy Event](#copy-event)
    - [Cut Event](#cut-event)
    - [Save Event](#save-event)
    - [Show Inline Event](#show-inline-event)
    - [Show Controller Event](#show-controller-event)
    - [Image Upload Handler Event](#image-upload-handler-event)
    - [Video Upload Handler Event](#video-upload-handler-event)
    - [Audio Upload Handler Event](#audio-upload-handler-event)
    - [Toggle Code View Event](#toggle-code-view-event)
    - [Toggle Full Screen Event](#toggle-full-screen-event)
    - [Image Upload Before Event](#image-upload-before-event)
    - [Video Upload Before Event](#video-upload-before-event)
    - [Audio Upload Before Event](#audio-upload-before-event)
    - [Image Upload Event](#image-upload-event)
    - [Video Upload Event](#video-upload-event)
    - [Audio Upload Event](#audio-upload-event)
    - [Image Upload Error Event](#image-upload-error-event)
    - [Video Upload Error Event](#video-upload-error-event)
    - [Audio Upload Error Event](#audio-upload-error-event)
    - [Resize Editor Event](#resize-editor-event)
    - [Set Toolbar Buttons Event](#set-toolbar-buttons-event)
  - [Expose Methods](#expose-methods)
  - [TypeScript Support](#typescript-support)
    - [Props Typing](#props-typing)
    - [Events Typing](#events-typing)
    - [Expose Methods Typing](#expose-methods-typing)
  - [Special Thanks](#special-thanks)
  - [Todo List](#todo-list)
  - [License](#license)

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
pnpm add suneditor-vue --save
```

## Basic Usage

Import SunEditorVue component with composition API in Vue 3:

```html
<template>
  <SunEditor v-bind="props" @change="handleChange" v-model="editorHtmlString" />
</template>

<script setup>
  import 'suneditor/dist/css/suneditor.min.css';

  import { ref } from 'vue';
  import SunEditor from 'suneditor-vue';

  // props
  const props = {
    // some props...
  };

  // event handler
  const handleChange = (content) => {
    // do something...
  };

  // binding ref with v-model
  const editorHtmlString = ref('');
</script>
```

## Props

All props are OPTIONAL.

| Prop           | Type         | Description                       |
| -------------- | ------------ | --------------------------------- |
| disable        | `boolean`    | Disable whole component.          |
| disableToolbar | `boolean`    | Disable toolbar area.             |
| disableWysiwyg | `boolean`    | Disable Wysiwyg area.             |
| isNoticeOpen   | `boolean`    | Toggle open the notice bar.       |
| noticeMessage  | `string`     | Content message in notice bar.    |
| readOnly       | `boolean`    | Make component read only.         |
| setOptions     | `SetOptions` | Set options for editor component. |

### SetOptions

The core part in props is `SetOptions`. `SetOptions` is a large object, almost all configurations of SunEditor are set inside this object. And many of them are remain the same with the [original](./) one. I made something more strongly typed. But don't worry, the usage will be the same.

| Prop                        | Type                                   | Description |
| --------------------------- | -------------------------------------- | ----------- |
| plugins                     |                                        |             |
| lang                        | [Lang][Lang]                           |             |
| defaultTag                  | `string`                               |             |
| textTags                    |                                        |             |
| value                       | `string`                               |             |
| historyStackDelayTime       | `number`                               |             |
| addTagsWhitelist            | `string \| '*'`                        |             |
| tagsBlacklist               | `string`                               |             |
| pasteTagsWhitelist          | `string \| '*'`                        |             |
| pasteTagsBlacklist          | `string`                               |             |
| attributesWhitelist         |                                        |             |
| attributesBlacklist         |                                        |             |
| mode                        | `EditorModeType`                       |             |
| rtl                         | `boolean`                              |             |
| lineAttrRest                | `string`                               |             |
| buttonList                  |                                        |             |
| toolbarWidth                | `string`                               |             |
| toolbarContainer            | `HTMLElement \| string`                |             |
| stickyToolbar               | `number \| string`                     |             |
| hideToolbar                 | `boolean`                              |             |
| fulScreenOffset             | `number \| string`                     |             |
| iframe                      | `boolean`                              |             |
| fullPage                    | `boolean`                              |             |
| iframeAttributes            |                                        |             |
| iframeCSSFileName           | `string \| string[]`                   |             |
| previewTemplate             | `string`                               |             |
| printTemplate               | `string`                               |             |
| codeMirror                  |                                        |             |
| katex                       |                                        |             |
| mathFontSize                |                                        |             |
| position                    | `string`                               |             |
| display                     | `string`                               |             |
| popupDisplay                | `PopupDisplayType`                     |             |
| resizingBar                 |                                        |             |
| showPathLabel               |                                        |             |
| resizeEnable                |                                        |             |
| resizingBarContainer        | `HTMLElement \| string`                |             |
| charCounter                 | `boolean`                              |             |
| charCounterType             | `CharCounterType`                      |             |
| charCounterLabel            | `string`                               |             |
| maxCharCount                | `number`                               |             |
| width                       | `string`                               |             |
| minWidth                    | `string`                               |             |
| maxWidth                    | `string`                               |             |
| height                      | `string`                               |             |
| minHeight                   | `string`                               |             |
| maxHeight                   | `string`                               |             |
| className                   | `string`                               |             |
| defaultStyle                | `string`                               |             |
| font                        | `string[]`                             |             |
| fontSize                    | `number[]`                             |             |
| fontSizeUnit                | `string`                               |             |
| alignItems                  | `AlignItemsType[]`                     |             |
| formats                     | [FormatTagName][FormatTagName]`[]`     |             |
| colorList                   | `string[]`                             |             |
| lineHeights                 | [LineHeightsItem][LineHeightsItem]`[]` |             |
| paragraphStyles             | [ParagraphStyles][ParagraphStyles]     |             |
| textStyles                  | [TextStyles][TextStyles]               |             |
| imageResizing               | `boolean`                              |             |
| imageHeightShow             | `boolean`                              |             |
| imageAlignShow              | `boolean`                              |             |
| imageWidth                  | `string`                               |             |
| imageHeight                 | `string`                               |             |
| imageSizeOnlyPercentage     | `boolean`                              |             |
| imageRotation               | `boolean`                              |             |
| imageFileInput              | `boolean`                              |             |
| imageUrlInput               | `boolean`                              |             |
| imageUploadHeader           |                                        |             |
| imageUPloadUrl              | `string`                               |             |
| imageUploadSizeLimit        | `number`                               |             |
| imageMultipleFile           | `boolean`                              |             |
| imageAccept                 | `string`                               |             |
| imageGalleryUrl             | `string`                               |             |
| imageGalleryHeader          |                                        |             |
| videoResizing               | `boolean`                              |             |
| videoHeightShow             | `boolean`                              |             |
| videoAlignShow              | `boolean`                              |             |
| videoRatioShow              | `boolean`                              |             |
| videoWidth                  | `string`                               |             |
| videoHeight                 | `string`                               |             |
| videoSizeOnlyPercentage     | `boolean`                              |             |
| videoRotation               | `boolean`                              |             |
| videoRatio                  | `number`                               |             |
| videoRatioList              |                                        |             |
| youtubeQuery                | `string`                               |             |
| videoFileInput              | `boolean`                              |             |
| videoUrlInput               | `boolean`                              |             |
| videoUploadHeader           |                                        |             |
| videoUploadUrl              | `string`                               |             |
| videoUploadSizeLimit        | `number`                               |             |
| videoMultipleFile           | `boolean`                              |             |
| videoIframeAttrs            |                                        |             |
| videoAccept                 | `string`                               |             |
| audioWidth                  | `string`                               |             |
| audioHeight                 | `string`                               |             |
| audioFileInput              | `boolean`                              |             |
| audioUrlInput               | `boolean`                              |             |
| audioUploadHeader           |                                        |             |
| audioUploadUrl              | `string`                               |             |
| audioUploadSizeLimit        | `number`                               |             |
| audioMultipleFile           | `boolean`                              |             |
| audioTagAttrs               |                                        |             |
| audioAccept                 | `string`                               |             |
| tableCellControllerPosition | `string`                               |             |
| linkTargetNewWindow         | `boolean`                              |             |
| linkProtocol                | `string`                               |             |
| linkRel                     | `string[]`                             |             |
| linkRelDefault              |                                        |             |
| linkNoPrefix                | `boolean`                              |             |
| hrItems                     |                                        |             |
| tabDisable                  | `boolean`                              |             |
| shortcutsDisable            | `string[]`                             |             |
| shortcutsHint               | `boolean`                              |             |
| callBackSave                |                                        |             |
| templates                   | [TemplatesItem][TemplatesItem]`[]`     |             |
| placeholder                 | `string`                               |             |
| mediaAutoSelect             |                                        |             |
| icons                       |                                        |             |

### Language Support (i18n)

Import `getLanguage` method to get language object for toolbar interface. If not, English will be default.

```ts
import { getLanguage } from 'suneditor-vue';

const setOptions = {
  lang: getLanguage('zh_tw'),
  // other settings...
};
```

#### Adding Traditional Chinese Language Pack! 🎉

Since the [original SunEditor][SunEditor] does not has traditional Chinese language pack, so I added one if anyone need it. 🙌

## Events

For event handlers, I adjusted a little bit with args in callback functions.

From original callback functions, for example, `onCopy` event, the type definition is:

```ts
(clipboardEvent: ClipboardEvent, clipboardData: any, core: Core) => boolean;
```

I changed it into:

```ts
(args: { clipboardEvent: ClipboardEvent; clipboardData: any; }) => void;
```

First, I removed `core` from arguments since I don't want to mutate the component imperatively. (Using reactivity system from Vue!)

Second, I turned arguments into an object. So we don't have to worry about the order anymore. Just destruct what you need. No redundant variables. 😎

All events are listed below:

### Scroll Event

```ts
(args: { uiEvent: UIEvent }) => void;
```

### Focus Event

```ts
(args: { focusEvent: FocusEvent }) => void;
```

### Mouse Down Event

```ts
(args: { mouseEvent: MouseEvent }) => void;
```

### Click Event

```ts
(args: { mouseEvent: PointerEvent }) => void;
```

### Input Event

```ts
(args: { inputEvent: InputEvent }) => void;
```

### Key Up Event

```ts
(args: { keyboardEvent: KeyboardEvent }) => void;
```

### Change Event

```ts
(args: { contents: string }) => void;
```

### Blur Event

```ts
(args: { focusEvent: FocusEvent }) => void;
```

### Drop Event

```ts
(args: { cleanData: string; dragEvent: DragEvent; maxCharCount: number }) => void;
```

### Paste Event

```ts
(args: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: boolean }) => void;
```

### Copy Event

```ts
(args: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
```

### Cut Event

```ts
(args: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
```

### Save Event

```ts
(args: { contents: string }) => void;
```

### Show Inline Event

```ts
(args: { context: Context; toolbar: Element }) => void;
```

### Show Controller Event

```ts
(args: { controllers: Controllers; name: string }) => void;
```

### Image Upload Handler Event

```ts
(args: { info: imageInputInformation; xmlHttp: XMLHttpRequest }) => void;
```

### Video Upload Handler Event

```ts
(args: { info: videoInputInformation; xmlHttp: XMLHttpRequest }) => void;
```

### Audio Upload Handler Event

```ts
(args: { info: audioInputInformation; xmlHttp: XMLHttpRequest }) => void;
```

### Toggle Code View Event

```ts
(args: { isCodeView: boolean }) => void;
```

### Toggle Full Screen Event

```ts
(args: { isFullScreen: boolean }) => void;
```

### Image Upload Before Event

```ts
(args: {
  files: Array<File>; // TODO: different with origin
  info: imageInputInformation;
  uploadHandler: Function;
}) => void;
```

### Video Upload Before Event

```ts
(args: {
  files: Array<File>; // TODO: different with origin
  info: videoInputInformation;
  uploadHandler: Function;
}) => void;
```

### Audio Upload Before Event

```ts
(args: {
  files: Array<File>; // TODO: different with origin
  info: audioInputInformation;
  uploadHandler: Function;
}) => void;
```

### Image Upload Event

```ts
(args: {
  index: number;
  info: fileInfo;
  remainingFilesCount: number;
  state: UploadStateType;
  targetImgElement: HTMLImageElement;
}) => void;
```

### Video Upload Event

```ts
(args: {
  index: number;
  info: fileInfo;
  remainingFilesCount: number;
  state: UploadStateType;
  targetElement: HTMLElement;
}) => void;
```

### Audio Upload Event

```ts
(args: {
  index: number;
  info: fileInfo;
  remainingFilesCount: number;
  state: UploadStateType;
  targetElement: HTMLElement;
}) => void;
```

### Image Upload Error Event

```ts
(args: { errorMessage: string; result: any }) => void;
```

### Video Upload Error Event

```ts
(args: { errorMessage: string; result: any }) => void;
```

### Audio Upload Error Event

```ts
(args: { errorMessage: string; result: any }) => void;
```

### Resize Editor Event

```ts
(args: { height: number; prevHeight: number; resizeObserverEntry: ResizeObserverEntry | null }) => void;
```

### Set Toolbar Buttons Event

```ts
(args: { buttonList: Array<any> }) => void;
```

## Expose Methods

Original SunEditor has some methods to manipulate the editor imperatively. So I expose these methods for using from outside of SunEditorVue component.

## TypeScript Support

If you were a TypeScript maniac (just like me), you would like to typing things as many as possible. So here's the recipe:

### Props Typing

You can do props typing by import `IProps`.

```html
<template>
  <SunEditor v-bind="props" />
</template>

<script setup lang="ts">
  import type { IProps, SetOptions } from 'suneditor-vue';

  const setOptions: SetOptions = {
    // your SetOptions...
  };

  const props: IProps = {
    // your props...
    setOptions,
  };
</script>
```

### Events Typing

You can do events typing by importing `IEmits`.

```html
<template>
  <SunEditor @blur="eventHandlers.blur" @change="eventHandlers.change" @click="eventHandlers.click" />
</template>

<script setup lang="ts">
  import type { IEmits } from 'suneditor-vue';

  const eventHandlers: IEmits = {
    blur: (args) => {
      // do something...
    },
    change: (args) => {
      // do something...
    },
    click: (args) => {
      // do something...
    },
  };
</script>
```

Or defining event handlers separately:

```html
<template>
  <SunEditor @blur="handleBlur" @change="handleChange" @click="handleClick" />
</template>

<script setup lang="ts">
  import type { IEmits } from 'suneditor-vue';

  const handleBlur: IEmits['blur'] = (args) => {
    // do something...
  };

  const handleChange: IEmits['change'] = (args) => {
    // do something...
  };

  const handleClick: IEmits['click'] = (args) => {
    // do something...
  };
</script>
```

### Expose Methods Typing

<!-- TODO: example -->

## Special Thanks

Thanks [JiHong88](https://github.com/JiHong88) for awesome WYSIWYG editor.
And thanks [mkhstar](https://github.com/mkhstar)'s React version for good references and ideas.

## Todo List

- [ ] Adding code mirror
- [ ] Adding custom plugin
- [ ] Adding katex
- [ ] custom style (like... dark mode?🕶)

## License

<!-- license message -->

<!-- referenced link -->

[Lang]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/lang/Lang.d.ts#L1
[FormatTagName]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L592
[LineHeightsItem]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L605
[ParagraphStyles]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L606
[TextStyles]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L607
[TemplatesItem]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L604
[SunEditor]: https://github.com/JiHong88/SunEditor
