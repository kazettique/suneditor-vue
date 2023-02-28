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
      - [Editor](#editor)
      - [Language (i18n)](#language-i18n)
        - [Add your own language pack](#add-your-own-language-pack)
        - [Adding Traditional Chinese Language Pack! 🎉](#adding-traditional-chinese-language-pack-)
      - [Image](#image)
      - [Video](#video)
      - [Audio](#audio)
      - [Plugin \& Extension](#plugin--extension)
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
  - [TypeScript Support](#typescript-support)
    - [Props Typing](#props-typing)
    - [Events Typing](#events-typing)
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
  <SunEditor v-bind="props" @change="handleChange" />
</template>

<script setup>
  import 'suneditor/dist/css/suneditor.min.css';
  import SunEditor from 'suneditor-vue';

  // props
  const props = {
    // some props...
  };

  // event handler
  const handleChange = (content) => {
    // do something...
  };
</script>
```

## Props

All props are OPTIONAL.

| Prop           | Type         | Default | Description                             |
| -------------- | ------------ | ------- | --------------------------------------- |
| disable        | `boolean`    | `false` | Set `true` to disable whole component.  |
| disableToolbar | `boolean`    | `false` | Set `true` to disable toolbar area.     |
| disableWysiwyg | `boolean`    | `false` | Set `true` to disable Wysiwyg area.     |
| isNoticeOpen   | `boolean`    | `false` | Set `true` to open the notice bar.      |
| noticeMessage  | `string`     |         | Content message in notice bar.          |
| readOnly       | `boolean`    | `false` | Set `true` to make component read only. |
| setOptions     | `SetOptions` |         | Set options for editor component.       |

### SetOptions

The core part in props is `SetOptions`. `SetOptions` is a large object, almost all configurations of SunEditor are set inside this object. And many of them are remain the same with the [original][SunEditionOptions] one. I made something more strongly typed. But don't worry, the usage will be the same.

#### Editor

| Prop                        | Type                                   | Default   | Description                                                                                                                   |
| --------------------------- | -------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------- |
| plugins                     |                                        |           |                                                                                                                               |
| lang                        | [Lang][Lang]                           |           | Setup language pack for buttons.                                                                                              |
| defaultTag                  | `string`                               | `<p>`     | Set default HTML tag.                                                                                                         |
| textTags                    | [TextTags][TextTags]                   |           | Customize HTML tags for text format. <br> For example: default bold text might be `<strong>`, default italic might be `<em>`. |
| value                       | `string`                               |           | Initial value (HTML string) in wysiwyg area.                                                                                  |
| historyStackDelayTime       | `number`                               | `400`     | Set delay time (in milliseconds) when recording history stack.                                                                |
| addTagsWhitelist            | `string \| '*'`                        |           |                                                                                                                               |
| tagsBlacklist               | `string`                               |           |                                                                                                                               |
| pasteTagsWhitelist          | `string \| '*'`                        |           |                                                                                                                               |
| pasteTagsBlacklist          | `string`                               |           |                                                                                                                               |
| attributesWhitelist         |                                        |           |                                                                                                                               |
| attributesBlacklist         |                                        |           |                                                                                                                               |
| mode                        | `EditorModeType`                       | `classic` | The mode of editor.                                                                                                           |
| rtl                         | `boolean`                              | `false`   | Set `true` to enable RTL (right to left) mode.                                                                                |
| lineAttrReset               | `string`                               |           |                                                                                                                               |
| buttonList                  | `ButtonListItemType`                   |           | Button list in panel.                                                                                                         |
| toolbarWidth                | `string`                               |           | The width of toolbar. Only applied when the mode is 'inline' or 'balloon'.                                                    |
| toolbarContainer            | `HTMLElement \| string`                |           |                                                                                                                               |
| stickyToolbar               | `number \| string`                     |           |                                                                                                                               |
| hideToolbar                 | `boolean`                              | `false`   | Set `true` to hide toolbar.                                                                                                   |
| fullScreenOffset            | `number \| string`                     |           | Top offset value of 'full screen'.                                                                                            |
| iframe                      | `boolean`                              |           |                                                                                                                               |
| fullPage                    | `boolean`                              |           |                                                                                                                               |
| iframeAttributes            |                                        |           |                                                                                                                               |
| iframeCSSFileName           | `string \| string[]`                   |           |                                                                                                                               |
| previewTemplate             | `string`                               |           | A template at preview page in HTML string. See [example][PreviewTemplateExample].                                             |
| printTemplate               | `string`                               |           | A template at print page in HTML string. See [example][PrintTemplateExample]                                                  |
| codeMirror                  |                                        |           |                                                                                                                               |
| katex                       |                                        |           |                                                                                                                               |
| mathFontSize                |                                        |           |                                                                                                                               |
| position                    | `string`                               |           | The position property (CSS) of editor.                                                                                        |
| display                     | `string`                               |           |                                                                                                                               |
| popupDisplay                | `PopupDisplayType`                     |           | Set the size of dialog window when show up.                                                                                   |
| resizingBar                 | `boolean`                              |           | Show resizing bar at the bottom of editor.                                                                                    |
| showPathLabel               |                                        | `false`   | Set `true` to show current HTML structure at resizing bar.                                                                    |
| resizeEnable                |                                        | `true`    | Set `false` to disable resizing editor.                                                                                       |
| resizingBarContainer        | `HTMLElement \| string`                |           |                                                                                                                               |
| charCounter                 | `boolean`                              |           | <!--Show character counter.-->                                                                                                |
| charCounterType             | `CharCounterType`                      |           | Define calculation method for character counter.                                                                              |
| charCounterLabel            | `string`                               |           | Character counter label text.                                                                                                 |
| maxCharCount                | `number`                               |           | The maximum number of characters for editor.                                                                                  |
| width                       | `string`                               |           | Set width of editor.                                                                                                          |
| minWidth                    | `string`                               |           | Set min-width of editor.                                                                                                      |
| maxWidth                    | `string`                               |           | Set max-width of editor.                                                                                                      |
| height                      | `string`                               |           | Set height of editor.                                                                                                         |
| minHeight                   | `string`                               |           | Set min-height of editor.                                                                                                     |
| maxHeight                   | `string`                               |           | Set max-height of editor.                                                                                                     |
| className                   | `string`                               |           | Set CSS class to wysiwyg element. (`.sun-editor-editable`)                                                                    |
| defaultStyle                | `string`                               |           | Set style to wysiwyg element. (`.sun-editor-editable`)                                                                        |
| font                        | `string[]`                             |           | Replace default font-family array.                                                                                            |
| fontSize                    | `number[]`                             |           | Replace default font-size array.                                                                                              |
| fontSizeUnit                | `string`                               |           | Set font size unit.                                                                                                           |
| alignItems                  | `AlignItemsType[]`                     |           | Set content & order of align items dropdown list.                                                                             |
| formats                     | [FormatTagName][FormatTagName]`[]`     |           | Replace default formatBlock array.                                                                                            |
| colorList                   | `string[]`                             |           | Replace default color picker list.                                                                                            |
| lineHeights                 | [LineHeightsItem][LineHeightsItem]`[]` |           | Replace default line heights list.                                                                                            |
| paragraphStyles             | [ParagraphStyles][ParagraphStyles]     |           | Replace default paragraph style list.                                                                                         |
| textStyles                  | [TextStyles][TextStyles]               |           | Replace default text style list.                                                                                              |
| tableCellControllerPosition | `TableCellControllerPositionType`      | `cell`    | Define position to the table cell controller.                                                                                 |
| linkTargetNewWindow         | `boolean`                              | `false`   | Set `true` for "Open in new window" checkbox checked initially.                                                               |
| linkProtocol                | `string`                               |           |                                                                                                                               |
| linkRel                     | `string[]`                             |           |                                                                                                                               |
| linkRelDefault              |                                        |           |                                                                                                                               |
| linkNoPrefix                | `boolean`                              |           |                                                                                                                               |
| hrItems                     |                                        |           |                                                                                                                               |
| tabDisable                  | `boolean`                              | `false`   | Set `true` to disable tab key interaction in wysiwyg area.                                                                    |
| shortcutsDisable            | `string[]`                             |           |                                                                                                                               |
| shortcutsHint               | `boolean`                              |           |                                                                                                                               |
| callBackSave                |                                        |           |                                                                                                                               |
| templates                   | [TemplatesItem][TemplatesItem]`[]`     |           |                                                                                                                               |
| placeholder                 | `string`                               |           | Set placeholder text.                                                                                                         |
| mediaAutoSelect             |                                        |           |                                                                                                                               |
| icons                       |                                        |           |                                                                                                                               |

#### Language (i18n)

Import `getLanguage` method to get language object for toolbar interface. If not, English will be default.

```ts
import { getLanguage } from 'suneditor-vue';

const setOptions = {
  lang: getLanguage('zh_tw'),
  // other settings...
};
```

`getLanguage` method is defined with TypeScript, if we type quotation mark, all available lang will show up:

![getLanguage](/public/img/getLang.png)

##### Add your own language pack

If the language is not available in list, you can add your own, just import `Lang` to define language object, then using it in `SetOption` of props.

```ts
import type { Lang } from 'suneditor/src/lang/Lang';

const customLang: Lang = {
  code: 'custom lang code',
  // language settings...
};

export default customLang;
```

##### Adding Traditional Chinese Language Pack! 🎉

Since the [original SunEditor][SunEditor] does not has traditional Chinese language pack, so I provided one if anyone need it. 🙌

#### Image

| Prop                    | Type                     | Default | Description                                                                                                                                                                                                                                                  |
| ----------------------- | ------------------------ | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| imageResizing           | `boolean`                | `true`  | Set `false` to disable resizing inserted image. <br> PS. If `imageSizeOnlyPercentage` is set to `true`, then `imageResizing` will set disabled IMPLICITLY.                                                                                                   |
| imageHeightShow         | `boolean`                |         |                                                                                                                                                                                                                                                              |
| imageAlignShow          | `boolean`                |         |                                                                                                                                                                                                                                                              |
| imageWidth              | `string`                 |         | Set initial width when image is inserted.                                                                                                                                                                                                                    |
| imageHeight             | `string`                 |         | Set initial height when image is inserted.                                                                                                                                                                                                                   |
| imageSizeOnlyPercentage | `boolean`                |         | Set `true` to restrict image scaling only by percentage. In the meantime, `imageResizing` will set `false` IMPLICITLY.                                                                                                                                       |
| imageRotation           | `boolean`                |         | When `imageSizeOnlyPercentage` is `true` OR `imageHeightShow` is `false`, default value is `false`.                                                                                                                                                          |
| imageFileInput          | `boolean`                |         | Set `true` to show file input in image upload dialog.                                                                                                                                                                                                        |
| imageUrlInput           | `boolean`                |         | Set `true` to show url text input image upload dialog.                                                                                                                                                                                                       |
| imageUploadHeader       | `Record<string, string>` |         | Http Header when uploading images.                                                                                                                                                                                                                           |
| imageUploadUrl          | `string`                 |         | The image upload to server mapping address                                                                                                                                                                                                                   |
| imageUploadSizeLimit    | `number`                 |         | Set upload limit for image. (per image, in **bytes**)                                                                                                                                                                                                        |
| imageMultipleFile       | `boolean`                | `false` | Set `true` to enable multiple file selection.                                                                                                                                                                                                                |
| imageAccept             | `string`                 |         | Set accepted image file types. <br> Use asterisk mark accept for any types. <br> Use comma to separate accepted file extension name. <br> For example, "\*" or ".jpg, .png", etc. <br> **Caution**: must **use comma**, or will cause browser to force quit. |
| imageGalleryUrl         | `string`                 |         | The url of the image gallery, if you use the image gallery                                                                                                                                                                                                   |
| imageGalleryHeader      | `Record<string, string>` |         | <!--Http Header when get image gallery.-->                                                                                                                                                                                                                   |

#### Video

| Prop                    | Type                                | Default | Description                                                                                                                                                                      |
| ----------------------- | ----------------------------------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| videoResizing           | `boolean`                           | `true`  | Set `false` to hide video resizing.                                                                                                                                              |
| videoHeightShow         | `boolean`                           | `true`  | Set `false` to hide video height input in upload dialog.                                                                                                                         |
| videoAlignShow          | `boolean`                           | `true`  | Set `false` to hide video align radio buttons in upload dialog.                                                                                                                  |
| videoRatioShow          | `boolean`                           | `true`  | Set `false` to hide video ratio options in upload dialog.                                                                                                                        |
| videoWidth              | `string`                            |         | Set initial width when video is inserted.                                                                                                                                        |
| videoHeight             | `string`                            |         | Set initial height when video is inserted.                                                                                                                                       |
| videoSizeOnlyPercentage | `boolean`                           |         | Set `true` to restrict video scaling only by percentage. In the meantime, `imageResizing` will set `false` IMPLICITLY.                                                           |
| videoRotation           | `boolean`                           |         | When `videoSizeOnlyPercentage` is `true` or `videoHeightShow` is `false`, default value is `false`.                                                                              |
| videoRatio              | `number`                            |         | Set default aspect ratio of video. Up to 4 decimal places is accepted.                                                                                                           |
| videoRatioList          | `VideoRatioType[]`                  |         | Replace video aspect ratio options.                                                                                                                                              |
| youtubeQuery            | `string`                            |         | The query string of a YouTube embedded URL.                                                                                                                                      |
| videoFileInput          | `boolean`                           | `false` | Set `true` to show file input in video upload dialog.                                                                                                                            |
| videoUrlInput           | `boolean`                           | `true`  | Set `false` to hide url text input video upload dialog.                                                                                                                          |
| videoUploadHeader       | `Record<string, string>`            |         | Http Header when uploading videos.                                                                                                                                               |
| videoUploadUrl          | `string`                            |         | The video upload to server mapping address.                                                                                                                                      |
| videoUploadSizeLimit    | `number`                            |         | Set upload limit for video. (per video, in **bytes**)                                                                                                                            |
| videoMultipleFile       | `boolean`                           | `false` | Set `true` to enable multiple file selection.                                                                                                                                    |
| videoIframeAttrs        | `Record<string, string \| boolean>` |         | Define HTML attributes of the video tag.                                                                                                                                         |
| videoAccept             | `string`                            |         | Set accepted video file types. <br> Use asterisk mark accept for any types. <br> Use comma to separate accepted file extension name. <br> For example, "\*" or ".mp4 .avi", etc. |

#### Audio

| Prop                 | Type      | Default | Description                                                                                                                                                                      |
| -------------------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| audioWidth           | `string`  |         | Set default width of audio frame.                                                                                                                                                |
| audioHeight          | `string`  |         | Set default height of audio frame.                                                                                                                                               |
| audioFileInput       | `boolean` | `false` | Set `true` to show file input in audio upload dialog.                                                                                                                            |
| audioUrlInput        | `boolean` | `true`  | Set `false` to hide url text input audio upload dialog.                                                                                                                          |
| audioUploadHeader    |           |         | Http Header when uploading audios.                                                                                                                                               |
| audioUploadUrl       | `string`  |         | The audio upload to server mapping address.                                                                                                                                      |
| audioUploadSizeLimit | `number`  |         | The size of the total uploadable audios (in **bytes**)                                                                                                                           |
| audioMultipleFile    | `boolean` | `false` | Set `true` to enable multiple file selection.                                                                                                                                    |
| audioTagAttrs        |           |         | Define HTML attributes of the audio tag.                                                                                                                                         |
| audioAccept          | `string`  |         | Set accepted audio file types. <br> Use asterisk mark accept for any types. <br> Use comma to separate accepted file extension name. <br> For example, "\*" or ".mp3 .wav", etc. |

#### Plugin & Extension

| Prop | Type | Description |
| ---- | ---- | ----------- |

## Events

For event handlers, I adjusted a little bit with arguments in callback functions.

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

Emit when wysiwyg element is scrolled.

```ts
(args: { uiEvent: UIEvent }) => void;
```

### Focus Event

Emit when editor element is focused.

```ts
(args: { focusEvent: FocusEvent }) => void;
```

### Mouse Down Event

Mouse down event.

```ts
(args: { mouseEvent: MouseEvent }) => void;
```

### Click Event

Emit when editor element is clicked.

```ts
(args: { mouseEvent: PointerEvent }) => void;
```

### Input Event

Wysiwyg area input event.

```ts
(args: { inputEvent: InputEvent }) => void;
```

### Key Up Event

Key up event.

```ts
(args: { keyboardEvent: KeyboardEvent }) => void;
```

### Change Event

When contents change in wysiwyg area.

```ts
(args: { contents: string }) => void;
```

### Blur Event

Emit when editor element is blurred.

```ts
(args: { focusEvent: FocusEvent }) => void;
```

### Drop Event

Drop event.

```ts
(args: { cleanData: string; dragEvent: DragEvent; maxCharCount: number }) => void;
```

### Paste Event

Paste from clipboard.

```ts
(args: { cleanData: string; clipboardEvent: ClipboardEvent; maxCharCount: boolean }) => void;
```

### Copy Event

Copy selected area.

```ts
(args: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
```

### Cut Event

Cut selected area.

```ts
(args: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
```

### Save Event

Emit when save button is clicked.

```ts
(args: { contents: string }) => void;
```

### Show Inline Event

Emit before inline toolbar is positioned and displayed on screen.

```ts
(args: { context: Context; toolbar: Element }) => void;
```

### Show Controller Event

Emit before the controller is positioned and displayed on screen.

```ts
(args: { controllers: Controllers; name: string }) => void;
```

### Image Upload Handler Event

<!-- TODO: description -->

```ts
(args: { info: imageInputInformation; xmlHttp: XMLHttpRequest }) => void;
```

### Video Upload Handler Event

<!-- TODO: description -->

```ts
(args: { info: videoInputInformation; xmlHttp: XMLHttpRequest }) => void;
```

### Audio Upload Handler Event

<!-- TODO: description -->

```ts
(args: { info: audioInputInformation; xmlHttp: XMLHttpRequest }) => void;
```

### Toggle Code View Event

Toggling between code view and wysiwyg view.

```ts
(args: { isCodeView: boolean }) => void;
```

### Toggle Full Screen Event

An event when toggling full screen.

```ts
(args: { isFullScreen: boolean }) => void;
```

### Image Upload Before Event

Emit before the image is uploaded.

```ts
(args: {
  files: Array<File>;
  info: imageInputInformation;
  uploadHandler: Function;
}) => void;
```

### Video Upload Before Event

Emit before the video is uploaded.

```ts
(args: {
  files: Array<File>;
  info: videoInputInformation;
  uploadHandler: Function;
}) => void;
```

### Audio Upload Before Event

Emit before the audio is uploaded.

```ts
(args: {
  files: Array<File>;
  info: audioInputInformation;
  uploadHandler: Function;
}) => void;
```

### Image Upload Event

Emit when the image is uploaded, updated, deleted.

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

Emit when the video is uploaded, updated, deleted.

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

Emit when the audio is uploaded, updated, deleted.

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

Emit when image upload fails.

```ts
(args: { errorMessage: string; result: any }) => void;
```

### Video Upload Error Event

Emit when video upload fails.

```ts
(args: { errorMessage: string; result: any }) => void;
```

### Audio Upload Error Event

Emit when audio upload fails.

```ts
(args: { errorMessage: string; result: any }) => void;
```

### Resize Editor Event

Emit when editor is resized.

```ts
(args: { height: number; prevHeight: number; resizeObserverEntry: ResizeObserverEntry | null }) => void;
```

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

## Special Thanks

Thanks [JiHong88](https://github.com/JiHong88) for awesome WYSIWYG editor.
And thanks [mkhstar](https://github.com/mkhstar)'s React version for references and ideas.

## Todo List

- [ ] Adding code mirror
- [ ] Adding custom plugin
- [ ] Adding katex
- [ ] custom style (like... dark mode?🕶)

## License

<!-- license message -->

<!-- referenced link -->

[SunEditionOptions]: https://github.com/JiHong88/suneditor/blob/master/src/options.d.ts#L4
[TextTags]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L21
[Lang]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/lang/Lang.d.ts#L1
[FormatTagName]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L592
[LineHeightsItem]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L605
[ParagraphStyles]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L606
[TextStyles]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L607
[TemplatesItem]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L604
[SunEditor]: https://github.com/JiHong88/SunEditor
[PreviewTemplateExample]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L124
[PrintTemplateExample]: https://github.com/JiHong88/suneditor/blob/7e2b79f258bbc0845bacd1c7c8296ec17babaeca/src/options.d.ts#L130
