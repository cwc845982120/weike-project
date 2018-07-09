import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Button, WingBlank, WhiteSpace } from 'antd-mobile'

class FaceCheck extends Base  {

    componentDidMount() {
        this.setTitle('人脸识别');
    }

    toCheckFace() {
        window.location.href = "https://api.megvii.com/faceid/lite/do?token=a5455e86ba14e2edd085420854772b7d"
        
    }

    render() {
        return (
            <FaceUploadContainer>
                <WhiteSpace/>
                <div className="title">可以通过以下方式提高</div>
                <div className="tip">
                    <p>1.正对手机</p>
                    <p>2.保持光线充足和均匀</p>
                    <p>3.摘掉眼镜，并露出耳朵</p>
                    <p>4.纯色背景</p>
                </div>
                <div className="subtitle">点击进入人脸识别界面</div>
                <BtnContainer>
                    <WingBlank>
                        <Button
                            className="recheck"
                            onClick={this.toCheckFace.bind(this)}
                        >刷脸识别</Button>
                    </WingBlank>
                    <WhiteSpace/>
                </BtnContainer>
            </FaceUploadContainer>
        )
    }
}

// 编写行内样式
const FaceUploadContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo{
        width: 7rem;
        height: 7rem;
        margin: 4.5rem 0 1.5rem 0;
    }
    .title{
        width: 100%;
        font-size: 1.8rem;
        margin: 2rem 0 0 0;
        padding-bottom: 2rem;
        text-align: center;
        border-bottom: 1px #EAEAEA solid;
    }
    .subtitle{
        font-size: 1.8rem;
        margin: 10rem 0 0 0;
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

export default FaceCheck;
