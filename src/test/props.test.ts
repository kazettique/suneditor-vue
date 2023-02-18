import { enableAutoUnmount, mount } from '@vue/test-utils';
import { afterEach, describe, it } from 'vitest';

import editorEventHandlers from '../mock/emits';
import editorProps from '../mock/props';
import SunEditor from '../SunEditor.vue';

const buttonList = editorProps.setOptions?.buttonList?.flat() || [];

describe('Test component props', async () => {
  // enableAutoUnmount(afterEach);

  it('Check editor instance mounted correctly.', async () => {
    // * ARRANGE
    expect(SunEditor).toBeTruthy();

    const wrapper = await mount(SunEditor, {
      props: {
        isTestingMode: true,
      },
    });

    // * ACT
    const editorMountedEl = await wrapper.get('.sun-editor');

    // * ASSERT
    expect(editorMountedEl).toBeTruthy();

    wrapper.unmount();
  });

  it.skip.each(buttonList)('Check if "%s" button exists.', (buttonName) => {
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

  it.skip('Check placeholder', async (buttonName) => {
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
    const placeholderEl = await wrapper.find(`span.se-placeholder`);
    // const placeholderEl = await wrapper.findAll(`.sun-editor`);
    // let text = '';
    // if (placeholderEl.exists()) {
    //   text = await placeholderEl.text();
    // }
    // const text = await placeholderEl.text();

    // * ASSERT
    // expect(text).toBe(PLACEHOLDER);
    // expect(placeholderEl).toMatchSnapshot('<span class="se-placeholder">123</span>');

    wrapper.unmount();
  });

  it.skip('Check charCounterLabel', async (buttonName) => {
    // * ARRANGE
    const CHAR_COUNTER_LABEL = 'Hello this is charCounterLabel.';
    const wrapper = mount(SunEditor, {
      props: {
        isTestingMode: true,
        setOptions: {
          charCounterLabel: CHAR_COUNTER_LABEL,
        },
      },
    });

    // * ACT
    const charCounterLabelEl = await wrapper.find(`span.se-char-label`);
    console.log('charCounterLabelEl', charCounterLabelEl);
    const text = await charCounterLabelEl.text();

    // * ASSERT
    expect(text).toBe(CHAR_COUNTER_LABEL);

    wrapper.unmount();
  });
});
