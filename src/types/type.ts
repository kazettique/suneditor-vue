import type { ButtonEnum, LangEnum, PluginDisplayEnum, UploadStateEnum } from './enum';

export type UploadStateType = `${UploadStateEnum}`;

export type LangType = `${LangEnum}`;

export type ButtonType = `${ButtonEnum}`;

export type PluginDisplayType = `${PluginDisplayEnum}`;

export type PluginNameType = string;

export type ButtonListItemType = ButtonType[] | ButtonType | PluginNameType[] | PluginNameType;
