import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Tabs, ListView, WhiteSpace, List, Button } from 'antd-mobile'

import NoResult from '../components/NoResult.jsx'
import RepaymentRecordItem from '../components/RepaymentRecordItem'

const Item = List.Item;

class BorrowSearch extends Base {
    constructor() {
        super();
        const BorrowRecordList = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        const RepaymentRecordList = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        });
        this.state = {
            refreshing: true,
            down: true,
            borrowRecordArr: [{}],
            repaymentRecordArr: [{}],
            BorrowRecordList,
            RepaymentRecordList,
            isLoading: true,
            hasMore: true,
            height: 0,
            currentPage: 1,
            pageSize: 5
        };
    }

    componentDidMount() {
        this.setTitle('借还查询');
        this.setState({
            height: (document.body.scrollHeight - 43.5),
            BorrowRecordList: this.state.BorrowRecordList.cloneWithRows(this.state.borrowRecordArr),
            RepaymentRecordList: this.state.RepaymentRecordList.cloneWithRows(this.state.repaymentRecordArr),
            isLoading: false
        });
    }

    repay() {
        this.props.history.push('repayonce');
    }

    loadMore(event) {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('loadMore');
    }

    toDetail(id) {
        this.props.history.push(`/repaymentdetail?id=${id}`);
    }

    renderBorrowRecord() {
        return (
            <div>
                <List>
                    <Item extra={'兴业消费-小鲨消费'}>交易类型</Item>
                    <Item extra={'yx1237777'}>合同号</Item>
                    <div className="btn_wrapper">
                        <Button type="primary" inline size="small" style={{ background: '#ff7700' }} onClick={this.repay.bind(this)}>立即还款</Button>
                    </div>
                </List>
                <WhiteSpace/>
                <List>
                    <Item extra={'兴业消费-小鲨消费'}>状态</Item>
                    <Item extra={'兴业消费-小鲨消费'}>申请人</Item>
                    <Item extra={'兴业消费-小鲨消费'}>申请日期</Item>
                    <Item extra={'兴业消费-小鲨消费'}>申请金额</Item>
                    <Item extra={'兴业消费-小鲨消费'}>实际放贷金额</Item>
                    <Item extra={'兴业消费-小鲨消费'}>实际到账金额</Item>
                    <Item extra={'兴业消费-小鲨消费'}>剩余还款金额</Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item>恢复正常金额</Item>
                    <Item extra={'兴业消费-小鲨消费'}>总分期数</Item>
                    <Item extra={'兴业消费-小鲨消费'}>本期期数</Item>
                    <Item extra={'兴业消费-小鲨消费'}>到账还款日</Item>
                    <Item extra={'兴业消费-小鲨消费'}>签约账户</Item>
                </List>
                <WhiteSpace/>
                <List>
                    <Item extra={'兴业消费-小鲨消费'}>本期已还金额</Item>
                    <Item extra={'兴业消费-小鲨消费'}>本期待还金额</Item>
                    <div className="tip">包含本金1388.99元，利息60元（红包已抵扣60/期）</div>
                </List>
                <WhiteSpace/>
                <WhiteSpace/>
            </div>
        )
    }

    renderRepaymentRecord() {
        if (this.state.repaymentRecordArr.length) {
            return (
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.RepaymentRecordList}
                    renderFooter={() => (
                        <div style={{ padding: 5, textAlign: 'center' }}>
                            {this.state.isLoading ? '加载中...' : '没有更多数据啦~~~'}
                        </div>
                    )}
                    renderRow={(item) => <RepaymentRecordItem
                        data={{id: 1}}
                        action={this.toDetail.bind(this, 1)}
                    />}
                    style={{
                        height: this.state.height,
                        overflow: 'auto',
                    }}
                    pageSize={this.state.pageSize}
                    scrollRenderAheadDistance={500}
                    onEndReached={this.loadMore.bind(this)}
                    onEndReachedThreshold={10}
                />
            )
        }
        return <NoResult/>
    }

    render() {
        const tabs = [
            { title: '借款明细' },
            { title: '还款记录' }
        ];
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
                        {this.renderRepaymentRecord()}
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
    .tip{
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
