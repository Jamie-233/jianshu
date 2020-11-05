import {
  SEARCH_FOCUS,
  SEARCH_ONBlUR,
} from './actions';

const defaultState = {
  focused: false,
};

// 纯函数 有固定格式的入参和出参 不能有副作用
export default function Reducer(state=defaultState, action) {
  const newState = JSON.parse(JSON.stringify(state));

  if(action.type === SEARCH_FOCUS) {
    newState.focused = true;
    return newState;
  }

  if(action.type === SEARCH_ONBlUR) {
    newState.focused = false;
    return newState;
  }

  return state;
}
