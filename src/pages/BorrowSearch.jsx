import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Tabs, WhiteSpace, List, Button } from 'antd-mobile'
import moment from 'moment'
import NoResult from '../components/NoResult.jsx'
import RepaymentRecordItem from '../components/RepaymentRecordItem'
import { getForeverStorage, getQueryString } from '../common/utils'
import { Modal } from 'antd-mobile'

const alert = Modal.alert;
const Item = List.Item;

class BorrowSearch extends Base {
    constructor() {
        super();
        this.state = {
            repaymentRecordArr: [],
            repaymentDetail: {}
        };
    }

    componentDidMount() {
        this.setTitle('借还查询');
        this.renderRepaymentRecord();
    }

    repay() {
        this.props.history.push(`/repayonce?id=${getQueryString('id')}`);
    }

    toDetail(id) {
        this.props.history.push(`/repaymentdetail?id=${id}`);
    }

    renderRepayDetail() {
        this.getResponse('/api/getLoanRecordDetails', {
            id: getQueryString('id')
        }).then(res => {
            if (res.code === 1) {
                this.setState({
                    repaymentDetail: res.data
                })
            } else {
                this.$toast(res.msg);
            }
        }).catch(e => {
            console.log(e.message);
            this.$toast("查询借款详情失败");
        })
    }

    renderBorrowRecord() {
        return (
            <div>
                <List>
                    <Item extra={this.state.repaymentDetail.purpose}>交易类型</Item>
                    <Item extra={this.state.repaymentDetail.contractId}>合同号</Item>
                    <div className="btn_wrapper">
                        <Button type="primary" inline size="small" style={{ background: '#ff7700' }} onClick={this.repay.bind(this)}>立即还款</Button>
                    </div>
                </List>
                <WhiteSpace/>
                <List>
                    <Item extra={this.state.repaymentDetail.isOk ? "已结清" : "待还款"}>状态</Item>
                    <Item extra={this.state.repaymentDetail.appName}>申请人</Item>
                    <Item extra={moment(this.state.repaymentDetail.createTime).format("YYYY年MM月DD日")}>申请日期</Item>
                    <Item extra={`${this.state.repaymentDetail.tranAmt || 0}元`}>申请金额</Item>
                    <Item extra={`${this.state.repaymentDetail.tranAmtSuccess || 0}元`}>实际放贷金额</Item>
                    <Item extra={`${this.state.repaymentDetail.tranAmtReceive || 0}元`}>实际到账金额</Item>
                    <Item extra={`${this.state.repaymentDetail.dhmoney || 0}元`}>剩余还款金额</Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item>恢复正常金额</Item>
                    <Item extra={this.state.repaymentDetail.period}>总分期数</Item>
                    <Item extra={this.state.repaymentDetail.periodCurrent}>本期期数</Item>
                    <Item extra={moment(this.state.repaymentDetail.shouldRepayDate).format("YYYY年MM月DD日")}>到账还款日</Item>
                    <Item extra={this.state.repaymentDetail.tranBankAccount}>签约账户</Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item extra={`${this.state.repaymentDetail.repayMoney || 0}元`}>本期已还金额</Item>
                    <Item extra={`${this.state.repaymentDetail.remainderMoney || 0}元`}>本期待还金额</Item>
                    {/** <div className="tips">包含本金1388.99元，利息60元（红包已抵扣60/期）</div> */}
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
            </div>
        )
    }

    renderRepaymentRecord() {
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
        this.getResponse('/api/getRepaymentList', {
            uid
        }).then(res => {
            if (res.code === 1) {
                this.setState({
                    repaymentRecordArr: res.data
                })
                // 获取详情信息
                this.renderRepayDetail();
            } else {
                this.$toast(res.msg);
            }
        }).catch(e => {
            console.log(e.message);
            this.$toast("获取贷款信息失败");
        })
    }

    render() {
        const tabs = [
            { title: '借款明细' },
            { title: '还款记录' }
        ];
        let repaymentRecordList;
        if (this.state.repaymentRecordArr.length) {
            repaymentRecordList = this.state.repaymentRecordArr.map(item => {
                return (
                    <RepaymentRecordItem data={item} key={item.id}/>
                )
            })
        } else {
            repaymentRecordList = (<NoResult/>);
        }
      	return (
        	<BorrowSearchContainer>
                <Tabs tabs={tabs}
                    initialPage={0}
                    tabBarUnderlineStyle={tabBarLineStyle}
                    tabBarActiveTextColor="#FF7700"
                    tabBarInactiveTextColor='#C8C8C8'
                    >
                    {/** 借款记录 */}
                    <BorrowRecord>
                        {this.renderBorrowRecord()}
                    </BorrowRecord>
                    {/** 还款记录 */}
                    <RepaymentRecord>
                        {repaymentRecordList}
                    </RepaymentRecord>
                </Tabs>
            </BorrowSearchContainer>
      	);
    }
}

// 编写行内样式
const BorrowSearchContainer = styled.div`
    min-height: 100vh;
    .am-pull-to-refresh-content-wrapper{
        height: 100%;
    }
    .am-list-body::after{
        background: none!important;
    }
    .btn_wrapper{
        padding: 1rem 15px;
        overflow: hidden;
        .am-button{
            float: right;
        }
    }
    .tips{
        color: #4A4A4A;
        font-size: 1.2rem;
        padding: 1rem 15px;
    }
`;

const BorrowRecord = styled.div`
    display: flex;
    flex-direction: column;
`;

const RepaymentRecord = styled.div`
    display: flex;
    flex-direction: column;
`;

const tabBarLineStyle = {
    border: '1px #ff7700 solid'
}

export default BorrowSearch;
