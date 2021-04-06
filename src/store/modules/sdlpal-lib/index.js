import { deepCopy } from '../../../util/common';
import { type } from '../../type';

export const initialStateSdlpalLib = {
  version: '0.1'
};

export function sdlpalLibReducer(state = initialStateSdlpalLib, action) {
  switch (action.type) {
    case type.CHANGE_THEME: {
      const item = action.item;
      return {
        ...state,
        selected: item
      };
    }
    default: {
      return state;
    }
  }
}
