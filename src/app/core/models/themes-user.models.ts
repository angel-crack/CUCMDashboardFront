import { ThemeModel } from "./themes.models";

export interface ThemeUserModel {
    [themeName: string]: ThemeModel[];
  }