import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, List } from 'antd-mobile'

const Item = List.Item;

class BorrowRecordItem extends Base {
    render() {
      	return (
        	<BorrowRecordItemContainer>
                <List>
                    <Item extra={'2018年5月8日'} className="black_val">提现时间</Item>
                    <Item extra={'每月21日'} className="black_val gary_title">每期还款日</Item>
                    <Item extra={'3'} className="black_val gary_title">期数</Item>
                    <Item extra={'¥1000'} className="orange_val gary_title">还款金额</Item>
                    <Item className="orange">正常未结清</Item>
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
