import React from 'react'
import Base from '../config/Base'
import styled from 'styled-components'
import NoResult from '../components/NoResult.jsx'
import BorrowRecordItem from '../components/BorrowRecordItem'
import { Modal } from 'antd-mobile'
import { getForeverStorage } from '../common/utils'

const alert = Modal.alert;

class MyLoans extends Base {
    constructor() {
        super();
        this.state = {
            loansList: []
        }
    }

    componentDidMount() {
        this.setTitle('我的贷款');
        let uid = getForeverStorage("userInfo") ? getForeverStorage("userInfo").id : "";
        if (!uid) {
            alert('提示', '未检测到您的认证信息，请重新认证', [
                { text: '取消', onPress: () => console.log('cancel'), style: 'default' },
                { text: '重新认证', onPress: () => {
                    this.props.history.push('/certificationcenter');
                } }
            ]);
            return;
        }
        this.getResponse('/api/queryMyLoad', {
            uid
        }).then(res => {
            if (res.code === 1) {
                this.setState({
                    loansList: res.data
                })
            } else {
                this.$toast(res.msg);
            }
        }).catch(e => {
            console.log(e.message);
            this.$toast("获取贷款信息失败");
        })
    }

    render() {
        let LoanList;
        if (this.state.loansList.length) {
            LoanList = this.state.loansList.map(item => {
                return (
                    <BorrowRecordItem toDetail={() => this.props.history.push(`/borrowsearch?id=${item.id}`) } data={item} key={item.id}/>
                )
            })
        } else {
            LoanList = (<NoResult/>);
        }
        
      	return (
        	<MyLoansContainer>
                { LoanList }
            </MyLoansContainer>
      	);
    }
}

// 编写行内样式
const MyLoansContainer = styled.div`

`;

export default MyLoans;
