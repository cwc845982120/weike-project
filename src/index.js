import React from 'react';
import ReactDOM from 'react-dom';
// 引入redux
import { Provider } from 'react-redux';
// 引入reducer
import store from './store';
import vconsole from 'vconsole';

import Routes from './routes/Routes';
import './static/css/global.css';
import 'antd-mobile/dist/antd-mobile.css';
import registerServiceWorker from './common/registerServiceWorker';

// 前端脚本中配置热更新处理逻辑
if (module.hot) {
	module.hot.accept();
}

// vConsole初始化
new vconsole();

ReactDOM.render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root'));
registerServiceWorker();
