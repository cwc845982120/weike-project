import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { List, Button, Picker, WingBlank, InputItem, WhiteSpace } from 'antd-mobile'
import { setForeverStorage } from '../common/utils'

class ApplyInfo extends Base {
	constructor(props) {
		super(props);
		this.state = {
            userName: '', // 姓名
            userCardCode: '', // 身份证号码
            educationVal: '', // 学历
            marriageVal: '', // 婚姻状况
            contactOneName: '', // 联系人1姓名
            contactOneTel: '', // 联系人1电话
            relationOne: '', // 联系人1关系
            contactTwoName: '', // 联系人2姓名
            contactTwoTel: '', // 联系人2电话
            relationTwo: '', // 联系人2关系
            companyName: '', // 单位名称
            companyAddress: '', // 单位地址
            incomeVal: '' // 收入状况
        };
	}

	componentDidMount() {
        this.setTitle('申请信息填写');
	}

    // 申请接口
    applyAction() {
        this.getResponse('/api/submitUserInfo', {
            appName: this.state.userName, // 姓名
            appIdnumber: this.state.userCardCode, // 身份证号
            appEduLevel: this.state.educationVal[0], // 学历
            appMarrage: this.state.marriageVal[0], // 是否结婚
            emergencycontactname: this.state.contactOneName, // 紧急联系人姓名
            emergencycontactphone: this.state.contactOneTel, // 紧急联系人电话
            emergencycontactrelationship: this.state.relationOne, // 紧急联系人关系
            emergencycontactname2: this.state.contactTwoName, // 紧急2联系人姓名
            emergencycontactphone2: this.state.contactTwoTel, // 紧急2联系人电话
            emergencycontactrelationship2: this.state.relationTwo, // 紧急2联系人关系
            appCompany: this.state.companyName, // 单位名称
            appCompanyAddress: this.state.companyAddress, // 单位地址
            appBusinessScale: this.state.incomeVal[0] // 企业年度营收规模
        }).then(res => {
            if (res.code === 1) {
                setForeverStorage('userInfo', res.data);
                this.props.history.replace('/profileupload');
            } else {
                this.$toast(res.msg);
            }
        }).catch(e => {
            console.log(e.message);
            this.$toast("提交失败");
        })
        // this.props.history.push('/profileupload');
    }

    render() {
        // 学历列表
        const educationList = [{
            value: "硕士以上",
            label: "硕士以上"
        }, {
            value: "本科",
            label: "本科"
        }, {
            value: "大专",
            label: "大专"
        }, {
            value: "高中",
            label: "高中"
        }, {
            value: "初中",
            label: "初中"
        }, {
            value: "小学以下",
            label: "小学以下"
        }];
        // 婚姻状况列表
        const marriageList = [{
            value: "是",
            label: "已婚"
        }, {
            value: "否",
            label: "未婚"
        }];
        // 企业年度营收规模列表
        const incomeList = [{
            value: "小于200万（含）",
            label: "小于200万（含）"
        }, {
            value: "200万-500万（含）",
            label: "200万-500万（含）"
        }, {
            value: "500万-1000万（含）",
            label: "500万-1000万（含）"
        }, {
            value: "1000万-2000万（含）",
            label: "1000万-2000万（含）"
        }, {
            value: "2000万-5000万（含）",
            label: "2000万-5000万（含）"
        }, {
            value: "5000万以上",
            label: "5000万以上"
        }];
      	return (
        	<ApplyContainer>
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
                        onChange={v => this.setState({ contactOneName: v })}
                    >姓名：</InputItem>
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
                    >关系：</InputItem>
                </List>
                <List renderHeader={() => '紧急联系人2'}>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ contactTwoName: v })}
                    >姓名：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ contactTwoTel: v })}
                    >电话：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ relationTwo: v })}
                    >关系：</InputItem>
                </List>
                <WhiteSpace/>
                <List>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ companyName: v })}
                    >单位名称：</InputItem>
                    <InputItem
                        clear
                        placeholder="请输入"
                        moneyKeyboardAlign="right"
                        className="right_input"
                        onChange={v => this.setState({ companyAddress: v })}
                    >单位地址：</InputItem>
                    <Picker 
                        data={ incomeList }
                        title="企业年度营收规模"
                        cols={1}
                        value={this.state.incomeVal}
                        onOk={v => this.setState({ incomeVal: v })}>
                        <List.Item arrow="horizontal">企业年度营收规模：</List.Item>
                    </Picker>
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <Button 
                        className="apply_btn"
                        disabled={
                            !this.state.userName ||
                            !this.state.userCardCode ||
                            !this.state.educationVal ||
                            !this.state.marriageVal ||
                            !this.state.companyName ||
                            !this.state.companyAddress ||
                            !this.state.incomeVal ||
                            !this.state.contactOneName ||
                            !this.state.contactOneTel ||
                            !this.state.relationOne
                        }
                        onClick={this.applyAction.bind(this)}>下一步</Button>
                </WingBlank>
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
    .apply_btn{
        background: #ff7700;
        color: #fff;
    }
`;

export default ApplyInfo;
