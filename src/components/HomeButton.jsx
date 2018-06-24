import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'antd-mobile'

class HomeButton extends React.Component {
    render() {
      	return (
            <ButtonContainer>
                <Button icon={<img src={this.props.icon} alt="icon" className="icon"/>} activeClassName="btn_active" onClick={ () => {
                    this.props.action();
                }}>
                    <span>{ this.props.title }</span>
                    <Icon type="right" className="left_icon"/>
                </Button>
            </ButtonContainer>
      	);
    }
}

// 编写行内样式
const ButtonContainer = styled.div`
    .am-button{
        height: 5rem;
    }
    .btn_active{
        background: #ff7700;
        color: #fff;
    }
    span{
        position: absolute;
        left: 6rem;
    }
    .left_icon{
        position: absolute;
        right: 1rem;
    }
    .icon{
        position: absolute;
        left: 1.5rem;
        width: 2.2rem;
        height: auto; 
    }
`;

export default HomeButton;
