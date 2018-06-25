import React from 'react'
import styled from 'styled-components'
import { Button, Icon } from 'antd-mobile'

class HomeButton extends React.Component {
    render() {
        // 编写行内样式
        const ButtonContainer = styled.div`
            .am-button{
                height: 5rem;
            }
            .btn_active{
                background: #ff7700;
                color: #fff;
                .icon{
                    background-image: url(${this.props.activeIcon});
                }
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
                width: 3.3rem;
                height: 2.8rem; 
                background-size: 100% 100% no-repeat;
                background-image: url(${this.props.icon});
            }
        `;
      	return (
            <ButtonContainer>
                <Button
                    icon={<div className="icon"></div>} 
                    activeClassName="btn_active" 
                    onClick={ () => {
                        this.props.action();
                }}>
                    <span>{ this.props.title }</span>
                    <Icon type="right" className="left_icon"/>
                </Button>
            </ButtonContainer>
      	);
    }
}

export default HomeButton;
