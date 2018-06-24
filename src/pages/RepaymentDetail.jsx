import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, List } from 'antd-mobile'

import CellText from '../components/CellText'

const Item = List.Item;

class RepaymentDetail extends Base {

    componentDidMount() {
        this.setTitle('借还查询');
    }

    render() {
      	return (
        	<RepaymentDetailContainer>
                <div className="header">
                    <div className="bank_info">
                        <img src={require('../static/img/bank_eg.png')} alt="icon" className="icon"/>
                        招商银行（尾号0988）
                    </div>
                    <div className="money_info">
                        <p className="subtitle">
                            <span>还款金额</span>
                            <span className="auto_repayment">自动还款</span>
                        </p>
                        <p className="val">300.00</p>
                    </div>
                </div>
                <WhiteSpace/>
                <Item extra={'2018年5月10日'} className="black_val gary_title">还款日期</Item>
                <Item extra={<CellText text="建设银行储蓄卡(尾号8800)" icon={require('../static/img/bank_eg.png')}/>} className="black_val gary_title more_val">扣款银行</Item>
                <Item extra={'1000.00'} className="black_val gary_title">借款金额</Item>
                <Item extra={'分12期'} className="black_val gary_title">分期信息</Item>
                <Item extra={'97.91'} className="black_val gary_title">每期还款</Item>
                <Item extra={'20.00'} className="black_val gary_title">本金</Item>
                <Item extra={'20.00'} className="black_val gary_title">服务费</Item>
                <Item extra={'20.00'} className="black_val gary_title">手续费（仅首期）</Item>
                <Item extra={'-20.00'} className="black_val gary_title">优惠券</Item>
                <WhiteSpace/>
            </RepaymentDetailContainer>
      	);
    }
}

// 编写行内样式
const RepaymentDetailContainer = styled.div`
    .header{
        background: #fff;
        .bank_info{
            position: relative;
            padding: 1rem 0 1rem 3rem;
            font-size: 1.6rem;
            color: #A4A4A4;
            font-weight: 600;
            border-bottom: 1px #EAEAEA solid;
            .icon{
                position: absolute;
                top: 50%;
                left: 1.6rem;
                transform: translateX(-50%) translateY(-50%);
                width: 1.9rem;
                height: 1.9rem;
                margin-right: 0.3rem;
            }
        }
        .money_info{
            padding: 1rem 1.6rem 1rem 4rem;
            .subtitle{
                font-size: 1.4rem;
                .auto_repayment{
                    color: #FF7700;
                    float: right;
                }
            }
            p{
                -webkit-margin-before: 0;
                -webkit-margin-after: 0;
                -webkit-margin-start: 0;
                -webkit-margin-end: 0;
            }
            .val{
                font-size: 2.8rem;
                font-weight: 600;
                margin-top: 1rem;
            }
        }
    }
    .more_val{
        .am-list-extra{
            flex-basis: 70%!important;
        }
    }
    .black_val{
        .am-list-extra{
            color: #000!important;
        }
    }
    .gary_title{
        .am-list-content{
            color: #6D6D6D!important;
        }
    }
`;

export default RepaymentDetail;
