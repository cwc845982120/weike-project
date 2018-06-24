import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button } from 'antd-mobile'

class CertificationCenter extends Base {

    componentDidMount() {
        this.setTitle('认证中心');
    }

    certificate() {
        // TODO
    }

    render() {
      	return (
        	<CertificationContainer>
				<img src={require('../static/img/certification_bg.png')} alt="认证" className="bg" />
                <WhiteSpace/>
                <WingBlank>
                    <div className="tip">本产品仅限企业法人申请</div>
                </WingBlank>
                <WingBlank>
                    <Button style={ btnStyle } onClick={ this.certificate.bind(this) }>立即认证</Button>
                </WingBlank>
			</CertificationContainer>
      	);
    }
}

// 编写行内样式
const CertificationContainer = styled.div`
	.bg{
        width: 100%;
    }
    .tip{
        font-size: 12px;
        text-align: right;
        margin: 1.5rem 0 1rem 0;
    }
`;

const btnStyle = {
    background: '#ff7700',
    color: '#fff'
} 

export default CertificationCenter;
