import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace } from 'antd-mobile'

class RepayOnce extends Base {

	componentDidMount() {
        this.setTitle('立即还款');
    }

	render() {
		return (
			<RepayOnceContainer>
                <WhiteSpace/>
                <div className="block_list">
                    <div className="item">
                        <div className="title">合同号：</div>
                        <div className="val">7321897</div>
                        <div className="state">还款中</div>
                    </div>
                    <div className="item">
                        <div className="title">当期应还：</div>
                        <div className="val">3999元</div>
                    </div>
                    <div className="item">
                        <div className="title">结清应还：</div>
                        <div className="title">结清应还：</div>
                        <div className="val">7321897</div>
                    </div>
                </div>
                <WhiteSpace/>
                <div className="block_list">
                    <div className="tip">请通过您的借款“企业名称”账户还款至以下账户：</div>
                    <div className="item">
                        <div className="title">公司名：</div>
                        <div className="val">鑫宝公司</div>
                    </div>
                    <div className="item">
                        <div className="title">账户信息：</div>
                        <div className="val">信息信息使用！</div>
                    </div>
                    <div className="item">
                        <div className="title">账号：</div>
                        <div className="val">237894789273284</div>
                    </div>
                </div>
                <div className="warning">请您在还款时备注"合同后三位"以及"全额提前归还借款"或"归还当期欠款"</div>
                <div className="thinks">感谢您的使用！</div>
            </RepayOnceContainer>
		);
	}
}

// 编写行内样式
const RepayOnceContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        width: 9.3rem;
        height: 9.3rem;
        margin: 8rem 0 2rem 0;
    }
    .tip{
        font-size: 2rem;
    }
    .tip{
        width: 100%;
        text-align: left;
        color: #000000;
        font-size: 1.2rem;
        padding: 0.8rem 0;
        background: #fff;
        box-sizing: border-box;
        border-bottom: 0.1rem #EAEAEA solid;
    }
    .block_list{
        position: relative;
        width: 100%;
        padding: 0 15px;
        background: #fff;
        box-sizing: border-box;
        .item{
            position: relative;
            height: 4.5rem;
            border-bottom: 0.1rem #EAEAEA solid;
        }
        .title{
            position: absolute;
            left: 0;
            height: 4.5rem;
            line-height: 4.5rem;
            color: #6D6D6D;
            font-size: 1.4rem;
        }
        .val{
            position: absolute;
            left: 30%;
            height: 4.5rem;
            line-height: 4.5rem;
            color: #FF7700;
            font-size: 1.6rem;
        }
        .state{
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%);
            color: #6D6D6D;
            font-size: 1.2rem;
            background: #E4E4E4;
            border-radius: 1rem;
            padding: 0.6rem;
        }
    }
    .warning{
        width: 100%;
        color: #000000;
        font-size: 1.2rem;
        padding: 1rem 15px;
        background: #F7F7F7;
        box-sizing: border-box;
        line-height: 1.5rem;
        font-weight: 600;
    }
    .thinks{
        color: #6D6D6D;
        font-size: 1.6rem;
        margin-top: 3rem;
    }
`;
 
export default RepayOnce;
