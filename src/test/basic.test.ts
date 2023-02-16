import { mount } from '@vue/test-utils';

import SunEditor from '../SunEditor.vue';

test('mount component', async () => {
  expect(SunEditor).toBeTruthy();

  const wrapper = mount(SunEditor, {
    props: {
      isTestingMode: true,
    },
  });

  // expect(wrapper.text()).toContain('4 x 2 = 8');
  // expect(wrapper.html()).toMatchSnapshot();

  // await wrapper.get('button').trigger('click');

  // expect(wrapper.text()).toContain('4 x 3 = 12');

  // await wrapper.get('button').trigger('click');

  // expect(wrapper.text()).toContain('4 x 4 = 16');
});
