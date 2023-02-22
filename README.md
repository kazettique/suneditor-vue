# suneditor-vue

A Vue 3 component wrapped with pure JavaScript based WYSIWYG editor, [SunEditor](https://github.com/JiHong88/SunEditor). Hooking up with Vue's reactivity APIs, controlled by the lifecycle of Vue. Fully TypeScript support with every type you need for configurations. Let's dive in! 🙌

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
    - [Audio UPload Handler Event](#audio-upload-handler-event)
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
pnpm install suneditor-vue --save
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

| Prop           | Type         | Required | Description                       |
| -------------- | ------------ | -------- | --------------------------------- |
| disable        | `boolean`    | false    | Disable whole component.          |
| disableToolbar | `boolean`    | false    | Disable toolbar area.             |
| disableWysiwyg | `boolean`    | false    | Disable Wysiwyg area.             |
| isNoticeOpen   | `boolean`    | false    | Toggle open the notice bar.       |
| noticeMessage  | `string`     | false    | Content message in notice bar.    |
| readOnly       | `boolean`    | false    | Make component read only.         |
| setOptions     | `SetOptions` | false    | Set options for editor component. |

### SetOptions

The core part in props is `SetOptions`. `SetOptions` is a large object, almost all configurations of SunEditor are set inside this object. And many of them are remain the same with the [original](./) one. I made something more strongly typed. But don't worry, the usage will be the same.

| Prop       | Type | Required | Description |
| ---------- | ---- | -------- | ----------- |
| alignItems |      |          |             |

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

Since the [original SunEditor](https://github.com/JiHong88/SunEditor) does not has traditional Chinese language pack, so I added one if anyone need it. 🙌

## Events

For event handlers, I adjusted a little bit with payload in callback functions.

From original callback functions, for example, `onCopy` event, the type definition is:

```ts
(event: Event, clipboardData: any, core: Core) => boolean;
```

I changed it into:

```ts
(payload: { clipboardData: any; clipboardEvent: ClipboardEvent }) => void;
```

First, I removed `core` from params since I don't want to mutate the component imperatively. (Using reactivity system from Vue!)

Second, I turned params into an object, it became slimmer. After that, don't worry about the order. Just destruct what you need. No redundant variables. 😎

All events are listed below:

### Scroll Event

| Event Name | Payload                | Description |
| ---------- | ---------------------- | ----------- |
| scroll     | `{ uiEvent: UIEvent }` |             |

### Focus Event

### Mouse Down Event

### Click Event

### Input Event

### Key Up Event

### Change Event

### Blur Event

### Drop Event

### Paste Event

### Copy Event

### Cut Event

### Save Event

### Show Inline Event

### Show Controller Event

### Image Upload Handler Event

### Video Upload Handler Event

### Audio UPload Handler Event

### Toggle Code View Event

### Toggle Full Screen Event

### Image Upload Before Event

### Video Upload Before Event

### Audio Upload Before Event

### Image Upload Event

### Video Upload Event

### Audio Upload Event

### Image Upload Error Event

### Video Upload Error Event

### Audio Upload Error Event

### Resize Editor Event

### Set Toolbar Buttons Event

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
    blur: (payload) => {
      // do something...
    },
    change: (payload) => {
      // do something...
    },
    click: (payload) => {
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

  const handleBlur: IEmits['blur'] = (payload) => {
    // do something...
  };

  const handleChange: IEmits['change'] = (payload) => {
    // do something...
  };

  const handleClick: IEmits['click'] = (payload) => {
    // do something...
  };
</script>
```

### Expose Methods Typing

<!-- TODO: example -->

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
