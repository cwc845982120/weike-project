import React from 'react'
import Base from '../config/Base'
import { getQueryString } from '../common/utils'
import styled from 'styled-components'
import { WhiteSpace, WingBlank } from 'antd-mobile'
import HomeButton from '../components/HomeButton'

class HomePage extends Base {
	constructor(props) {
		super(props);
		this.state = {};
	}

	componentDidMount() {
		this.setTitle('微科');
		// 用户同意授权，获取code
		const code = getQueryString('code');
		console.log(code);
	}

    render() {
      	return (
        	<HomeContainer>
				<img src={require("../static/img/weike_logo.png")} className="logo" alt="logo"/>
				<div className="title">微科技信息服务</div>
				<div className="btns">
					<WingBlank>
						<HomeButton 
							icon={require("../static/img/home_icon.png")}
							activeIcon={require("../static/img/home_icon_active.png")}
							title="我要借款"
							action={ () => {
								// 是否注册 如果注册成功 您已注册成功页 没有注册成功提交注册信息
								this.props.history.push('/apply');
						}}/>
					</WingBlank>
					<WhiteSpace/>
					<WingBlank>
						<HomeButton i
							icon={require("../static/img/wallet_icon.png")}
							activeIcon={require("../static/img/wallet_icon_active.png")}
							title="发起借款"
							action={ () => {
								this.props.history.push('/showlimit');
						}}/>
					</WingBlank>
					<WhiteSpace/>
					<WingBlank>
						<HomeButton 
							icon={require("../static/img/person_icon.png")}
							activeIcon={require("../static/img/person_icon_active.png")}
							title="我的贷款"
							action={ () => {
								this.props.history.push('/borrowsearch');
						}}/>
					</WingBlank>
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
		margin-top: 6rem;
		width: 12rem;
	}
	.title{
		color: #000;
		font-size: 2rem;
		font-weight: 600;
		margin-top: 1rem;
	}
	.btns{
		margin-top: 10rem;
		width: 100%;
	}
`;

export default HomePage;
