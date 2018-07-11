import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button, Slider, List, Picker, Modal } from 'antd-mobile'
import { getQueryString, getForeverStorage } from '../common/utils'

const alert = Modal.alert;

class GetLoans extends Base {
    constructor() {
        super();
        this.state = {
            percent: 0,
            timeVal: '',
            todoVal: '',
            moneyNum: 1000,
            moneyVal: '1,000',
            canUseLimitNum: 1000,
            canUseLimitStr: '1,000'
        }
    }

    componentDidMount() {
        this.setTitle('获取一笔贷款');
        let canUseLimit = getQueryString('canUseLimit');
        let canUseLimitStr, canUseLimitNum;
        if (canUseLimit) {
            canUseLimitNum = ~~canUseLimit;
            canUseLimitStr = canUseLimit.replace(/(\d)(?=(?:\d{3})+$)/g,'$1,');
        } else {
            canUseLimitNum = 1000;
            canUseLimitStr = '1,000';
        }
        this.setState({
            canUseLimitNum,
            canUseLimitStr
        })
    }

    sliderChange(val) {
        let moneyValStr = (~~(val * 1000)).toFixed(0);
        let moneyFormatStr = moneyValStr;
        this.setState({
            moneyNum: (~~(val * 1000)),
            moneyVal: moneyFormatStr
        })
    }

    getLoans() {
        let uid = getForeverStorage("userInfo") ? getForeverStorage("userInfo").id : "";
        if (!uid) {
            alert('提示', '未检测到您的认证信息，请重新认证', [
                { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                { text: '重新认证', onPress: () => {
                    this.props.history.push('/certificationcenter');
                } }
            ]);
            return;
        }
        if (!this.state.timeVal) {
            this.$toast('请选择一个期限');
            return;
        } else if (!this.state.todoVal) {
            this.$toast('请选择贷款用途');
            return;
        }
        this.getResponse('/api/putForwardApply', {
            uid,
            tranAmt: this.state.moneyNum,
            period: this.state.timeVal,
            purpose: this.state.todoVal
        }).then(res => {
            if (res.code === 1) {
                this.props.history.push('/applyreceived');
            } else {
                this.$toast(res.msg);
            }
        }).catch(e => {
            console.log(e.message);
            this.$toast('获取贷款失败');
        })
    }

    // 跳转合同条款
    toAgreement() {
        this.props.history.push('/seeagreements');
    }

    render() {
        // 贷款期限
        const timeList = [{
            value: 0,
            label: "随还产品"
        }, {
            value: 3,
            label: "3个月分期"
        }, {
            value: 6,
            label: "6个月分期"
        }]
        // 贷款用途
        const todoList = [{
            value: "流动资金周转",
            label: "流动资金周转"
        }, {
            value: "购置或更新经营设备",
            label: "购置或更新经营设备"
        }, {
            value: "支付租赁经营场所租金",
            label: "支付租赁经营场所租金"
        }, {
            value: "商用房装修",
            label: "商用房装修"
        }]
      	return (
        	<GetLoansContainer>
                <div className="header">
                    <div className="logo-wrapper">
                        <img src={require('../static/img/withdrawal.png')} alt="logo" className="logo"/>
                        <div className="tip">拖动滑快选择提取现金额</div>
                    </div>
                    <div className="input-wrapper">
                        <div className="money_show">￥<span className="val">{this.state.moneyVal}</span></div>
                        <div className="tip">以￥1,000为整数</div>
                    </div>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WhiteSpace/>
                    <WingBlank>
                        <Slider
                            style={{ marginLeft: 30, marginRight: 30 }}
                            defaultValue={this.state.percent}
                            min={1}
                            max={this.state.canUseLimitNum / 1000}
                            trackStyle={{
                                backgroundColor: '#f5b723',
                                height: '10px',
                            }}
                            railStyle={{
                                backgroundColor: '#855505',
                                height: '10px',
                            }}
                            handleStyle={{
                                borderColor: '#df9d00',
                                height: '20px',
                                width: '20px',
                                marginLeft: '-10px',
                                marginTop: '-5px',
                                backgroundColor: '#f5a623',
                            }}
                            onChange={this.sliderChange.bind(this)}
                        />
                        <div className="limit">
                            <div className="block left">
                                <div className="money">￥1,000</div>
                            </div>
                            <div className="block right">
                                <div className="money">￥{ this.state.canUseLimitStr }</div>
                            </div>
                        </div>
                    </WingBlank>
                </div>
                <WhiteSpace/>
                <WhiteSpace/>
                <List>
                    <Picker 
                        data={ timeList }
                        title="选择期限"
                        cols={1}
                        value={this.state.timeVal}
                        onOk={v => this.setState({ timeVal: v })}>
                        <List.Item arrow="horizontal">选择一个期限</List.Item>
                    </Picker>
                    <Picker 
                        data={ todoList }
                        title="选择用途"
                        cols={1}
                        value={this.state.todoVal}
                        onOk={v => this.setState({ todoVal: v })}>
                        <List.Item arrow="horizontal">选择贷款用途</List.Item>
                    </Picker>
                </List>
                <div className="footer">
                    <WingBlank>
                        <Button className="btn" onClick={this.getLoans.bind(this)}>提交获取贷款</Button>
                    </WingBlank>
                    <WhiteSpace/>
                    <WingBlank>
                        <div className="agreement">
                            提交代表同意<span className="name" onClick={this.toAgreement.bind(this)}>《相关合同条款》</span>
                        </div>
                    </WingBlank>
                </div>
            </GetLoansContainer>
      	);
    }
}

// 编写行内样式
const GetLoansContainer = styled.div`
    position: relative;
    width: 100%;
    min-height: 100vh;
    .header{
        background: #fff;
        padding: 3rem 0 1rem 0;
        .logo-wrapper{
            background: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            .logo{
                width: 17.3rem;
                height: 4.7rem;
            }
            .tip{
                color: #6D6D6D;
                font-size: 1.4rem;
                margin-top: 0.4rem;
            }
        }
        .input-wrapper{
            position: relative;
            width: calc(100% - 32px);
            margin: 2rem 16px 0 16px;
            border-bottom: 1px #EAEAEA solid;
            font-weight: 600;
            padding-bottom: 1rem;
            .money_show{
                text-align: left;
                font-size: 2rem;
            }
            .val{
                font-size: 4rem;
            }
            .tip{
                position: absolute;
                bottom: 1.5rem;
                right: 0;
                color: #6D6D6D;
                font-size: 1.2rem;
            }
        }
        .am-slider-rail{
            border-radius: 1rem;
        }
        .am-slider-track{
            border-radius: 1rem;
        }
        .limit{
            padding: 0 1rem;
            display: flex;
        }
        .block{
            flex: 1;
        }
        .right{
            text-align: right;
        }
        .money{
            font-weight: 600;
            margin: 3rem 0 1rem 0;
        }
    }
    .footer{
        width: 100%;
        position: absolute;
        bottom: 1.5rem;
        .agreement{
            text-align: right;
            font-size: 1.2rem;
            color: #A4A4A4;
            .name{
                color: #F36A3C;
            }
        }
        .btn{
            background: #ff7700;
            color: #fff;
        }
    }
`;

export default GetLoans;
