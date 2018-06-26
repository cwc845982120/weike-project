import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { wxUtilsInit } from '../common/wxUtils'
import * as wxUtils from '../lib/wx-jssdk';
import { ActionSheet, WhiteSpace, WingBlank, Button, Toast } from 'antd-mobile'

import CertCardUpload from '../components/CertCardUpload'

class ProfileUpload extends Base  {
    constructor() {
        super();
        this.state = {
            fontImg: '',
            backImg: ''
        };
    }

    componentDidMount() {
        this.setTitle('身份认证');
        wxUtilsInit('1529906692', 'GiLwS6KKQF1cOMec', 'ad1d8a7d4bb6fd5e362aaba5d0810c6874cda1af', () => {
			console.log('jssdk初始化完成');
		}, error => {
			console.log(error);
			console.log('jssdk初始化失败');
		});
    }

    preView(imgUrl) {
        wxUtils.previewImage({
            current: imgUrl, // 当前显示图片的http链接
            urls: [imgUrl] // 需要预览的图片http链接列表
        });
    }

    // 正面上传
    fontUpload() {
        wxUtils.chooseImage({
            count: 1, // 默认9
            sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                this.setState({
                    fontImg: res.localIds[0]
                }); 
            }
        });
    }

    // 背面上传
    backUpload() {
        wxUtils.chooseImage({
            count: 1, // 默认9
            sizeType: ['original'], // 可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
            success: res => {
                // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                this.setState({
                    backImg: res.localIds[0]
                });
            }
        });
    }

    submitInfo() {
        Toast.loading("上传中...", 0);
        // 照片上传
        new Promise((resolve, reject) => {
            wxUtils.uploadImage({
                localId: this.state.fontImg,
                isShowProgressTips: 1,
                success: res => {
                    resolve();
                }
            });
        }).then(() => {
            wxUtils.uploadImage({
                localId: this.state.backImg,
                isShowProgressTips: 1,
                success: res => {
                    Toast.hide();
                    // 页面跳转 TODO
                }
            });
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
                        preViewImg={require('../static/img/apply_received.png')}
                        preViewClick={() => {
                            ActionSheet.showActionSheetWithOptions({
                                options: ["预览", "重新上传", "取消"],
                                cancelButtonIndex: 2,
                                maskClosable: true,
                                },  
                                (buttonIndex) => {
                                    if (buttonIndex === 0) {
                                        this.preView(this.state.fontImg);
                                    } else if (buttonIndex === 1) {
                                        this.fontUpload();
                                    }
                            });
                        }}
                        uploadClick={ this.fontUpload.bind(this) }
                    />
                    <WhiteSpace/>
                    <CertCardUpload
                        text="点击拍摄身份证"
                        strongText="国徽面"
                        preViewImg=""
                        preViewClick={() => {
                            ActionSheet.showActionSheetWithOptions({
                                options: ["预览", "重新上传", "取消"],
                                cancelButtonIndex: 2,
                                maskClosable: true,
                                },  
                                (buttonIndex) => {
                                    if (buttonIndex === 0) {
                                        this.preView(this.state.backImg);
                                    } else if (buttonIndex === 1) {
                                        this.backUpload();
                                    }
                            });
                        }}
                        uploadClick={ this.backUpload.bind(this) }
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
