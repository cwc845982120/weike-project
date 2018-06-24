import React from 'react'
import styled from 'styled-components'

class CellText extends React.Component {
    render() {
        const renderIcon = () => {
            if (this.props.icon) {
                return (<img src={this.props.icon} alt="icon" className="icon"/>);
            }
        }
      	return (
        	<CellTextContainer>
                {renderIcon()}
                <span>{this.props.text}</span>
            </CellTextContainer>
      	);
    }
}

// 编写行内样式
const CellTextContainer = styled.div`
    .icon{
        transform: translateY(-8%);
        width: 1.9rem;
        height: 1.9rem;
        margin-right: 0.3rem;
    }
`

export default CellText;
