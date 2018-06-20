// store
import reducers from './state';
// 引入redux
import { createStore, applyMiddleware } from 'redux';
// 引入redux日志系统中间件
import { createLogger } from 'redux-logger';

const store = createStore(reducers, applyMiddleware(createLogger()));

// 配置store热更新
if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./state', () => {
      	const nextRootReducer = require('./state/index');
      	store.replaceReducer(nextRootReducer);
    });
}

export default store;
