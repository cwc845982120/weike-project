import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { Tabs, ListView } from 'antd-mobile'

import NoResult from '../components/NoResult.jsx'
import BorrowRecordItem from '../components/BorrowRecordItem'
import RepaymentRecordItem from '../components/RepaymentRecordItem'

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
            borrowRecordArr: [],
            repaymentRecordArr: [],
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

    loadMore(event) {
        if (this.state.isLoading && !this.state.hasMore) {
            return;
        }
        console.log('loadMore');
    }

    renderBorrowRecord() {
        if (this.state.borrowRecordArr.length) {
            return (
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.BorrowRecordList}
                    renderFooter={() => (
                        <div style={{ padding: 5, textAlign: 'center' }}>
                            {this.state.isLoading ? '加载中...' : '没有更多数据啦~~~'}
                        </div>
                    )}
                    renderRow={() => <BorrowRecordItem/>}
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
                    renderRow={() => <RepaymentRecordItem />}
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
            { title: '借款记录' },
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
