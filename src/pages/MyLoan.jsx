import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'

import NoResult from '../components/NoResult.jsx'
import BorrowRecordItem from '../components/BorrowRecordItem'

class MyLoans extends Base {

    componentDidMount() {
        this.setTitle('我的贷款');
    }

    render() {
      	return (
        	<MyLoansContainer>
                <BorrowRecordItem toDetail={() => this.props.history.push('/borrowsearch') }/>
                <BorrowRecordItem/>
                <BorrowRecordItem/>
                <NoResult/>
            </MyLoansContainer>
      	);
    }
}

// 编写行内样式
const MyLoansContainer = styled.div`

`;

export default MyLoans;
