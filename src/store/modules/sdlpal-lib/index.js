import { deepCopy } from '../../../util/common';
import { type } from '../../type';

export const initialStateSdlpalLib = {
  version: '0.1',
  control_width: 333,
  toy_width: 0
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
    case type.FOLD_MENU: {
      const control_width = action.item;
      return {
        ...state,
        control_width: control_width
      };
    }
    default: {
      return state;
    }
  }
}
