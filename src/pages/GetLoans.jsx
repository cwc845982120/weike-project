import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button, Slider, List, Picker } from 'antd-mobile'

class GetLoans extends Base {
    constructor() {
        super();
        this.state = {
            percent: 0,
            timeVal: '',
            todoVal: '',
            moneyVal: '1,000'
        }
    }

    componentDidMount() {
        this.setTitle('获取一笔贷款');
    }

    sliderChange(val) {
        let moneyValStr = (~~(val  * 1000)).toFixed(0);
        let moneyFormatStr = moneyValStr.replace(/(\d)(?=(?:\d{3})+$)/g,'$1,');
        this.setState({
            moneyVal: moneyFormatStr
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
            value: 1,
            label: "3个月分期"
        }, {
            value: 2,
            label: "6个月分期"
        }]
        // 贷款用途
        const todoList = [{
            value: 0,
            label: "流动资金周转"
        }, {
            value: 1,
            label: "购置或更新经营设备"
        }, {
            value: 2,
            label: "支付租赁经营场所租金"
        }, {
            value: 3,
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
                            max={30}
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
                                <div className="money">￥30,000</div>
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
                        <Button className="btn" onClick={() => {
                            this.props.history.push('/applyreceived');
                        }}>提交获取贷款</Button>
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
