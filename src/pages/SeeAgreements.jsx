import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import HomeButton from '../components/HomeButton'
import { WhiteSpace, WingBlank } from 'antd-mobile'

class SeeAgreements extends Base {

    componentDidMount() {
        this.setTitle('查看合同');
    }

    render() {
      	return (
        	<SeeAgreementsContainer>
                <WhiteSpace/>
                <WhiteSpace/>
                <WingBlank>
                    <HomeButton icon={require("../static/img/agreement1.png")} title="征询查询授权书" action={ () => {
						// TODO
					}}/>
                </WingBlank>
                <WhiteSpace/>
                <WingBlank>
                    <HomeButton icon={require("../static/img/agreement2.png")} title="借款合同" action={ () => {
						// TODO
					}}/>
                </WingBlank>
                <WhiteSpace/>
                <WingBlank>
                    <HomeButton icon={require("../static/img/agreement3.png")} title="注册协议" action={ () => {
						// TODO
					}}/>
                </WingBlank>
                <WhiteSpace/>
                <WingBlank>
                    <HomeButton icon={require("../static/img/agreement4.png")} title="委托代收协议" action={ () => {
						// TODO
					}}/>
                </WingBlank>
            </SeeAgreementsContainer>
      	);
    }
}

// 编写行内样式
const SeeAgreementsContainer = styled.div`

`;

export default SeeAgreements;
