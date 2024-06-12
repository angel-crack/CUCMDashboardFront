import { ThemeUserModel } from "../../core/models/themes-user.models";

export const Themes: ThemeUserModel = {
    'default':  [
        { variableName: '--header-BkgColor', value: '#55AD9B', scope: 'app-root' },
        { variableName: '--main-BkgColor', value: '#F1F8E8', scope: 'app-root' },
        { variableName: '--sideBar-BkgColor', value: '#95D2B3', scope: 'app-root' },
        { variableName: '--root-BkgColor', value: '#D8EFD3', scope: 'html' }
    ],
    'dark': [
        { variableName: '--header-BkgColor', value: '#444', scope: 'app-root' },
        { variableName: '--main-BkgColor', value: '#555', scope: 'app-root' },
        { variableName: '--sideBar-BkgColor', value: '#666', scope: 'app-root' },
        { variableName: '--root-BkgColor', value: '#333', scope: 'html' }
      ]
}