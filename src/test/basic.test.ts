import { mount } from '@vue/test-utils';

import Hello from '../components/Hello.vue';
import SunEditor from '../SunEditor.vue';

test('mount component', async () => {
  // expect(Hello).toBeTruthy();

  // const wrapper = mount(Hello, {
  //   props: {
  //     count: 4,
  //   },
  // });

  const wrapper2 = mount(SunEditor);

  // expect(wrapper.text()).toContain('4 x 2 = 8');
  // expect(wrapper.html()).toMatchSnapshot();

  // await wrapper.get('button').trigger('click');

  // expect(wrapper.text()).toContain('4 x 3 = 12');

  // await wrapper.get('button').trigger('click');

  // expect(wrapper.text()).toContain('4 x 4 = 16');
});
