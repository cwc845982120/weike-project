import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'

class ApplySuccess extends Base {

    componentDidMount() {
        this.setTitle('收到申请');
        setTimeout(() => {
            this.props.history.push('/seeagreements');
        }, 3000)
    }

    render() {
      	return (
        	<ApplySuccessContainer>
                <img src={require('../static/img/apply_received.png')} alt="logo" className="logo"/>
                <div className="title">您好！</div>
                <div className="tip">
                    <p>您的贷款申请已经收到,</p>
                    <p>我司会尽快与您联系！</p>
                </div>
            </ApplySuccessContainer>
      	);
    }
}

// 编写行内样式
const ApplySuccessContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .logo{
        width: 7rem;
        height: 7rem;
        margin: 4.5rem 0 2.5rem 0;
    }
    .title{
        font-size: 2rem;
    }
    .tip{
        text-align: center;
        color: #888888;
        font-size: 1.4rem;
        margin: 1rem 0;
    }
`;

export default ApplySuccess;
