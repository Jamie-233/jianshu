import * as constants from './constants';

const defaultState = {
  focused: false,
};

// 纯函数 固定格式的入参和出参
export default function Reducer(state=defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  if(action.type === constants.SEARCH_FOCUS) {
    newState.focused = true;
    return newState;
  }

  if(action.type === constants.SEARCH_BLUR) {
    newState.focused = false;
    return newState;
  }

  return state;
}
