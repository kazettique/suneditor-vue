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

### Usage

## Props

| Prop            | Type       | Required | Default Value | Description |
| --------------- | ---------- | -------- | ------------- | ----------- |
| defaultValue    | string     | false    | `false`       |             |
| disable         | boolean    | false    | `false`       |             |
| disableToolbar  | boolean    | false    | `false`       |             |
| disableWysiwyg  | boolean    | false    | `false`       |             |
| isNoticeOpen    | boolean    | false    | `false`       |             |
| isTestingMode   | boolean    | false    | `false`       |             |
| noticeMessage   | string     | false    | `''`          |             |
| readOnly        | boolean    | false    | `false`       |             |
| setAllPlugins   | boolean    | false    | `false`       |             |
| setDefaultStyle | string     | false    | `''`          |             |
| setOptions      | SetOptions | false    | `{}`          |             |

<!-- TODO: add link -->

For who considering typing their props object, you can import it from [here](''):

```ts
import type { IProps } from '../SunEditor.vue';

const props: IProps = {
  // ...
};
```

## Events

| Event       | Parameter | Return Type | Description |
| ----------- | --------- | ----------- | ----------- |
| audioUpload | string    | false       | `false`     |

## Expose Methods

Original sun editor has some methods to manipulate the editor imperatively. So I expose these methods for using from outside of suneditor-vue component.

## TypeScript Support

## Adding Traditional Chinese Language Pack! 🎉

Since the original sun editor does not has traditional Chinese language, I added one if anyone need it. 🙌
