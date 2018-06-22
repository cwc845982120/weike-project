import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { List, Button, Picker,WingBlank ,InputItem, WhiteSpace } from 'antd-mobile';

class ApplyInfo extends Base {
	constructor(props) {
		super(props);
		this.state = {
            phoneNum: '', // 手机号
            verifyCode: '', // 验证码
            userName: '', // 姓名
            userCardCode: '', // 身份证号码
            educationVal: '', // 学历
            marriageVal: '', // 婚姻状况
            contactOneTel: '', // 联系人1电话
            relationOne: '', // 联系人1关系
            contactTwoTel: '', // 联系人2电话
            relationTwo: '', // 联系人2关系
            companyName: '', // 单位名称
            companyAddress: '', // 单位地址
            incomeVal: '', // 收入状况
            startTimeVal: '' // 企业成立时间
        };
	}

	componentDidMount() {
        this.setTitle('申请信息填写');
	}

    render() {
        // 学历列表
        const educationList = [{
            value: 0,
            label: "硕士以上"
        }, {
            value: 1,
            label: "本科"
        }, {
            value: 2,
            label: "大专"
        }, {
            value: 3,
            label: "高中"
        }, {
            value: 4,
            label: "初中"
        }, {
            value: 5,
            label: "小学以下"
        }];
        // 婚姻状况列表
        const marriageList = [{
            value: 0,
            label: "已婚"
        }, {
            value: 1,
            label: "未婚"
        }];
        // 企业年度营收规模列表
        const incomeList = [{
            value: 0,
            label: "小于200万（含）"
        }, {
            value: 1,
            label: "200万-500万（含）"
        }, {
            value: 2,
            label: "500万-1000万（含）"
        }, {
            value: 3,
            label: "1000万-2000万（含）"
        }, {
            value: 4,
            label: "2000万-5000万（含）"
        }, {
            value: 5,
            label: "5000万以上"
        }];
        // 企业成立时间
        const startTimeList = [{
            value: 0,
            label: "15年及以上"
        }, {
            value: 1,
            label: "10年-15年"
        }, {
            value: 2,
            label: "5年-10年"
        }, {
            value: 3,
            label: "3年-5年"
        }, {
            value: 4,
            label: "3年以内"
        }];
      	return (
        	<ApplyContainer>
                <WhiteSpace/>
                <List>
                    <InputItem
                        clear
                        placeholder="输入手机号"
                        type="phone"
                        onChange={v => this.setState({ phoneNum: v })}
                    ></InputItem>
                    <InputItem
                        clear
                        placeholder="请填写验证码"
                        maxLength={4}
                        type="tel"
                        onChange={v => this.setState({ verifyCode: v })}
                    ></InputItem>
                </List>
                <WhiteSpace/>
                <List>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        maxLength={10}
                        onChange={v => this.setState({ userName: v })}
                        >姓名：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        maxLength={18}
                        onChange={v => this.setState({ userCardCode: v })}
                        >身份证号：</InputItem>
                    <Picker 
                        data={ educationList }
                        title="选择学历"
                        cols={1}
                        value={this.state.educationVal}
                        onOk={v => this.setState({ educationVal: v })}
                        onChange={v => this.setState({ userName: v })}
                        ><List.Item arrow="horizontal">选择学历</List.Item>
                    </Picker>
                    <Picker 
                        data={ marriageList }
                        title="婚姻状况"
                        cols={1}
                        value={this.state.marriageVal}
                        onOk={v => this.setState({ marriageVal: v })}
                        ><List.Item arrow="horizontal">婚姻状况</List.Item>
                    </Picker>
                </List>
                <List renderHeader={() => '紧急联系人1'}>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ contactOneTel: v })}
                    >电话：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ relationOne: v })}
                    >电弧：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ contactTwoTel: v })}
                    >关系：</InputItem>
                </List>
                <List renderHeader={() => '紧急联系人2'}>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ relationTwo: v })}
                    >电话：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ companyName: v })}
                    >电弧：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ companyAddress: v })}
                    >关系：</InputItem>
                </List>
                <WhiteSpace/>
                <List>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ userName: v })}
                    >单位名称：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ userName: v })}
                    >单位地址：</InputItem>
                    <Picker 
                        data={ incomeList }
                        title="企业年度营收规模"
                        cols={1}
                        value={this.state.incomeVal}
                        onOk={v => this.setState({ incomeVal: v })}>
                        <List.Item arrow="horizontal">企业年度营收规模：</List.Item>
                    </Picker>
                    <Picker 
                        data={ startTimeList }
                        title="企业成立时间"
                        cols={1}
                        value={this.state.startTimeVal}
                        onOk={v => this.setState({ startTimeVal: v })}>
                        <List.Item arrow="horizontal">企业成立时间：</List.Item>
                    </Picker>
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank><Button>下一步</Button></WingBlank>
                <WhiteSpace/>
                <WhiteSpace/>
			</ApplyContainer>
      	);
    }
}

// 编写行内样式
const ApplyContainer = styled.div`
    .right_input{
        input{
            text-align: right;
        }
    }
`;

export default ApplyInfo;
