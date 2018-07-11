import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, List } from 'antd-mobile'
import moment from 'moment'

const Item = List.Item;

class BorrowRecordItem extends Base {
    render() {
      	return (
        	<BorrowRecordItemContainer>
                <List>
                    <Item extra={'查看详情'} arrow="horizontal" onClick={this.props.toDetail}>&nbsp;</Item>
                    <Item extra={moment(this.props.data.createTime).format("YYYY年MM月DD日")} className="black_val">提现时间</Item>
                    <Item extra={`每月${this.props.data.repayDate}日`} className="black_val gary_title">每期还款日</Item>
                    <Item extra={this.props.data.period} className="black_val gary_title">期数</Item>
                    <Item extra={`¥${this.props.data.tranAmtReceive || 0}`} className="orange_val gary_title">还款金额</Item>
                    <Item>{this.props.data.settle ? "正常已结清" : (this.props.data.beOverdue ? "正常未结清" : "已逾期")}</Item>
                </List>
                <WhiteSpace/>
            </BorrowRecordItemContainer>
      	);
    }
}

// 编写行内样式
const BorrowRecordItemContainer = styled.div`
    background: #f5f5f9;
    .black_val{
        .am-list-extra{
            color: #000!important;
        }
    }
    .orange_val{
        .am-list-extra{
            color: #FF7700!important;
        }
    }
    .gary_title{
        .am-list-content{
            color: #6D6D6D!important;
        }
    }
    .orange{
        .am-list-content{
            color: #FF7700!important;
        }
    }
`;

export default BorrowRecordItem;
