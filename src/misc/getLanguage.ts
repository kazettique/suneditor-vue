import { en, ja, zh_cn } from 'suneditor/src/lang';

import zh_tw from '@/lang/zh_tw';
import type { LangType } from '@/types';

const getLanguage = (lang?: LangType) => {
  // if (typeof lang === 'object') {
  //   return lang;
  // } else {
  //   switch (lang) {
  //     case 'zh_tw':
  //   }
  // }
  switch (typeof lang) {
    case 'object':
      return lang;
    case 'string':
      return require(`suneditor/src/lang/${lang}.js`);
    default:
      return undefined;
  }
};

export default getLanguage;
