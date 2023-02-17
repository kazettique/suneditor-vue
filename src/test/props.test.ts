import { mount } from '@vue/test-utils';
import { describe, it } from 'vitest';

import editorEventHandlers from '../mock/emits';
import editorProps from '../mock/props';
import SunEditor from '../SunEditor.vue';

describe('Test component props', async () => {
  it('check sun editor instance', () => {
    // * ARRANGE
    expect(SunEditor).toBeTruthy();

    const wrapper = mount(SunEditor, {
      props: {
        ...editorProps,
        isTestingMode: true,
      },
    });

    // * ACT
    const sunEditorElement = wrapper.find('.sun-editor');

    const undoEl = wrapper.find('[data-command="undo"]');

    // * ASSERT
    expect(sunEditorElement).toBeTruthy();
    expect(undoEl).toBeTruthy();

    // await wrapper.get('button').trigger('click');

    // expect(wrapper.text()).toContain('4 x 3 = 12');

    // await wrapper.get('button').trigger('click');
    // * ASSERT

    // expect(wrapper.text()).toContain('4 x 4 = 16');
  });
});
