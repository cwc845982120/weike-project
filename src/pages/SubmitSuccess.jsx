import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'

class SubmitSuccess extends Base {

    componentDidMount() {
        this.setTitle('提交成功');
    }

    render() {
      	return (
        	<ApplySuccessContainer>
                <img src={require('../static/img/success_icon.png')} alt="logo" className="logo"/>
                <div className="title">操作成功</div>
                <div className="tip">
                    <p>您已经成功提交申请信息！</p>
                </div>
            </ApplySuccessContainer>
      	);
    }
}

// 编写行内样式
const ApplySuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo{
        width: 7rem;
        height: 7rem;
        margin: 10rem 0 2.5rem 0;
    }
    .title{
        font-size: 2rem;
    }
    .tip{
        text-align: center;
        color: #888888;
        font-size: 1.4rem;
        margin: 1rem 0;
    }
`;

export default SubmitSuccess;
