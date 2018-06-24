import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

class NotFound extends Base {

	componentDidMount() {
        this.setTitle('找不到页面');
    }

	render() {
		return (
			<NotFoundContainer>
                <img src={require('../static/img/fail_icon.png')} alt="icon"/>
                <div className="tip">找不到该页面</div>
				<WhiteSpace/>
				<BtnContainer>
					<WingBlank>
						<Button
							type="primary"
							onClick={ () => {
								this.props.history.replace('/');
						}}>返回首页</Button>
					</WingBlank>
				</BtnContainer>
            </NotFoundContainer>
		);
	}
}

// 编写行内样式
const NotFoundContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 9.3rem;
        height: 9.3rem;
        margin: 8rem 0 2rem 0;
    }
    .tip{
        font-size: 2rem;
    }
`;

const BtnContainer = styled.div`
	margin-top: 6rem;
    width: 100%;
`;
 
export default NotFound;
