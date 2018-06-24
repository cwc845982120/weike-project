import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button } from 'antd-mobile'

import CertCardUpload from '../components/CertCardUpload'

class ProfileUpload extends Base  {
    constructor() {
        super();
        this.state = {
            fontImg: '',
            backImg: ''
        }
    }

    componentDidMount() {
        this.setTitle('身份认证');
    }

    // 跳转合同条款
    toAgreement() {
        // TODO
    }

    render() {
        return (
            <ProfileUploadContainer>
                <WhiteSpace/>
                <ProfileUploadContent>
                    <div className="header">
                        <img src={require('../static/img/tip_icon.png')} alt="logo"/>
                        <span>身份信息仅用于核实身份，避免您的身份被盗用。</span>
                    </div>
                    <div className="title">1.请您拍摄身份证并上传</div>
                    <CertCardUpload
                        text="点击拍摄身份证"
                        strongText="姓名面"
                        preViewImg={require('../static/img/apply_received.png')}
                        preViewClick={() => {
                            console.log('点击预览图操作');
                        }}
                        uploadClick={() => {
                            console.log('点击上传照片操作');
                        }}
                    />
                    <WhiteSpace/>
                    <CertCardUpload
                        text="点击拍摄身份证"
                        strongText="国徽面"
                        preViewImg=""
                        preViewClick={() => {
                            console.log('点击预览图操作');
                        }}
                        uploadClick={() => {
                            console.log('点击上传照片操作');
                        }}
                    />
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <div className="text">请确保边角完整，身份证号清晰，亮度均匀。</div>
                </ProfileUploadContent>
                <WhiteSpace/>
                <WhiteSpace/>
                <div className="footer">
                    <WingBlank>
                        <Button 
                            className="active"
                            disabled={!this.state.fontImg || !this.state.backImg}
                            onClick={() => {
                                // 跳转至页面操作成功
                                this.props.history.push('/submitsuccess');
                        }}>提交信息</Button>
                    </WingBlank>
                    <WhiteSpace/>
                    <WingBlank>
                        <div className="agreement">
                            提交代表同意<span className="name" onClick={this.toAgreement.bind(this)}>《相关合同条款》</span>
                        </div>
                    </WingBlank>
                </div>
            </ProfileUploadContainer>
        )
    }
}

// 编写行内样式
const ProfileUploadContainer = styled.div`
    .footer{
        width: 100%;
        .agreement{
            text-align: right;
            font-size: 1.2rem;
            color: #A4A4A4;
            .name{
                color: #F36A3C;
            }
        }
        .active{
            background: #ff7700;
            color: #fff;
        }
    }
`;

const ProfileUploadContent = styled.div`
    background: #fff;
    padding: 0 1.6rem 5rem 1.6rem;
    .header{
        height: 3.5rem;
        position: relative;
        img{
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            width: 1.4rem;
            height: 1.5rem;
        }
        span{
            font-size: 1.2rem;
            line-height: 3.5rem;
            color: #888888;
            margin-left: 2rem;
        }
    }
    .title{
        font-size: 1.4rem;
        margin: 0 0 1rem 0;
    }
    .text{
        text-align: center;
        font-size: 1.2rem;
        color: #A4A4A4;
    }
`;

export default ProfileUpload;
