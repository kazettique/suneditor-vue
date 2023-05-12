import component from './SunEditor.vue';
import type { App, Plugin } from 'vue';

type InstallableComponent = typeof component & { install: Exclude<Plugin['install'], undefined> };

export default /*#__PURE__*/ ((): InstallableComponent => {
    const installable = component as unknown as InstallableComponent;

    installable.install = (app: App) => {
        app.component('SunEditorVue', installable);
    };
    return installable;
})();
