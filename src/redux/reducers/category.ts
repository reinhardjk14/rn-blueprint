import {TYPES} from '../actionTypes';

const initialState = {
  categories: [],
};

export default (
  state = initialState,
  {type, payload}: {type: string; payload: any},
) => {
  switch (type) {
    case TYPES.CATEGORY.SET_CATEGORY:
      return {...state, categories: [...state.categories, ...payload]};

    default:
      return state;
  }
};
