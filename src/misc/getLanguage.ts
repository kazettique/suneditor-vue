import { ckb, da, de, en, es, fr, he, it, ja, ko, lv, nl, pl, pt_br, ro, ru, se, ua, zh_cn } from 'suneditor/src/lang';
import type { Lang } from 'suneditor/src/lang/Lang';

import zh_tw from '../lang/zh_tw';
import type { LangType } from '../types';

const getLanguage = (lang: LangType): Lang => {
  switch (lang) {
    case 'ckb':
      return ckb;
    case 'da':
      return da;
    case 'de':
      return de;
    case 'en':
      return en;
    case 'es':
      return es;
    case 'fr':
      return fr;
    case 'he':
      return he;
    case 'it':
      return it;
    case 'ja':
      return ja;
    case 'ko':
      return ko;
    case 'lv':
      return lv;
    case 'nl':
      return nl;
    case 'pl':
      return pl;
    case 'pt_br':
      return pt_br;
    case 'ro':
      return ro;
    case 'ru':
      return ru;
    case 'se':
      return se;
    case 'ua':
      return ua;
    case 'zh_cn':
      return zh_cn;

    case 'zh_tw':
      return zh_tw;
    default:
      return en;
  }
};

export default getLanguage;
