import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

class FaceCheckFail extends Base {

    componentDidMount() {
        this.setTitle('验证失败');
    }

    render() {
      	return (
        	<ApplySuccessContainer>
                <img src={require('../static/img/fail_icon.png')} alt="logo" className="logo"/>
                <div className="title">验证失败</div>
                <div className="subtitle">可以通过以下方式提高</div>
                <div className="tip">
                    <p>1.正对手机</p>
                    <p>2.保持光线充足和均匀</p>
                    <p>3.摘掉眼镜，并露出耳朵</p>
                    <p>4.纯色背景</p>
                </div>
                <BtnContainer>
                    <WingBlank>
                        <Button
                            className="recheck"
                            onClick={ () => {
                                this.props.history.push('/facecheck');
                            }}
                        >重新认证</Button>
                    </WingBlank>
                    <WhiteSpace/>
                    <WingBlank>
                        <Button
                            className="back"
                            onClick={ () => {
                                this.props.history.push('/certificationcenter');
                            }}
                        >返回</Button>
                    </WingBlank>
                </BtnContainer>
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
        margin: 4.5rem 0 1.5rem 0;
    }
    .title{
        font-size: 2rem;
    }
    .subtitle{
        font-size: 1.8rem;
        margin: 3rem 0 0 0;
    }
    .tip{
        position: relative;
        left: -1rem;
        text-align: left;
        color: #888888;
        font-size: 1.4rem;
        margin: 1rem 0;
    }
`;

const BtnContainer = styled.div`
    margin-top: 3rem;
    width: 100%;
    .recheck{
        color: #fff;
        background: #ff7700;
    }
    .back{
        background: #f8f8f8;
    }
`;

export default FaceCheckFail;
