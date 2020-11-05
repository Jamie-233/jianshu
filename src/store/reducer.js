// 总记录本 记录所有组件里面的 reducer

import { combineReducers } from 'redux'; // 合并 reducer

// 默认找 index.js 间接引用 reducer 目录结构减少2层
import { reducer as headerReducer } from '../common/header/store';

const reducer = combineReducers({
  header: headerReducer,
})

export default reducer;
