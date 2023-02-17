import { enableAutoUnmount, mount } from '@vue/test-utils';
import { afterEach, describe, it } from 'vitest';

import editorEventHandlers from '../mock/emits';
import editorProps from '../mock/props';
import SunEditor from '../SunEditor.vue';

const buttonList = editorProps.setOptions?.buttonList?.flat() || [];

describe('Test component props', async () => {
  enableAutoUnmount(afterEach);

  it('Test editor instance mounted correctly.', () => {
    // * ARRANGE
    expect(SunEditor).toBeTruthy();

    const wrapper = mount(SunEditor, {
      props: {
        isTestingMode: true,
      },
    });

    // * ACT
    const editorMountedEl = wrapper.find('.sun-editor');

    // * ASSERT
    expect(editorMountedEl).toBeTruthy();

    wrapper.unmount();
  });

  it.each(buttonList)('Check if "%s" button exists.', (buttonName) => {
    // * ARRANGE
    const wrapper = mount(SunEditor, {
      props: {
        ...editorProps,
        isTestingMode: true,
      },
    });

    // * ACT
    const buttonEl = wrapper.find(`[data-command="${buttonName}"]`);

    // * ASSERT
    expect(buttonEl).toBeTruthy();

    wrapper.unmount();
  });

  it('Check placeholder', async (buttonName) => {
    // * ARRANGE
    const PLACEHOLDER = 'this is test placeholder message.';
    const wrapper = mount(SunEditor, {
      props: {
        isTestingMode: true,
        setOptions: {
          placeholder: PLACEHOLDER,
        },
      },
    });

    // * ACT
    const placeholderEl = await wrapper.find(`.se-placeholder`);
    let text = '';
    if (placeholderEl.exists()) {
      text = await placeholderEl.text();
    }

    // * ASSERT
    expect(text).toBe(PLACEHOLDER);
    // expect(placeholderEl).toBeTruthy();

    wrapper.unmount();
  });
});
