import React from 'react'
import styled from 'styled-components'

import { Modal } from 'antd-mobile'

const alert = Modal.alert;

class CompanySearch extends React.Component {
    constructor() {
        super();
        this.state = {
            companyCode: ""
        }
    }

    search() {
        const self = this;
        // TODO
        alert('温馨提示', '您的企业信息有误，请重新输入', [
            { text: '取消', onPress: () => console.log('取消'), style: 'default' },
            { text: '确定', onPress: () => {
                self.setState({companyCode: ''})
            }}
        ]);
        console.log(this.state.companyCode);
    }

    render() {
      	return (
        	<CompanySearchContainer>
                <div className="search-wrapper">
                    <input type="text" placeholder="请输入企业编码" className="company_code" value={this.state.companyCode} onChange={event => this.setState({ companyCode: event.target.value })}/>
                    <div className="search" onClick={this.search.bind(this)}>查询</div>
                </div>
                <div className="content no_val">
                    <div className="item">
                        <p className="title">企业名称</p>
                        <div className="val">某某公司</div>
                    </div>
                    <div className="item">
                        <p className="title">企业法人</p>
                        <div className="val">某某公司</div>
                    </div>
                    <div className="item">
                        <p className="title">预授信额度</p>
                        <div className="val">某某公司</div>
                    </div>
                </div>
            </CompanySearchContainer>
      	);
    }
}

// 编写行内样式
const CompanySearchContainer = styled.div`
    width: 100%;
    background: rgba(255, 119, 0, 0.6);
    padding: 4%;
    border-radius: 1rem;
    box-sizing: border-box;
    .search-wrapper{
        width: 100%;
    }
    .company_code{
        border-radius: 0.7rem;
        padding: 0.5rem;
        border: none;
        height: 2rem;
        line-height: 2rem;
        width: 60%;
        background: #fef6ec;
    }
    .search{
        background: #CDCDCD;
        border-radius: 1rem;
        margin: 0 0 0 4%;
        text-align: center;
        height: 3rem;
        line-height: 3rem;
        float: right;
        width: 28%;
    }
    .content{
        .item{
            .title{
                color: #fff;
                font-size: 1.4rem;
            }
            .val{
                width: 100%;
                padding: 0.8rem;
                background: #fef6ec;
                box-sizing: border-box;
                border-radius: 0.7rem;
            }
        }
    }
    .no_val{
        opacity: 0;
    }
`

export default CompanySearch;
