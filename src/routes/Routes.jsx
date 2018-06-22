import React from 'react'
// BrowserRouter history模式 HashRouter hash模式
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import GetWxCode from '../pages/GetWxCode'
import HomePage from '../pages/HomePage'
import ApplyInfo from '../pages/ApplyInfo'
import SubPage from '../pages/SubPage'
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
					<Route exact path={"/getwxcode"} component={ GetWxCode }/>
					<Route path={"/home"} component={ HomePage }/>
					<Route path={"/apply"} component={ ApplyInfo }/>
					<Route path={"/subhome"} component={ SubPage }/>
					<Route component={ NotFound } />
				</Switch>
            </Router>
		);
	}
}

export default Routes;
