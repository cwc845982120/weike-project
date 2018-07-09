import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'

import { ActionSheet, WhiteSpace, WingBlank, Button, Toast } from 'antd-mobile'

import CertCardUpload from '../components/CertCardUpload'

class ProfileUpload extends Base  {
    constructor() {
        super();
        this.state = {
            fontImg: '',
            fontImgFile: null,
            backImg: '',
            backImgFile: null,
        };
    }

    componentDidMount() {
        this.setTitle('身份认证');
    }

    // 正面上传
    fontUpload(e) {
        // TODO
        let file = e.target.files[0];
        const reads = new FileReader();
        reads.readAsDataURL(file);
        reads.onload = e => {
            this.setState({
                fontImg: reads.result,
                fontImgFile: file
            })
        };
    }

    // 背面上传
    backUpload(e) {
        // TODO
        let file = e.target.files[0];
        const reads = new FileReader();
        reads.readAsDataURL(file);
        reads.onload = e => {
            this.setState({
                backImg: reads.result,
                backImgFile: file
            })
        };
    }

    submitInfo() {
        Toast.loading("上传中...", 0);
        // 照片上传
        new Promise((resolve, reject) => {
            // TODO
        }).then(() => {
            // TODO
        }).catch(e => {
            Toast.hide();
            console.log(e.message);
            this.showToast('身份信息上传失败');
        })
    }

    // 跳转合同条款
    toAgreement() {
        this.props.history.push('/submitsuccess');
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
                        preViewImg={this.state.fontImg}
                        preViewClick={() => {
                            ActionSheet.showActionSheetWithOptions({
                                options: ["重新上传", "取消"],
                                cancelButtonIndex: 1,
                                maskClosable: true,
                                },  
                                (buttonIndex) => {
                                    if (buttonIndex === 0) {
                                        this.setState({
                                            fontImg: ''
                                        })
                                    }
                            });
                        }}
                        handleImageUpload={ this.fontUpload.bind(this) }
                    />
                    <WhiteSpace/>
                    <CertCardUpload
                        text="点击拍摄身份证"
                        strongText="国徽面"
                        preViewImg={this.state.backImg}
                        preViewClick={() => {
                            ActionSheet.showActionSheetWithOptions({
                                options: ["重新上传", "取消"],
                                cancelButtonIndex: 1,
                                maskClosable: true,
                                },  
                                (buttonIndex) => {
                                    if (buttonIndex === 0) {
                                        this.setState({
                                            backImg: ''
                                        })
                                    }
                            });
                        }}
                        handleImageUpload={ this.backUpload.bind(this) }
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
                            onClick={this.submitInfo.bind(this)}>提交信息</Button>
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
