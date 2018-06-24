import React from 'react'
import styled from 'styled-components'
import { Button } from 'antd-mobile'

class VerifyCode extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            status: "invalid", // invalid 无效 clickable 可获取验证码 cooling 倒计时 reSend 重新获取
            disabled: true,
            btnStyle: "btn invalid",
            btnText: "发送验证码",
            timer: null
        }
    }

    // 状态改变时触发
    componentWillReceiveProps(newProps) {
        // invalid 无效 clickable 可获取验证码 cooling 倒计时 reSend 重新获取
        if (newProps.status === "invalid" && !this.state.timer) {
            this.setState({
                disabled: true,
                btnStyle: "btn invalid",
                btnText: "发送验证码"
            });
        } else if (newProps.status === "clickable" && !this.state.timer) {
            this.setState({
                disabled: false,
                btnStyle: "btn can_send",
                btnText: "发送验证码"
            });
        } else if (newProps.status === "cooling") {
            let seconds = 5;
            let timer = setInterval(() => {
                if (seconds > 0) {
                    this.setState({
                        disabled: true,
                        btnStyle: "btn invalid",
                        btnText: `剩余${seconds--}s`
                    });
                } else {
                    clearInterval(this.state.timer);
                    this.setState({
                        status: "reSend",
                        disabled: false,
                        btnStyle: "btn can_send",
                        btnText: "重新获取",
                    });
                }
            }, 1000)
            this.setState({
                timer
            })
        } else if (newProps.status === "reSend") {
            this.setState({
                disabled: false,
                btnStyle: "btn can_send",
                btnText: "重新获取"
            });
        }
    }

    componentWillUnmount() {
        if (this.state.timer) {
            clearInterval(this.state.timer);
        }
    }

    render() {
      	return (
        	<VerifyCodeContainer>
                <input type="tel" placeholder="请输入验证码" maxLength="4" />
                <Button
                    size="small"
                    className={this.state.btnStyle}
                    disabled={this.state.disabled}
                    onClick={this.props.action}
                >{this.state.btnText}
                </Button>
            </VerifyCodeContainer>
      	);
    }
}

// 编写行内样式
const VerifyCodeContainer = styled.div`
    position: relative;
    display: flex;
    height: 44px;
    padding: 0 16px;
    input{
        border: 0;
        font-size: 17px;
        outline: none;
    }
    input::-webkit-input-placeholder{
        color: #bbbbbb;
    }
    .btn{
        position: absolute!important;
        top: 50%;
        right: 16px!important;
        transform: translateY(-50%);
    }
    .invalid{
        background: #F8F8F8;
        color: #A4A4A4;
    }
    .can_send{
        background: #FF7700;
        color: #FFF;
    }
`

export default VerifyCode;
