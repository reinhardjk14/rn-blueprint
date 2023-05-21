import themes from '_theme/themes';
import {TYPES} from '../actionTypes';

export const changeTheme = ({theme, darkMode}: ThemePayload) => ({
  type: TYPES.THEME.CHANGE_THEME,
  payload: {
    theme,
    darkMode,
  },
});

export const setDefaultTheme = ({theme, darkMode}: ThemePayload) => ({
  type: TYPES.THEME.SET_DEFAULT_THEME,
  payload: {
    theme,
    darkMode,
  },
});

type PropsWithoutDark<T> = Omit<T, DarkProps<T>>;

type DarkProps<T> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  [K in keyof T]: K extends `${infer Prefix}_dark` ? K : never;
}[keyof T];

export type ThemeState = {
  theme: 'default' | keyof PropsWithoutDark<typeof themes>;
  darkMode: boolean | null;
};

type ThemePayload = {
  theme: 'default' | keyof PropsWithoutDark<typeof themes>;
  darkMode: boolean | null;
};
