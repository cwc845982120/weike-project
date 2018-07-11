import React from 'react'
// BrowserRouter history模式 HashRouter hash模式
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

import HomePage from '../pages/HomePage'
import ApplyInfo from '../pages/ApplyInfo'
import ApplySuccess from '../pages/ApplySuccess'
import CertificationCenter from '../pages/CertificationCenter'
import ShowLimit from '../pages/ShowLimit'
import GetLoans from '../pages/GetLoans'
import BorrowSearch from '../pages/BorrowSearch'
import SeeAgreements from '../pages/SeeAgreements'
import SubmitSuccess from '../pages/SubmitSuccess'
import FaceSubmitSuccess from '../pages/FaceSubmitSuccess'
import FaceCheckFail from '../pages/FaceCheckFail'
import FaceCheck from '../pages/FaceCheck'
import ProfileUpload from '../pages/ProfileUpload'
import MyLoan from '../pages/MyLoan'
import RepayOnce from '../pages/RepayOnce'
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
					{ /** 首页 */ }
					<Route path={"/home"} component={ HomePage }/>
					{ /** 认证中心页 */ }
					<Route path={"/certificationcenter"} component={ CertificationCenter }/>
					{ /** 申请信息填写页 */ }
					<Route path={"/apply"} component={ ApplyInfo }/>
					{ /** 申请已收到页 */ }
					<Route path={"/applyreceived"} component={ ApplySuccess }/>
					{ /** 额度查看页 */ }
					<Route path={"/showlimit"} component={ ShowLimit }/>
					{ /** 查看合同页 */ }
					<Route path={"/seeagreements"} component={ SeeAgreements }/>
					{ /** 借还查询页 */ }
					<Route path={"/borrowsearch"} component={ BorrowSearch }/>
					{ /** 获取贷款页 */ }
					<Route path={"/getloans"} component={ GetLoans }/>
					{ /** 身份信息提交成功页 */ }
					<Route path={"/submitsuccess"} component={ SubmitSuccess }/>
					{ /** 人脸提交成功页 */ }
					<Route path={"/facesubmitsuccess"} component={ FaceSubmitSuccess }/>
					{ /** 人脸验证失败页 */ }
					<Route path={"/facecheckfail"} component={ FaceCheckFail }/>
					{ /** 人脸上传页 */ }
					<Route path={"/facecheck"} component={ FaceCheck }/>
					{ /** 身份证上传页 */ }
					<Route path={"/profileupload"} component={ ProfileUpload }/>
					{ /** 我的贷款页 */ }
					<Route path={"/myloan"} component={ MyLoan }/>
					{ /** 立即还款页 */ }
					<Route path={"/repayonce"} component={ RepayOnce }/>
					{ /** 404页 */ }
					<Route component={ NotFound } />
				</Switch>
            </Router>
		);
	}
}

export default Routes;
