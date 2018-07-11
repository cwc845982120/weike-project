import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Button, WingBlank } from 'antd-mobile'

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
                    <p>人脸验证成功！</p>
                </div>
                <BtnContainer>
                    <WingBlank>
                        <Button 
                            className="btn"
                            onClick={() => {
                                this.props.history.push('/home');
                            }}
                            >回到首页</Button>
                    </WingBlank>
                </BtnContainer>
            </ApplySuccessContainer>
      	);
    }
}

// 编写行内样式
const ApplySuccessContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
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

const BtnContainer = styled.div`
    position: absolute;
    bottom: 12rem;
    width: 100%;
    .btn{
        color: #fff;
        background: #FF7700;
    }
`;

export default SubmitSuccess;
