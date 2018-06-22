import React from 'react'
import { Button, Icon } from 'antd-mobile';

class HomeButton extends React.Component {
    render() {
      	return (
        	<Button icon={<img src={this.props.icon} alt="icon" style={ iconStyle } />} style={ buttonStyle } activeStyle={ activeStyle } onClick={ () => {
                this.props.action();
            }}>
				<span style={ spanStyle }>{ this.props.title }</span>
                <Icon type="right" style={ leftIcon } />
			</Button>
      	);
    }
}

const buttonStyle = {
    position: 'relative'
}

const iconStyle = {
    position: 'absolute',
    left: '1.5rem',
    width: '2.2rem',
    height: 'auto'
}

const spanStyle = {
    position: 'absolute',
    left: '6rem',
}

const leftIcon = {
    position: 'absolute',
    right: '1rem',
}

const activeStyle = {
    background: '#ff7700',
    color: '#fff'
}

export default HomeButton;
