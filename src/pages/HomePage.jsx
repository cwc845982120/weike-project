import React from 'react'
import Base from '../config/Base'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { Button, WhiteSpace } from 'antd-mobile'

class HomePage extends Base {
	constructor(props) {
		super(props);
		this.state = {};
	}

	toast() {
		// TODO
	}

    render() {
		const { count, handleClick } = this.props;
      	return (
        	<div>
				<WhiteSpace />
				<Button type="primary" onClick={ this.toast.bind(this) }>primary</Button>
				<WhiteSpace />
				{ count }
				<Div onClick={ handleClick }>+</Div>
			</div>
      	);
    }
}

function mapStateToProps(state) {
	return {
	  	count: state.counter.count
	}
}

function mapDispatchToProps(dispatch) {
	return {
	  	handleClick:() => {
			dispatch({
			  	type: 'increase'
			})
	  	}
	}
}

// 编写行内样式
const Div = styled.div`
  	display: block;
	color: #ccc;
	font-size: 1em;
	margin: 1em;
	padding: 0.25em 1em;
	border: 2px solid palevioletred;
	border-radius: 3px;
	text-align: center;
	a{
		text-decoration: none;
		color: #ccc;
	}
`;

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
