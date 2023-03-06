import type { App, Plugin } from 'vue';

import SunEditor, { type IProps } from './SunEditor.vue';
import { getLanguage } from './utils';

// export default {
//   install(Vue: App) {
//     Vue.component(SunEditor.name, SunEditor);
//   },
// } as Plugin;

export default SunEditor;

export * from './types';
export { getLanguage, IProps, SunEditor };
