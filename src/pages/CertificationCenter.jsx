import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import { WhiteSpace, WingBlank, Button } from 'antd-mobile'

// import CompanySearch from '../components/CompanySearch'

class CertificationCenter extends Base {

    componentDidMount() {
        this.setTitle('认证中心');
    }

    certificate() {
        this.props.history.push('/apply');
    }

    render() {
      	return (
        	<CertificationContainer>
                { /**<div className="search_wrapper">
                    <CompanySearch />
                </div> */}
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
    position: relative;
    .search_wrapper{
        width: 86%;
        position: absolute;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
    }
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
