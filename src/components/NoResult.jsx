import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'

class NoResult extends Base  {
    render() {
        return (
            <NoResultContainer>
                <img src={require('../static/img/fail_icon.png')} alt="icon"/>
                <div className="tip">暂无记录</div>
            </NoResultContainer>
        )
    }
}

// 编写行内样式
const NoResultContainer = styled.div`
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
`;

export default NoResult;
