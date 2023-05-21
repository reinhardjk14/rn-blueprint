import {ThemeState} from '_actions/theme';
import {TYPES} from '../actionTypes';

const initialState: ThemeState = {
  theme: 'default',
  darkMode: null,
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: Partial<ThemeState>},
) => {
  switch (type) {
    case TYPES.THEME.CHANGE_THEME:
      if (typeof payload.theme !== 'undefined') {
        state.theme = payload.theme;
      }
      if (typeof payload.darkMode !== 'undefined') {
        state.darkMode = payload.darkMode;
      }
      return {
        ...state,
      };
    case TYPES.THEME.SET_DEFAULT_THEME:
      if (!state.theme) {
        if (typeof payload.theme !== 'undefined') {
          state.theme = payload.theme;
        }
        if (typeof payload.darkMode !== 'undefined') {
          state.darkMode = payload.darkMode;
        }
      }
      return {
        ...state,
      };
    default:
      return state;
  }
};
