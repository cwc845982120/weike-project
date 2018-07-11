import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { List } from 'antd-mobile'
import moment from 'moment'

const Item = List.Item;
const Brief = Item.Brief;

class RepaymentRecordItem extends Base {
    render() {
        const itemList = this.props.data.repayOrderHm;
        let list = itemList.map((item, index) => {
            return (
                <Item extra={"主动还款"} key={index}>
                    还款记录{item.repayMoney} <Brief>{moment(item.repayDate).format("YYYY年MM月DD日")}</Brief>
                </Item>
            )
        })
      	return (
        	<RepaymentRecordItemContainer>
                { list }
            </RepaymentRecordItemContainer>
      	);
    }
}

// 编写行内样式
const RepaymentRecordItemContainer = styled.div`
    padding-bottom: 1rem;
    background: #f4f3f8;
`;

export default RepaymentRecordItem;
