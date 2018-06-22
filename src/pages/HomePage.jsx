import React from 'react'
import Base from '../config/Base'
import { getQueryString } from '../common/utils'
import { wxUtilsInit } from '../common/wxUtils'
import styled from 'styled-components'
import { WhiteSpace, WingBlank } from 'antd-mobile'
import HomeBotton from '../components/HomeButton'

class HomePage extends Base {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setTitle('微科信息服务');
		// 用户同意授权，获取code
		const code = getQueryString('code');
		console.log(code);
		// TODO 利用code换取用户数据
		wxUtilsInit('', '', '', () => {
			console.log('jssdk初始化完成');
		}, error => {
			console.log(error);
			console.log('jssdk初始化失败');
		});
	}

    render() {
      	return (
        	<HomeContainer>
				<img src={require("../static/img/weike_logo.png")} className="logo" alt="logo"/>
				<div className="title">微科技信息服务</div>
				<div className="btns">
					<WingBlank><HomeBotton icon={require("../static/img/home_icon.png")} title="我要借款" action={ () => {
						this.props.history.push('/apply');
					}}/></WingBlank>
					<WhiteSpace/>
					<WingBlank><HomeBotton icon={require("../static/img/wallet_icon.png")} title="发起借款"action={ () => {
						// TODO
					}}/></WingBlank>
					<WhiteSpace/>
					<WingBlank><HomeBotton icon={require("../static/img/person_icon.png")} title="我的贷款"action={ () => {
						// TODO
					}}/></WingBlank>
				</div>
			</HomeContainer>
      	);
    }
}

// 编写行内样式
const HomeContainer = styled.div`
	position: relative;
  	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 100vh;
	background: #f7f7f7;
	width: 100%;
	padding: 0 16px;
	box-sizing: border-box;
	.logo{
		margin-top: 8rem;
		width: 14.3rem;
	}
	.title{
		color: #000;
		font-size: 2rem;
		font-weight: 600;
		margin-top: 0.5rem;
	}
	.btns{
		position: absolute;
		width: 100%;
		bottom: 8rem;
	}
`;

export default HomePage;
