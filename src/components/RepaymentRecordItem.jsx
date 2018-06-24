import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { List } from 'antd-mobile'

const Item = List.Item;
const Brief = Item.Brief;

class RepaymentRecordItem extends Base {
    render() {
      	return (
        	<RepaymentRecordItemContainer>
                <Item 
                    arrow="horizontal" 
                    onClick={() => {}}
                    extra="自动还款"
                    >
                    还款记录300.00 <Brief>2018年6月10日  第2-1/6期</Brief>
                </Item>
                <Item 
                    arrow="horizontal" 
                    onClick={() => {}}
                    extra="自动还款"
                    >
                    还款记录300.00 <Brief>2018年6月10日  第2-1/6期</Brief>
                </Item>
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
