import type {
  AlignItemsEnum,
  ButtonEnum,
  CharCounterEnum,
  EditorModeEnum,
  LangEnum,
  PluginDisplayEnum,
  PopupDisplayEnum,
  UploadStateEnum,
} from './enum';

export type UploadStateType = `${UploadStateEnum}`;

export type LangType = `${LangEnum}`;

export type ButtonType = `${ButtonEnum}`;

export type PluginDisplayType = `${PluginDisplayEnum}`;

export type EditorModeType = `${EditorModeEnum}`;

export type PopupDisplayType = `${PopupDisplayEnum}`;

export type CharCounterType = `${CharCounterEnum}`;

export type AlignItemsType = `${AlignItemsEnum}`;

export type PluginNameType = string;

export type ButtonListItemType = ButtonType[] | ButtonType | PluginNameType[] | PluginNameType;
