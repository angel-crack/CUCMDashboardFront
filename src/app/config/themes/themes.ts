import { ThemeUserModel } from "../../core/models/themes-user.models";

export const Themes: ThemeUserModel = {
    'default':  [
        { variableName: '--header-BkgColor', value: '#263238', scope: 'app-root' },
        { variableName: '--main-BkgColor', value: '#bisque', scope: 'app-root' },
        { variableName: '--sideBar-BkgColor', value: '#263238', scope: 'app-root' },
        { variableName: '--root-BkgColor', value: 'rgb(220,219,214)', scope: 'html' },
        { variableName: '--root-txtColor', value: 'black', scope: 'html' }
    ],
    'dark': [
        { variableName: '--header-BkgColor', value: '#444', scope: 'app-root' },
        { variableName: '--main-BkgColor', value: '#555', scope: 'app-root' },
        { variableName: '--sideBar-BkgColor', value: '#666', scope: 'app-root' },
        { variableName: '--root-BkgColor', value: '#333', scope: 'html' }
      ]
}