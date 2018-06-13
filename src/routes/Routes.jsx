import React from 'react'
// BrowserRouter history模式 HashRouter hash模式
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import NotFound from '../pages/NotFound'

// 如果你的Home，Topics， Jobs是互斥的，那还要加上Switch
// 这里指定exact意思是精确匹配，为了给其他组件一个机会获取到url改变
class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					{ /** 默认跳转home页 */ }
					<Route exact path="/" render={() => (<Redirect to="/home"/>)} />
					<Route path={"/home"} component={ HomePage }/>
					<Route component={ NotFound } />
				</Switch>
            </Router>
		);
	}
}

export default Routes;
