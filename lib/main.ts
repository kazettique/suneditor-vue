// import SunEditorVue from '../src/SunEditor.vue'

// export { SunEditorVue }

import SunEditorVue from '../src/SunEditor.vue';

export default {
  install: (app, options) => {
    app.component("SunEditorVue", SunEditorVue)
  }
}
